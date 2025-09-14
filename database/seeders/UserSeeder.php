<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aminRole = Role::firstorCreate([
            'name' => 'mokaddes_admin',
            'email' => 'mokaddes.ru2000@gmail.com',
        ]);

       User::firstOrCreate([
            'name' => 'Mokaddes Ali',
            'email' => 'mokaddes.ru2000@gmail.com',
            'password' => bcrypt('Alina@20040mokaddes'),
            'role_id' => $aminRole->id,
            'email_verified_at' => now(),

        ]);
    }
}
