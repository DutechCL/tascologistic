<template>
    <div v-if="ordersStore.showDetailOrder">
        <div class="px-8">
            <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
              <i class="pi pi-arrow-left pr-3" @click="hiddenDetailOrder"></i>
              <i class="pi pi-inbox !text-xl"></i>
              Nota de venta N° {{ordersStore.currentOrder.DocNum}}
              <Tag :icon="'pi pi-shopping-cart'" :value="ordersStore.currentOrder.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
            </h1>
            <div class="flex align-center mb-2">
            </div>
            <Tag :icon="'pi pi-user'" :value="ordersStore.currentOrder.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>
            <br>
            <div class="flex">
              <strong class="mr-3">NOTA: </strong><Tag :value="ordersStore.currentOrder.Comments" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>
            </div>
      
            <div class="flex">
              <!-- <div class="card flex justify-content-center ">
                <MultiSelect v-model="selectedQuantity" :options="products" filter optionLabel="Quantity" placeholder="Cantidad" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
              </div>
              <div class="card flex justify-content-center ">
                <MultiSelect v-model="selectedItemCode" :options="products" filter optionLabel="ItemCode" placeholder="SKU" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
              </div> -->
            </div>
            <DataTable tableStyle="min-width: 50rem" filters="filters" :value="ordersStore.currentOrder.OrderItems">
              <Column headerClass="!bg-primary-900"  field="Quantity" header="Cantidad">
                  <template #body="slotProps">
                      <p>{{slotProps.data.Quantity}} {{ slotProps.data.Quantity > 1 ? 'Unidades' : 'Unidad' }}</p>
                  </template>
              </Column>
              <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>
              <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto">
                <template #body="slotProps">
                  <p>{{slotProps.data.ItemDescription }}</p>
                </template>
              </Column>
              <Column headerClass="!bg-primary-900"  field="WarehouseCode" header="Almacén"></Column>
              <Column headerClass="!bg-primary-900"  field="U_SBO_StockVentas" header="Stock Ventas">
                <template #body="slotProps">
                  <p>{{slotProps.data.U_SBO_StockVentas}} {{ slotProps.data.U_SBO_StockVentas > 1 ? 'Unidades' : 'Unidad' }}</p>
              </template>
              </Column>
              <Column headerClass="!bg-primary-900"  field="id" header="" >
                <template #body="slotProps">
                  <Button
                    :icon="'pi pi-check-circle'"
                    @click="checkProduct(slotProps.data, 'complete')"
                    label="Completado"
                    :class="{
                      '!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5 p-buttons-picker': ordersStore.isCompleteMapped[slotProps.data.id],
                      '!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker': !ordersStore.isCompleteMapped[slotProps.data.id]
                    }"
                    :outlined="!ordersStore.isCompleteMapped[slotProps.data.id]">
                  </Button>
                  <Button
                    :icon="'pi pi-info-circle rotate-180'"
                    @click="checkProduct(slotProps.data, 'problem')"
                    label="Problema" 
                    :class="{
                      '!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5 p-buttons-picker': ordersStore.isProblemMapped[slotProps.data.id],
                      '!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker': !ordersStore.isProblemMapped[slotProps.data.id]
                    }"
                    :outlined="!ordersStore.isProblemMapped[slotProps.data.id]">
                  </Button>
                </template>
              </Column>
              
          </DataTable>
      
          <div class="mini-table mt-8">
            <DataTable v-if="ordersStore.currentOrder?.orderItemsProblems && (ordersStore.currentOrder?.orderItemsProblems || []).length > 0" tableStyle="min-width: 50rem" filters="filters" :value="ordersStore.currentOrder?.orderItemsProblems" class="teble-probelm">
          
                <Column headerClass="!bg-secundary-300"  field="ItemCode" header="SKU" class="p-3" style="padding-top: 15px; max-width: 100px"></Column>
                <Column headerClass="!bg-secundary-300"  field="ItemDescription" header="Producto" class="p-3" style="padding-top: 15px"></Column>
                <Column headerClass="!bg-secundary-300"  field="problems" header="Problema" class="p-3" style="padding-top: 15px">
                  <template #body="slotProps">
                    <Tag v-for="(problem, index) in slotProps.data.problems" :key="index" :value="problem.title" rounded class="my-2 mr-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
                  </template>
                </Column>
            </DataTable>
          </div>
      
          <div class="mt-8 flex float-right">
            <Button @click="hiddenDetailOrder" label="Cancelar" class="mr-4 !py-1.5 !px-10 p-button-outlined float-right !border-primary-900 !text-primary-900"/>
            <Button @click="actionOrder" :disabled="disableButton" label="Finalizar pedido" class="!py-1.5 !border-none !px-10 !bg-primary-900 float-right"/>
          </div>
        </div>
        <div class="space"></div>
      <div class="content-picker-problem">
        <DialogReportProblemOrderItem 
          v-model:visible="ordersStore.showDialogProblem" 
          :product="product"
          :problemsProduct="problemsSelected"
          :typeProblems="constants.RESPONSIBLE_PICKER_REVIEWER"
          @selection-change="handleSelectionChange" 
          @visible="visibleReportMethod"
          />
      </div>
          
    </div>
    <ConfirmDialog></ConfirmDialog>  
