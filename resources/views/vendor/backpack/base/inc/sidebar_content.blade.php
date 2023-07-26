@php
    $menuTree = \App\Models\MenuItem::getTree();
@endphp

@each('partials.menu', $menuTree, 'menuItem')

<!-- This file is used to store sidebar items, starting with Backpack\Base 0.9.0 -->
<{{-- li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

@can('workers.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('worker') }}'><i class='nav-icon la la-user-tie'></i>{{ __('menu.workers') }}</a></li>
@endcan

@can('request_refunds.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('request-refunds') }}'><i class='nav-icon la la-money-check-alt'></i> {{ __('menu.request_refunds') }}</a></li>
@endcan

@canany([
    'positions.read',
    'workplaces.read',
    'contract_types.read',
    'book_categories.read',
    'burden_types.read',
    'burden_statuses.read',
    'banks.read',
    'request_types.read',
    'request_status.read',
    'account_types.read',
    'request_type_document.read',
])
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-th-list"></i> {{ __('menu.params') }}</a>
    <ul class="nav-dropdown-items">
        @can('banks.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('bank') }}'><i class='nav-icon la la-landmark'></i> {{ __('menu.banks') }}</a></li>
        @endcan

        @can('payment_methods.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('payment-method') }}'><i class='nav-icon la la-cash-register'></i> {{ __('menu.payment_methods') }}</a></li>
        @endcan

        @can('account_types.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('account-type') }}'><i class='nav-icon la la-briefcase'></i> {{ __('menu.account_types') }}</a></li>
        @endcan

        @can('book_categories.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('book-category') }}'><i class='nav-icon la la-bookmark'></i> {{ __('menu.book_categories') }}</a></li>
        @endcan

        @can('positions.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('position') }}'><i class='nav-icon la la-briefcase'></i> {{ __('menu.positions') }}</a></li>
        @endcan

        @can('workplaces.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('workplace') }}'><i class='nav-icon la la-building'></i> {{ __('menu.workplaces') }}</a></li>
        @endcan

        @can('contract_types.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('contract-type') }}'><i class='nav-icon la la-folder-open'></i> {{ __('menu.contract_types') }}</a></li>
        @endcan

        @can('burden_types.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('burden-type') }}'><i class='nav-icon la la-users'></i> {{ __('menu.burden_types') }}</a></li>
        @endcan

        @can('burden_statuses.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('burden-status') }}'><i class='nav-icon la la-bookmark'></i> {{ __('menu.burden_statuses') }}</a></li>
        @endcan

        @can('request_types.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('request-type') }}'><i class='nav-icon la la-list-ol'></i> {{ __('menu.request_types') }}</a></li>
        @endcan

        @can('request_status.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('request-status') }}'><i class='nav-icon la la-list-alt'></i> {{ __('menu.request_statuses') }}</a></li>
        @endcan

        @can('request_type_document.read')
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('request-type-document') }}'><i class='nav-icon la la-folder'></i> {{ __('menu.request_type_documents') }}</a></li>
        @endcan
    </ul>
</li>
@endcan

@can('benefits.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('benefit') }}'><i class='nav-icon la la-hand-holding-heart'></i> {{ __('menu.benefits') }}</a></li>
@endcan

@can('public_documents.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('public-document') }}'><i class='nav-icon la la-passport'></i> {{ __('menu.public_documents') }}</a></li>
@endcan

@can('personal_documents.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('personal-document') }}'><i class='nav-icon la la-id-card'></i> {{ __('menu.personal_documents') }}</a></li>
@endcan



@can('books.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('book') }}'><i class='nav-icon la la-book'></i> {{ __('menu.books') }}</a></li>
@endcan

@can('payrolls.read')
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('payroll') }}'><i class='nav-icon la la-file-invoice-dollar'></i> {{ __('menu.payrolls') }}</a></li>
@endcan

<!-- Users, Roles, Permissions -->
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i> {{ __('menu.authentication') }}</a>
    <ul class="nav-dropdown-items">
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i class="nav-icon la la-user"></i> <span>{{ __('menu.users') }}</span></a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('role') }}"><i class="nav-icon la la-id-badge"></i> <span>{{ __('menu.roles') }}</span></a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('permission') }}"><i class="nav-icon la la-key"></i> <span>{{ __('menu.permissions') }}</span></a></li>
    </ul>
</li>

@canany(['settings.read', 'notification_templates.read'])
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-cog"></i> {{ __('menu.settings') }}</a>
    <ul class="nav-dropdown-items">
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('setting') }}'><i class='nav-icon la la-cog'></i> <span>{{ __('menu.settings') }}</span></a></li>

        @can('notification_templates.read')
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('notification-template') }}'><i class='nav-icon la la-bell'></i> {{ __('menu.notification_templates') }}</a></li>
        @endcan
    </ul>
</li>
@endcan
 --}}