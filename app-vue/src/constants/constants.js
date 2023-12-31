export const API_BASE_URL = '/';

/* Method shipping */
export const METHOD_SHIPPING_HERE_ID     = 1;
export const METHOD_SHIPPING_PICKUP_ID   = 2;
export const METHOD_SHIPPING_DELIVERY_ID = 3;
export const METHOD_SHIPPING_HERE        = 'here';
export const METHOD_SHIPPING_PICKUP      = 'pickup';
export const METHOD_SHIPPING_DELIVERY    = 'delivery';
export const METHOD_SHIPPING_PICKUP_AND_DELIVERY = 'pickup-delivery';

/* responsibles */
export const RESPONSIBLE_CDA      = 'cda';
export const RESPONSIBLE_PICKER   = 'picker';
export const RESPONSIBLE_REVIEWER = 'reviewer';
export const RESPONSIBLE_PICKER_REVIEWER = 'picker-reviewer';
export const RESPONSIBLE_BILLER = 'bills';
export const RESPONSIBLE_PAYMENT = 'payment';
export const RESPONSIBLE_DISPATCH = 'dispatch';

/* Order status */
export const ORDER_STATUS_ON_HOLD         = 1;
export const ORDER_STATUS_ON_PICKER       = 2;
export const ORDER_STATUS_PICKED          = 3;
export const ORDER_STATUS_ON_REVIEWER     = 4;
export const ORDER_STATUS_REVIEWED        = 5;
export const ORDER_STATUS_BILLED          = 6;
export const ORDER_STATUS_PAYMENT         = 7;
export const ORDER_STATUS_REJECTED        = 8;

/* Order actions */
export const ACTION_APPROVE = 'approve';
export const ACTION_REJECT  = 'reject';
export const ACTION_INFO    = 'info';

/* Document types */
export const DOCUMENT_TYPE_GUIDE = 'guide';
export const DOCUMENT_TYPE_INVOICE = 'invoice';

/* Process picker and reviewer */
export const PROCESS_PICKER_ID = 2;
export const PROCESS_REVIEWER_ID = 3;

const constants = {
    API_BASE_URL,
    METHOD_SHIPPING_HERE_ID,
    METHOD_SHIPPING_PICKUP_ID,
    METHOD_SHIPPING_DELIVERY_ID,
    METHOD_SHIPPING_HERE,
    METHOD_SHIPPING_PICKUP,
    METHOD_SHIPPING_DELIVERY,
    METHOD_SHIPPING_PICKUP_AND_DELIVERY,
    RESPONSIBLE_CDA,
    RESPONSIBLE_PICKER,
    RESPONSIBLE_REVIEWER,
    RESPONSIBLE_PICKER_REVIEWER,
    RESPONSIBLE_BILLER,
    RESPONSIBLE_PAYMENT,
    RESPONSIBLE_DISPATCH,
    ORDER_STATUS_ON_HOLD,
    ORDER_STATUS_ON_PICKER,
    ORDER_STATUS_PICKED,
    ORDER_STATUS_ON_REVIEWER,
    ORDER_STATUS_REVIEWED,
    ORDER_STATUS_BILLED,
    ORDER_STATUS_PAYMENT,
    ORDER_STATUS_REJECTED,
    ACTION_APPROVE,
    ACTION_REJECT,
    ACTION_INFO,
    DOCUMENT_TYPE_GUIDE,
    DOCUMENT_TYPE_INVOICE,
    PROCESS_PICKER_ID,
    PROCESS_REVIEWER_ID,
};

export default constants;
