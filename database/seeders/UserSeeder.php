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

       User::firstOrCreate([
            'name' => 'Manager',
            'email' => 'manager@gmail.com',
            'tenant_id' => 1,
            'password' => bcrypt('12345678'),
            'role' => "manager",
            'email_verified_at' => now(),
            "is_active" => true,
       ]);

        User::firstOrCreate([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'tenant_id' => 2,
            'password' => bcrypt('12345678'),
            'role' => "admin",
            'email_verified_at' => now(),
            "is_active" => true,
        ]);

         User::firstOrCreate([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'tenant_id' => 0,
            'password' => bcrypt('12345678'),
            'role' => "manager",
            'email_verified_at' => now(),
            "is_active" => true,
        ]);
    }
}
