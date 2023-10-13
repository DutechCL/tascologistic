<template>
  <div class="px-8">
    <div v-if="!isDataLoaded" class="text-center" style="color:#259bd7">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
    </div>
    <div>
    <div class="flex justify-between ">
      <div>
        <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
          Pickeo / Revisión
        </h1>
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          Aquí
        </h2>
      </div>
      <Search @search="search"/>
    </div>
    <div class="flex">
      <FilterMultiSelect :typeOrders="'Here'" :allOrders="allOrdersHere" @filter="filter"/>
    </div>
    <DataTable class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
        <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
          <template #body="slotProps">
            N° {{ slotProps.data.DocNum  }}
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
        <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
        <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
        <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
          <template #body="slotProps">
            <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" :style="{ backgroundColor: slotProps.data.OrderStatusColor, color: getTextColor(slotProps.data.OrderStatusColor) }" class=" tag-font-method tag-radius"></Tag>
          </template>
        </Column>
        
        <Column headerClass="!bg-primary-900"  field="note" header="" >
          <template #body="slotProps">
            <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
            <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
          </template>
        </Column>
        <template v-if="ordersHere.length === 0" #footer>
          <tr>
            <td :colspan="numberOfColumns" class="text-not-info">
              No hay órdenes disponible.
            </td>
          </tr>
        </template>
    </DataTable>
  </div>
    <!--   Table two dispath       -->
     <div>
      <div>
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          Retiro / Despacho
        </h2>
      </div>
      <div class="flex">
        <FilterMultiSelect :typeOrders="'Pickup'" :allOrders="allOrdersPickupAndDelivery" @filter="filter"/>
      </div>
      <DataTable class="mb-20" :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
          <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
            <template #body="slotProps">
              N° {{ slotProps.data.DocNum  }}
            </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
          <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
          <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
          <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
            <template #body="slotProps">
              <Tag Tag :icon="slotProps.data.MethodShippingId === 2 ? 'pi pi-home' : 'pi pi-truck'"   :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
            </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
              <template #body="slotProps">
                  <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
              <template #body="slotProps">
                  <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
            <template #body="slotProps">
            <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" :style="{ backgroundColor: slotProps.data.OrderStatusColor, color: getTextColor(slotProps.data.OrderStatusColor) }" class=" tag-font-method tag-radius"></Tag>
            </template>
          </Column>
          
          <Column headerClass="!bg-primary-900"  field="note" header="" >
            <template #body="slotProps">
              <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
              <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
            </template>
          </Column>
          <template v-if="ordersPickupAndDelivery.length === 0" #footer>
            <tr>
              <td :colspan="numberOfColumns" class="text-not-info">
                No hay órdenes disponible.
              </td>
            </tr>
          </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from '../components/Search.vue'
import { useOrders } from '../../../services/OrdersApiService.js';
import { UseSearch } from '../composables/UseSearch.js'
import FilterMultiSelect from '../components/FilterMultiSelect.vue'

const ordersStore = useOrders()
const orders = ref([]);
const isDataLoaded = ref(false)


onBeforeMount( async() => {
  orders.value =  await ordersStore.getOrdersPickerAndReviewer();
  isDataLoaded.value = true
})

const {
    ordersHere,
    ordersPickupAndDelivery,
    allOrdersPickupAndDelivery,
    allOrdersHere,
    search
} = UseSearch(orders);

const filter = (data) => {
  if(data.type === 'Here'){
    ordersHere.value = data.orders;
  }else{
    ordersPickupAndDelivery.value = data.orders;
  }
}

function getTextColor(bgColor) {
  const rgb = hexToRgb(bgColor);
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const threshold = 0.5;
  return luminance > threshold ? '#000000' : '#FFFFFF';
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
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