<?php

namespace App\Traits;

trait RecordSignature
{
    protected static function boot()
    {
        parent::boot();

        if (backpack_auth()->user()) {
            static::creating(function ($model) {
                $model->created_by = backpack_auth()->user()->id;
            });

            static::updating(function ($model) {
                $model->updated_by = backpack_auth()->user()->id;
            });

            static::deleting(function ($model) {
                $model->deleted_by = backpack_auth()->user()->id;
                $model->saveQuietly();
            });
        }
    }
}
