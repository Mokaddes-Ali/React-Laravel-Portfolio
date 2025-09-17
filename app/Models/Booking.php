<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $primaryKey = "booking_id";
    protected $fillable = [
        'tenant_id',
        'guest_id',
        'room_id',
        'check_in_date',
        'check_out_date',

    ] ;

    public $timestamps = true;
}
