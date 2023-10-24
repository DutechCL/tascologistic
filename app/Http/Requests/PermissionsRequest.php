<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // only allow updates if the user is logged in
        return backpack_auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'actions' => function ($attribute, $value, $fail) {
                // Validar cada grupo
                foreach ($value as $group) {
                    if (!isset($group['action']) || empty($group['action'])) {
                        $fail("El campo 'action' es requerido para cada grupo.");
                    }
                    // Puedes agregar más validaciones para otros campos si es necesario
                }
            },
        ];
    }

    /**
     * Get the validation attributes that apply to the request.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name' => __('permission.crud.name'),
            '*.action' => __('permission.crud.action'),
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'El campo :attribute es requerido.',
        ];
    }
}
