<?php

namespace App\Services\Payment;

use App\Models\Order;
use App\Models\Customer;

use App\Services\SAP\SAPService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;


class PaymentService
{

    public function createPayment(Request $request)
    {
        $result = $this->processPaymentData($request);

        // dd($result);
        $sap = new SAPService();
        $response = $sap->post('payment', $result);

        return $response;
    }

    public function processPaymentData(Request $request): array
    {
        $order = $this->getOrder($request->orderId);
        $customer = $this->getCustomer($request, $order);

        // dd($order, $customer);
        if (!$order || !$customer) {
            throw new ModelNotFoundException('Order or Customer not found.');
        }

        return $this->buildPaymentArray($order, $customer);
    }

    private function getOrder($orderId): ?Order
    {
        return Order::getOrder($orderId);
    }

    private function getCustomer(object $input, $order): ?Customer
    {
        return $order ? $order->customer : Customer::find($input['customerId']);
    }

    /**
     * Construye un arreglo de pago para enviar a SAP.
     *
     * @param array $input Datos de entrada provenientes del formulario.
     * @return array
     */
    public function buildPaymentArray(Order $order, Customer $customer): array
    {
        // dd($order, $customer);
        return [
            "DocNum" => $order->DocNum,
            "HandWritten" => $order->HandWritten,
            "Printed" => $order->Printed,
            "DocDate" => $order->DocDate,
            "Address" => $order->Address,
            "DocCurrency" => $order->DocCurrency,
            "DocRate" => $order->DocRate,
            "Reference1" => $order->Reference1,
            "Reference2" => $order->Reference2,
            "TaxDate" => $order->TaxDate,
            "Series" => $order->GroupCode,
            "DiscountPercent" => $order->DiscountPercent,
            "DocObjectCode" => $order->DocObjectCode,
            "Cancelled" => $order->Cancelled,
            "AttachmentEntry" => $order->AttachmentEntry,
            "PayToCode" => $order->PayToCode,
            "ContactPersonCode" => $customer->ContactPersonCode,
            "DocType" => $customer->DocType,
            "CardCode" => $customer->CardCode,
            "CardName" => $customer->CardName,
            "DeductionPercent" => $customer->DeductionPercent, 
            "ProjectCode" => $customer->ProjectCode, 
            "WTCode" => $customer->WTCode, 
            "BankCode" => "", 
            "BankAccount" => "", 
            "WTAmount" => "", 
            "WTAmountFC" => "", 
            "WTAmountSC" => "", 
            "WTAccount" => "", 
            "WTTaxableAmount" => "", 
            "PayToBankCode" => "", 
            "PayToBankBranch" => "", 
            "PayToBankAccountNo" => "", 
            "PayToBankCountry" => "", 
            "ControlAccount" => "",
            "AuthorizationStatus" => "", 
            "BPLID" => "", 
            "BPLName" => "", 
            "VATRegNum" => "", 
            "BlanketAgreement" => "", 
            "Cig" => "", 
            "Cup" => "", 
            "SignatureInputMessage" => "", 
            "SignatureDigest" => "", 
            "CertificationNumber" => "", 
            "PrivateKeyVersion" => "",
            "CashAccount" => "",
            "CashSum" => "",
            "CheckAccount" => "",
            "TransferAccount" => "",
            "TransferSum" => "",
            "TransferDate" => "",
            "TransferReference" => "",
            "LocalCurrency" => "",
            "CounterReference" => "",
            "Remarks" => "",
            "JournalRemarks" => "",
            "SplitTransaction" => "",
            "CurrencyIsLocal" => "",
            "DeductionSum" => "",
            "CashSumFC" => "",
            "CashSumSys" => "",
            "BoeAccount" => "",
            "BillOfExchangeAmount" => "",
            "BillofExchangeStatus" => "",
            "BillOfExchangeAmountFC" => "",
            "BillOfExchangeAmountSC" => "",
            "BillOfExchangeAgent" => "",
            "Proforma" => "",
            "IsPayToBank" => "",
            "DocEntry" => "",
            "PaymentPriority" => "",
            "TaxGroup" => "",
            "BankChargeAmount" => "",
            "BankChargeAmountInFC" => "",
            "BankChargeAmountInSC" => "",
            "UnderOverpaymentdifference" => "",
            "UnderOverpaymentdiffSC" => "",
            "WtBaseSum" => "",
            "WtBaseSumFC" => "",
            "WtBaseSumSC" => "",
            "VatDate" => "",
            "TransactionCode" => "",
            "PaymentType" => "",
            "TransferRealAmount" => "",
            "DocTypte" => "",
            "DueDate" => "",
            "LocationCode" => "",
            "UnderOverpaymentdiffFC" => "",
            "PaymentByWTCertif" => "",
            // "PaymentChecks" => $this->buildPaymentChecks($order),
            // "PaymentInvoices" => $this->buildPaymentInvoices($order),
            // "PaymentCreditCards" => $this->buildPaymentCreditCards($order),
        ];
    }

        /**
     * Construye el subarreglo de PaymentInvoices.
     *
     * @param array $input Datos de entrada.
     * @return array
     */
    private function buildPaymentChecks(array $input): array
    {
        // Verifica si hay datos para PaymentChecks y construye el subarreglo
        if (isset($input['PaymentChecks']) && is_array($input['PaymentChecks'])) {
            return [

            ];
        }

        return [];
    }

    /**
     * Construye el subarreglo de PaymentInvoices.
     *
     * @param array $input Datos de entrada.
     * @return array
     */
    private function buildPaymentInvoices(array $input): array
    {
        $paymentInvoices = [];
    
        // Verifica si hay datos para PaymentInvoices y construye el subarreglo
        if (isset($input['PaymentInvoices']) && is_array($input['PaymentInvoices'])) {
            foreach ($input['PaymentInvoices'] as $invoiceInput) {
                $paymentInvoices[] = [
                    "DocEntry" => $invoiceInput['DocEntry'],
                    "SumApplied" => $invoiceInput['SumApplied'],
                    "InvoiceType" => $invoiceInput['InvoiceType'],
                ];
            }
        }
    
        return $paymentInvoices;
    }        

    /**
     * Construye el subarreglo de PaymentCreditCards.
     *
     * @param array $input Datos de entrada.
     * @return array
     */
    private function buildPaymentCreditCards(array $input): array
    {
        $paymentCreditCards = [];

        // Verifica si hay datos para PaymentCreditCards y construye el subarreglo
        if (isset($input['PaymentCreditCards']) && is_array($input['PaymentCreditCards'])) {
            foreach ($input['PaymentCreditCards'] as $creditCardInput) {
                $paymentCreditCards[] = [
                    "CreditCard" => $creditCardInput['CreditCard'],
                    "CreditAcct" => $creditCardInput['CreditAcct'],
                    "CreditCardNumber" => $creditCardInput['CreditCardNumber'],
                    "CardValidUntil" => $creditCardInput['CardValidUntil'],
                    "VoucherNum" => $creditCardInput['VoucherNum'],
                    "CreditSum" => $creditCardInput['CreditSum'],
                ];
            }
        }

        return $paymentCreditCards;
    }

}
