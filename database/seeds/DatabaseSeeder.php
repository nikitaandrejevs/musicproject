<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $this->call(audio_table_seeder::class);
        // $this->call(UsersTableSeeder::class);
    }
}
