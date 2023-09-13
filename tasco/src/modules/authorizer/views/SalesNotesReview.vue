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
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cantidad" class="md:w-20rem w-full " />
        </div>
        <div class="card flex justify-content-center ">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="SKU" class="md:w-20rem w-full" />
        </div>
      
      </div>
      <DataTable tableStyle="min-width: 50rem" filters="filters" :value="products">
        <Column headerClass="!bg-primary-900"  field="date" header="Cantidad">
            <template #body="slotProps">
                <p>{{slotProps.data.qty}} {{slotProps.data.Quantity}}</p>
            </template>
        </Column>

        <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>

        <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto"></Column>

        <Column headerClass="!bg-primary-900"  field="ubication" header="Ubicación">
        </Column>
      

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
      <DataTable v-if="productsProblem.length > 0" tableStyle="min-width: 50rem" filters="filters" :value="productsProblem">
    
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
      <Button @click="processOrderPickerAndReviewer" label="Finalizar pedido" class="!py-1.5 !border-none !px-10 !bg-primary-900 float-right "/>
    </div>
  </div>
  <div class="space"></div>

  <DialogReportProblem 
    v-model:visible="visibleReport" 
    :product="product"
    @selection-change="handleSelectionChange" 
    @visible-report="visibleReportMethod"
    />
    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref, computed, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

import DialogReportProblem from '../components/DialogReportProblem.vue'

import { useOrders } from '../../../services/OrdersApiService.js';

import { useToast } from 'primevue/usetoast';



const confirm = useConfirm();

const toast = useToast();

const ordersStore = useOrders()
const route = useRoute();

const orderId = computed(() => route.params.id);
const responsible = computed(() => route.params.responsible);

const order = ref([]);
const product = ref([])
const products = ref([])
const isCompleteMap = ref({});
const isProblemMap = ref({});
const visibleReport = ref(false);
const productsProblem = ref([]);
const productsComplete = ref([]);

const setCompleteProducts = new Set();
const setOfProducts = new Set();

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
  if(rowData.id){
    let productComplete;
    if(action == 'complete' ) {
      productComplete = setCompleteProducts.add(rowData)
      isCompleteMap.value[rowData.id] = !isCompleteMap.value[rowData.id]
      isProblemMap.value[rowData.id] = false
    } else {
      productComplete = setCompleteProducts.delete(rowData)
      isProblemMap.value[rowData.id] = !isProblemMap.value[rowData.id]
      isCompleteMap.value[rowData.id] = false
      visibleReport.value = true
      product.value = rowData
    }
    productsComplete.value = Array.from(productComplete)
  }
};

const visibleReportMethod = (value) => {
  visibleReport.value = value.visibleReport;
};

const handleSelectionChange = (selection) => {
  let products = setOfProducts.add(selection.product)
  productsProblem.value = Array.from(products)
};

const processOrderPickerAndReviewer = async () => {
  confirm.require({
      message: '¿Estas seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
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
            window.location.href = '/autorizador/pickeo-revision'
          }, 1000);
        }
      },
      reject: () => {
      }
    });
}

</script>