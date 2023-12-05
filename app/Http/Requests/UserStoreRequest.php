<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'email'               => 'required|unique:users,email',
            'name'                => 'required',
            'mobile_phone_number' => 'nullable',
            'password'            => 'required',
            'userRoles'           => 'required|array',
            'userWarehouses' => 'nullable|array',
            'sales_person_id'     => [
                'nullable',
                'exists:sales_persons,id',
                Rule::requiredIf(function () {
                    // Verificar si '5' está presente en 'userRoles' y 'sales_person_id' es nulo
                    $userRoles = $this->input('userRoles');
            
                    return is_array($userRoles) && in_array(5, $userRoles) && is_null($this->input('sales_person_id'));
                }),
            ]
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
            'name'                => __('user.crud.name'),
            'email'               => __('user.crud.email'),
            'password'            => __('user.crud.password'),
            'userRoles'           => __('user.crud.roles'),
            'userWarehouses'      => __('user.crud.warehouse'),
            'mobile_phone_number' => __('user.crud.phone'),
            'sales_person_id'     => __('user.crud.sales_person'),
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
            '*.required' => 'El campo :attribute es requerido',
            'email.unique' => 'El :attribute ya existe',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ];
    }
}
