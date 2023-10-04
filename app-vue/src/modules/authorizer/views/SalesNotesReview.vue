<template>
  <div class="px-8">
      <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-inbox !text-xl"></i>
        Nota de venta N° {{order.DocNum}}
        <Tag :icon="'pi pi-shopping-cart'" :value="order.method_shipping?.name" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
      </h1>
      <div class="flex align-center mb-2">
      
        
      </div>
      <Tag :icon="'pi pi-user'" :value="order.customer?.CardName" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>

      <div class="flex">
        <div class="card flex justify-content-center ">
          <MultiSelect v-model="selectedQuantity" :options="products" filter optionLabel="Quantity" placeholder="Cantidad" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
        </div>
        <div class="card flex justify-content-center ">
          <MultiSelect v-model="selectedItemCode" :options="products" filter optionLabel="ItemCode" placeholder="SKU" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
        </div>
      </div>
      <DataTable tableStyle="min-width: 50rem" filters="filters" :value="products">
        <Column headerClass="!bg-primary-900"  field="Quantity" header="Cantidad">
            <template #body="slotProps">
                <p>{{slotProps.data.qty}} {{slotProps.data.Quantity}}</p>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>
        <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto"></Column>
        <Column headerClass="!bg-primary-900"  field="ubication" header="Ubicación"></Column>
        <Column headerClass="!bg-primary-900"  field="id" header="" >
          <template #body="slotProps">
            <Button
              :icon="'pi pi-check-circle'"
              @click="checkProduct(slotProps.data, 'complete')"
              label="Completado"
              :class="{
                '!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5': isCompleteMap[slotProps.data.id],
                '!py-2.5 !border-primary-900 !text-primary-900 mr-5': !isCompleteMap[slotProps.data.id]
              }"
              :outlined="!isCompleteMap[slotProps.data.id]"
            >
            </Button>
            <Button
              :icon="'pi pi-info-circle rotate-180'"
              @click="checkProduct(slotProps.data, 'problem')"
              label="Problema" 
              :class="{
                '!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5': isProblemMap[slotProps.data.id],
                '!py-2.5 !border-primary-900 !text-primary-900 mr-5': !isProblemMap[slotProps.data.id]
              }"
              :outlined="!isProblemMap[slotProps.data.id]"
            >
            </Button>
          </template>
        </Column>
        
    </DataTable>

    <div class="mini-table mt-8">
      <DataTable v-if="productsProblem.length > 0" tableStyle="min-width: 50rem" filters="filters" :value="productsProblem" class="teble-probelm">
    
          <Column headerClass="!bg-secundary-300"  field="ItemCode" header="SKU"></Column>
          <Column headerClass="!bg-secundary-300"  field="ItemDescription" header="Producto"></Column>
          <Column headerClass="!bg-secundary-300"  field="problems" header="Problema">
            <template #body="slotProps">
              <Tag v-for="(problem, index) in slotProps.data.problems" :key="index" :value="problem.title" rounded class="mr-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
            </template>
          </Column>
      </DataTable>
    </div>

    <div class="mt-8 flex float-right">
      <router-link :to="{ name: 'pickup-review' }" class="mr-3 p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Cancelar</router-link>
      <Button @click="processOrderPickerAndReviewer" label="Finalizar pedido" class="!py-1.5 !border-none !px-10 !bg-primary-900 float-right " :disabled="disableButton"/>
    </div>
  </div>
  <div class="space"></div>

  <DialogReportProblem 
    v-model:visible="visibleReport" 
    :product="product"
    :problemsProduct="problemsSelected"
    :typeProblems="'picker-revisor'"
    @selection-change="handleSelectionChange" 
    @visible-report="visibleReportMethod"
    />
    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref, computed, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
import { useConfirm } from "primevue/useconfirm";
import { useOrders } from '../../../services/OrdersApiService.js';
import { useToast } from 'primevue/usetoast';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog';
import DialogReportProblem from '../components/DialogReportProblem.vue'
import MultiSelect from 'primevue/multiselect';

const confirm = useConfirm();
const toast = useToast();
const ordersStore = useOrders()
const route = useRoute();

const orderId = computed(() => route.params.id);
const responsible = computed(() => route.params.responsible);

const order = ref([])
const product = ref([])
const products = ref([])
const isCompleteMap = ref([])
const isProblemMap = ref([])
const visibleReport = ref(false)
const disableButton = ref(true)
const productsProblem = ref([])
const productsComplete = ref([])
const productsCheck = ref([])
const selectedQuantity = ref([])
const selectedItemCode = ref([])
const problemsSelected = ref([])

const setCompleteProducts = new Set();
const setOfProducts = new Set();
const setProductsCheck = new Set();

onBeforeMount( async() => {
  order.value =  await ordersStore.showOrder(orderId.value);
  products.value = order.value.order_items
  
  let data = {
    update_status: true,
    responsible: responsible.value
  }
  await ordersStore.updateOrder(orderId.value, data);
})

const checkProduct = (rowData, action) => {
  
  const productCheck = setProductsCheck.add(rowData);
  
  if (rowData.id) {
    const productComplete = (action === 'complete')
    ? setCompleteProducts.add(rowData)
    : setCompleteProducts.delete(rowData);
    
    if(action === 'complete')
    {
      setOfProducts.delete(rowData);
      productsProblem.value = Array.from(setOfProducts);
    }else{
      problemsSelected.value = rowData.problems
    }    

    isCompleteMap.value[rowData.id] = (action === 'complete');
    isProblemMap.value[rowData.id] = (action !== 'complete');
    visibleReport.value = (action !== 'complete');
    product.value = (action !== 'complete') ? rowData : null;

    productsCheck.value = Array.from(productCheck);
    disableButton.value = (productsCheck.value.length !== products.value.length);
    productsComplete.value = Array.from(productComplete);
  }
};

const visibleReportMethod = ({ value, tempSelection }) => {
  if (!value) {
    visibleReport.value = visibleReport.visibleReport;
    productsProblem.value = tempSelection;
  }
};

const handleSelectionChange = (selection) => {
  selection.product.problems = productsProblem.value
  let products = setOfProducts.add(selection.product)
  productsProblem.value = Array.from(products)
};

const processOrderPickerAndReviewer = async () => {
  confirm.require({
      message: '¿Estas seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: async() => {
        let isSuccessOrder = productsComplete.value.length == products.value.length

        let data = {
          orderId: orderId.value,
          isSuccessOrder: isSuccessOrder,
          responsible: responsible.value,
          orderItemsProblem: productsProblem.value ?? [],
        }

        let response = await ordersStore.processOrderPickerAndReviewer(data);

        if(response.status == 'success') {
          toast.add({ severity: response.status, summary: '', detail: response.message, life: 3000 });
          setTimeout(() => {
            window.location.href = '/app/autorizador/pickeo-revision'
          }, 1000);
        }
      },
      reject: () => {
      }
    });
}

</script>

<style>
.p-confirm-dialog .p-dialog-content {
  padding: 45px !important;
}

.p-button.p-component.p-confirm-dialog-accept{
  background: #259bd7!important;
}

.p-dialog.p-component.p-ripple-disabled.p-confirm-dialog{
  padding: 15px !important;
  background: #ffffff !important;
}
.teble-probelm tr{
  height: 60px !important;
}

.teble-probelm td{
  padding: 10px !important;
}
.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: #259bd7!important;
  font-weight: 600;
  color: #ffffff !important;
}
</style>