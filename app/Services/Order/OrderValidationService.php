<?php

namespace App\Services\Order;

class OrderValidationService
{
    /**
     * Comprueba si el usuario actual tiene permiso para acceder a una bodega específica.
     * 
     * @param string $wareHouseCode Código de la bodega a verificar.
     * @return bool Retorna true si el usuario tiene permiso para la bodega, false en caso contrario.
     */
    public function isValidWarehouseForUser($wareHouseCode)
    {
        $user = auth()->user();

        return in_array($wareHouseCode, $user->allowedWarehouses()->toArray(), true);
    }
}
