<template>
  <div class="px-8">
    <div v-if="!isDataLoaded" class="text-center" style="color:#259bd7">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
    </div>
    <div v-if="!activeDetails">
      <div class="flex justify-between ">
        <div>
          <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
            Pickeo / Revisión
          </h1>
        </div>
        <Search @search="search"/>
      </div>
      <!-- Start table orders here -->
      <DataTableOrdersPickerReview 
        v-if="isDataLoaded && ordersHere.length > 0"
        :title="'Aqui'" 
        :type="constants.METHOD_SHIPPING_HERE" 
        :orders="ordersHere" 
        @action="showDetailOrder"/>
      <!-- End table orders here -->

      <!-- Start table orders PickupAndDelivery -->
      <DataTableOrdersPickerReview 
        v-if="isDataLoaded && ordersPickup.length > 0 || ordersDelivery.length > 0"
        :title="'Retiro / Despacho'" 
        :type="constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY" 
        :orders="[ ...ordersPickup, ...ordersDelivery ]"
        @action="showDetailOrder"/>
      <!-- End table orders PickupAndDelivery -->
      
    </div>
    <div v-if="activeDetails">
        <div class="px-8">
            <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
              <i class="pi pi-inbox !text-xl"></i>
              Nota de venta N° {{order.DocNum}}
              <Tag :icon="'pi pi-shopping-cart'" :value="order.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
            </h1>
            <div class="flex align-center mb-2">
            
              
            </div>
            <Tag :icon="'pi pi-user'" :value="order.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>
      
            <!-- <div class="flex">
              <div class="card flex justify-content-center ">
                <MultiSelect v-model="selectedQuantity" :options="products" filter optionLabel="Quantity" placeholder="Cantidad" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
              </div>
              <div class="card flex justify-content-center ">
                <MultiSelect v-model="selectedItemCode" :options="products" filter optionLabel="ItemCode" placeholder="SKU" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
              </div>
            </div> -->
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
            <!-- <router-link :to="{ name: 'pickup-review' }" class="mr-3 p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Cancelar</router-link> -->
            <Button @click="hiddenDetailOrder" label="Cancelar" class="mr-4 !py-1.5 !px-10 p-button-outlined float-right !border-primary-900 !text-primary-900"/>
            <Button @click="actionOrder" label="Finalizar pedido" class="!py-1.5 !border-none !px-10 !bg-primary-900 float-right " :disabled="disableButton"/>
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
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, toRefs } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from '../components/Search.vue'
import { useOrders } from '../../../services/OrdersApiService.js';
import { UseSearch } from '../composables/UseSearch.js'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog';
import DialogReportProblem from '../components/DialogReportProblem.vue'
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
import DataTableOrdersPickerReview from '../components/tables/DataTableOrdersPickerReview.vue'
import constants from '@/constants/constants';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();

const ordersStore = useOrders()
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
const problemsSelected = ref([])
const setCompleteProducts = new Set();
const setOfProducts = new Set();
const setProductsCheck = new Set();
const isDataLoaded = ref(false)
const activeDetails = ref(false)

const { listOrdersHere, listOrdersPickup, listOrdersDelivery } = toRefs(ordersStore.$state);

const ordersHere = ref([])
const ordersPickup = ref([])
const ordersDelivery = ref([])

onBeforeMount(async () => {
  try {
    await ordersStore.getOrdersPickerAndReviewer();

    ordersHere.value = listOrdersHere.value
    ordersPickup.value = listOrdersPickup.value
    ordersDelivery.value = listOrdersDelivery.value

    isDataLoaded.value = true;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
});


const search = (value) => {
  ordersHere.value = filterOrdersByNumberAndName(listOrdersHere.value, value)
  ordersPickup.value = filterOrdersByNumberAndName(listOrdersPickup.value, value)
  ordersDelivery.value = filterOrdersByNumberAndName(ordersDelivery.value, value)
  console.log(ordersHere.value)
}
  
function filterOrdersByNumberAndName(orders, data) {
  return orders.filter(order => 
    order.DocNum.toString().includes(data.value.toString())  || 
    order.Customer.CardName.toLowerCase().includes(data.value.toLowerCase())
  );
}

const showDetailOrder = (data) => {
  activeDetails.value = true
  order.value = data.order
  products.value = data.order.OrderItems
  assingResponsible(data.type)
}

const assingResponsible = async (type) => {
  await ordersStore.assingResponsible({responsible: type}, order.value.id);
}

const hiddenDetailOrder = () => {
  activeDetails.value = false
}

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

const handleSelectionChange = (selection, value) => {
  console.log(selection, value)
  let products = setOfProducts.add(selection)
  productsProblem.value = Array.from(products)
  visibleReport.value = value.visibleReport;
    // productsProblem.value = tempSelection;
};

const actionOrder = async () => {

  const result = await showConfirm();
  if (result) {
    try {
      let action = productsComplete.value.length == products.value.length

      let body = {
        orderId: order.value.id,
        action: action,
        responsible: 'picker',
        orderItemsProblem: productsProblem.value ?? [],
      }

      let response = await ordersStore.processOrderAction(body);

      if(response.status == 'success'){
        hiddenDetailOrder()
      }
      showToast({
        status: data.status,
        message: data.message,
      });
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}

</script>

<style>
.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-calendar .p-inputtext{
  border: none !important;
  padding: 6px;
  color: #fff;
  font-weight: 600;
  background: transparent;
}

.p-confirm-dialog .p-dialog-content {
  padding: 45px !important;
}

.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-button.p-component.p-confirm-dialog-accept{
  background: #259bd7!important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: #259bd7!important;
  font-weight: 600;
  color: #ffffff !important;
}
.p-dialog.p-component.p-ripple-disabled.p-confirm-dialog{
  padding: 15px !important;
  background: #ffffff !important;
}

.close-filter-date{
  padding: 0px;
  cursor: pointer;
  background: #259bd7;
  color: #fff;
  font-weight: 600;
  border-radius: 50%;
  width: 25px;
  text-align: center;
  position: absolute;
  border: 1px solid;
  right: 6px;
  top: 6px;
  height: 25px;
}
.active-filter-date{
  background: #259bd7;
  border-radius: 27px;
  height: 40px;
}
.active-filter-date i{
  font-size: 12px;
}

.text-not-info{
  font-size: 20px;
  color: #898989;
}
</style>