</template>

<script setup>
import { ref, watch } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import { useOrdersPickerReview } from '../../../stores/orders/ordersPickerReview.js';
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog';
import DialogReportProblemOrderItem from '../components/DialogReportProblemOrderItem.vue'
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
import constants from '@/constants/constants';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();
const ordersStore = useOrdersPickerReview()
const disableButton = ref(true)
const setProductsCheck = new Set();

const hiddenDetailOrder = () => {
  ordersStore.showDetailOrder = false
  ordersStore.setOrderItemsProblems.clear();
  ordersStore.isProblemMapped = []
  ordersStore.isCompleteMapped = []
}

const checkProduct = (rowData, action) => {
  ordersStore.orderItem           = rowData

  ordersStore.showDialogProblem   = (action !== 'complete') 
  ordersStore.isCompleteMapped[rowData.id] = (action === 'complete');
  ordersStore.isProblemMapped[rowData.id] = (action !== 'complete');

  if ((ordersStore.currentOrder?.orderItemsProblems || []).length > 0) {
    if(action === 'complete'){
      ordersStore.currentOrder.orderItemsProblems = ordersStore.currentOrder?.orderItemsProblems.filter(item => item.id !== rowData.id);
    }
  }
  
  const productCheck = (action === 'complete') 
        ? setProductsCheck.add(rowData)
        : setProductsCheck.delete(rowData);

  ordersStore.currentOrder.ordersItemsComplete = Array.from(productCheck);
};

watch(
  () => [ordersStore.currentOrder?.orderItemsProblems, ordersStore.currentOrder?.ordersItemsComplete],
  () => {
    const currentOrder  = ordersStore.currentOrder;

    let completeMapped = Object.keys(ordersStore.isCompleteMapped).filter(key => ordersStore.isCompleteMapped[key] === true);
    let problemMapped = Object.keys(ordersStore.isProblemMapped).filter(key => ordersStore.isProblemMapped[key] === true);

    let totalItemsProcess = completeMapped.length + problemMapped.length

    disableButton.value = totalItemsProcess!== currentOrder.OrderItems.length;

  }
);

const actionOrder = async () => {

  const result = await showConfirm();

  if (result) {
    try {
      let action = (ordersStore.currentOrder.orderItemsProblems || [] ).length == 0 ? constants.ACTION_APPROVE : constants.ACTION_REJECT;

      let body = {
        action: action,
        orderId: ordersStore.currentOrder.id,
        responsible: ordersStore.currentOrder.responsible,
        orderItemsProblem: ordersStore.currentOrder?.orderItemsProblems ?? [],
      }

      let response = await ordersStore.processOrderAction(body);

      if (response.status === 'success') {
        ordersStore.showDetailOrder = false;
        ordersStore.setOrderItemsProblems.clear();
        ordersStore.isProblemMapped = []
        ordersStore.isCompleteMapped = []
        showToast({
          status: response.status,
          message: response.message,
        });
      }
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    disableButton.value = false;
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}

</script>