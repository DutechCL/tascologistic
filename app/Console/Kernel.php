<?php

namespace App\Console;

use App\Models\Setting;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        \App\Console\Commands\SAPIntegration::class,
    ];

    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $intervalSyncSapInMinutes = (int) Setting::get('_sap_interval_sync') ?? 5;
        $intervalBackupsInDays = (int) Setting::get('_interval_backup') ?? 5;

        // $schedule->command('sap:sync all')
        //          ->everyMinute($intervalSyncSapInMinutes);


        // Ejecuta 'backup:clean' a las 4:00 AM cada 'intervalInDays' días
        $schedule->command('backup:clean')
            ->cron("0 4 */$intervalBackupsInDays * *");
        
        // Ejecuta 'backup:run' a las 5:00 AM cada 'intervalInDays' días
        $schedule->command('backup:run')
            ->cron("0 5 */$intervalBackupsInDays * *");
        
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
