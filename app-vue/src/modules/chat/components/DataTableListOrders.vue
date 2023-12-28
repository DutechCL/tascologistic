<template>
    <DataTable 
      tableStyle="min-width: 50rem" 
      :value="data" 
      :rowsPerPageOptions="[5, 10, 20, 50]" 
      :rows="5" 
      @page="getData"
      paginator 
      dataKey="id" 
      filterDisplay="row" 
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} a {last} de {totalRecords}">
      <Column headerClass="!bg-primary-900" field="DocNum" header="" style="width: 50px !important; min-width: 50px !important; max-width: 50px !important;">
        <template #body="slotProps">
          <div v-if="slotProps.data.chat.status === 'open'" class="chat-active" >

          </div>
          <router-link 
          v-if="slotProps.data.chat.status === 'close'" 
          :to="{name: 'show-chat', params: { id: slotProps.data.chat.id }}" 
          class="" >
          <i style="font-size: 30px;" class="pi pi-eye text-primary-900"></i>
        </router-link>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.order.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14" field="order.Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14" field="order.Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14" field="order.MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="getIcon(slotProps.data.order.method_shipping_id)"  :value="slotProps.data.order.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14"  field="order.MethodShippingName" header="Desde" >
          <template #body="slotProps">
            <Tag :value="slotProps.data.order.report_problem_location" class="p-tag-1 tag-font-method tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14" field="order.SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900" sortable class="font-14" field="order.report_user_name" header="Informador"></Column>

      <Column headerClass="!bg-primary-900" class="font-14"  field="note" header="" >
        <template #body="slotProps">
            <div class="flex gap-2">
              <router-link v-if="slotProps.data.chat.status === 'open'" :to="{name: 'show-chat', params: { id: slotProps.data.chat.id }}" style="      padding-top: 12px;" class="!border-primary-900 !text-primary-900 btn-custom-table" >Revisar</router-link>
              <Button v-if="slotProps.data.chat.status === 'open'" @click="resolveChatAndOrder(slotProps.data.chat.id)" class="!text-primary-900 btn-custom-table" label="Resuelto"></Button>
            </div>
        </template>
      </Column>
    </DataTable>
    <!-- <ConfirmDialog/> -->
    <Toast/>
</template>

<script setup>

    import { ref, onBeforeMount, watch, defineProps } from 'vue';
    import DataTable  from 'primevue/datatable';
    import  Column  from 'primevue/column';
    import  Tag from 'primevue/tag';
    import  Button  from 'primevue/button';
    import ConfirmDialog from 'primevue/confirmdialog';
    import { useChat } from '../../../stores/chat/chat';
    import { ToastMixin } from '../../../Utils/ToastMixin';
    import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
    import constants from '@/constants/constants';
    const { showToast } = ToastMixin.setup();
    const { showConfirm } = ConfirmMixin.setup();
    const chat = useChat();
    const props = defineProps({
        data: Array,
    });

    const data = ref([]);

    onBeforeMount(() => {
        data.value = props.data;
    });

    watch(() => props.data, (newVal) => {
        data.value = newVal;
    });

    const getIcon = (method_shipping_id) => {
      switch (method_shipping_id) {
        case constants.METHOD_SHIPPING_PICKUP_ID:
          return 'pi pi-home';
        case constants.METHOD_SHIPPING_DELIVERY_ID:
          return 'pi pi-truck';
        default:
          return 'pi pi-shopping-cart';
      }
    }

    const resolveChatAndOrder = async (id) => {
      const result = await showConfirm();

        if (result) {
          try{
            let response = await chat.resolveChatAndOrder(id);
            if (response.status === 'success') {
                showToast({
                  status: response.status,
                  message: 'Orden resuelta',
                });
                data.value = data.value.filter((item) => item.chat.id !== id);
                chat.getResolve();
            }
          } catch (error) {
            if (error.response) {
              showToast({
                status: error.response.data.status,
                message: error.response.data.message,
              });
            }
          }
        }else{
          showToast({
            status: 'info',
            message: 'Proceso cancelado',
          });
        }
    }
</script>


<style>
    [data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }

    .btn-custom-table{
      border: 1px solid;
      border-radius: 6px;
      background: #fff;
      height: 50px !important;
      width: 90px !important;
      min-width: 85px !important;
      margin: auto;
      text-align: center;
      padding: 0;
    }

    .btn-custom-table:hover{
      border-color: #3B82F6 !important;
      background: #fff !important;
    }

    .chat-active{
      background: #00bf12;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    .font-14{
      font-size: 14px !important;
    }
</style>