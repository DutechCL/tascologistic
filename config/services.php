<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'sap' => [
        'url'      => env('SAP_API_URL'),
        'domain'   => env('SAP_API_DOMAIN'),
        'credentials' => [
            'company_db' => env('SAP_COMPANY_DB'),
            'username'   => env('SAP_USERNAME'),
            'password'   => env('SAP_PASSWORD'),
        ],
        'endpoints'   => [
            'login'   => 'Login',
            'logout'  => 'Logout',
            'orders'  => [
                'get' => 'Orders',
            ],
            'products' => [
                'get' => 'Items',
            ],
            'business_partners' => [
                'get' => 'BusinessPartners',
            ],
            'sales_persons' => [
                'get' => 'SalesPersons'
            ],
            'warehouses' => [
                'get' => 'Warehouses'
            ]
        ]
    ],

    'biller' => [
        'url'      => env('BILLER_API_URL'),
        'domain'   => env('BILLER_API_DOMAIN'),
        'credentials' => [
            'company_db' => env('BILLER_COMPANY_DB'),
            'username'   => env('BILLER_USERNAME'),
            'password'   => env('BILLER_PASSWORD'),
        ],
    ]

];
