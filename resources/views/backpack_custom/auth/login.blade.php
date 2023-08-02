@extends(backpack_view('layouts.plain'))

@section('content')
<div  class="row">
    <div class="col-md-6 col d-flex align-items-center justify-content-center">
        <img src='{{ asset('images/logo_tasco_negro.png') }}' alt='{{ trans('backpack::crud.processing') }}' style="height: 100px;">
    </div>
    <div class="col-md-6 d-flex justify-content-right">

        <div class="col-12 col-md-8">
            {{-- <h3 class="text-center mb-4">{{ trans('backpack::base.login') }}</h3> --}}
            {{-- <img src='{{ asset('images/logo_tasco.png') }}' alt='{{ trans('backpack::crud.processing') }}' style="margin-left: 33px; height: 50px;"> --}}

           <div> {{--  class="card" --}}
                <div>
                    <h3 class="mt-4">@lang('login.welcome')</h3>
                    <p style="margin-top: -8px!important;">@lang('login.enter_data')</p>
                </div>
                {{-- <div class="card-body"> --}}
                    <form class="col-md-12 p-t-10" role="form" method="POST" action="{{ route('backpack.auth.login') }}" style="padding-left: 0px; padding-right: 0px;">
                        {!! csrf_field() !!}

                        <div class="form-group">
                            <label class="control-label" for="{{ $username }}">@lang('login.email')</label>

                            <div>
                                <input type="text" class="form-control{{ $errors->has($username) ? ' is-invalid' : '' }}" name="{{ $username }}" value="{{ old($username) }}" id="{{ $username }}" placeholder="correo@correo.com">

                                @if ($errors->has($username))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first($username) }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label label_color" for="password">@lang('login.password')</label>
                            <div class="input-group content_input_password">
                                <input class="form-control {{ $errors->has('password') ? ' is-invalid' : '' }}" type="password" name="password" id="password" value="" placeholder="*****">
                                <div class="input-group-append clickme" onclick="showPassword('password')">
                                    <span>
                                        <img src="{{ asset('images/eyes.png') }}" alt="Ver" class="img-flui eyes_password">
                                    </span>
                                </div>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        {{-- <div class="form-group">
                            <label class="control-label" for="password">@lang('login.password')</label>

                            <div>
                                <input type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" id="password" placeholder="*****">
                                <div class="input-group-append clickme" onclick="showPassword('password')">
                                    <span class="">
                                        <img src="{{ asset('images/eyes.png') }}" alt="Ver" class="img-flui">
                                    </span>
                                </div>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div> --}}

                        <div class="form-group form-inline">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" name="remember"> @lang('login.remember_me')
                              </label>
                            </div>
                            <div class="text-center" display="inline-block">
                              <a href="{{ route('backpack.auth.password.reset') }}">@lang('login.forgot_your_password')</a>
                            </div>
                        </div>

                        <div class="form-group">
                            <div>
                                <button type="submit" class="btn btn-block btn-info">
                                    {{ trans('backpack::base.login') }}
                                </button>
                            </div>
                        </div>
                    </form>
                {{-- </div> --}}
            </div>
            {{-- @if (backpack_users_have_email() && backpack_email_column() == 'email' && config('backpack.base.setup_password_recovery_routes', true))
                <div class="text-center"><a href="{{ route('backpack.auth.password.reset') }}">@lang('login.forgot_your_password')</a></div>
            @endif --}}
            @if (config('backpack.base.registration_open'))
                <div class="text-center">@lang('login.not_account') <a href="{{ route('backpack.auth.register') }}">@lang('login.register')</a></div>
            @endif
        </div>
    </div>
</div>

@endsection

@push('crud_fields_styles')
    <style>
        #clickme {
            cursor: pointer
        }
    </style>
@endpush

@push('after_scripts')
<script>
    function showPassword(field){
        const type = $(`input[id=${field}]`).attr('type');

        if (type == 'password') {
            $(`input[id=${field}]`).attr('type', 'text');
        } else {
            $(`input[id=${field}]`).attr('type', 'password');
        }
    }
</script>
@endpush
