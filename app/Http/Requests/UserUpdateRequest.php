<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
        $id = $this->get('id') ?? request()->route('id');
        
        return [
            'email'               => 'required|unique:users,email,' . $id,
            'name'                => 'required',
            'mobile_phone_number' => 'nullable',
            'userRoles'           => 'required|array',
            'userWarehouses'      => 'nullable|array',
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
