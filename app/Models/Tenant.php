<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tenant extends Model
{
      use HasFactory;
    protected $primaryKey = "tenant_id";
    protected $fillable = [
        'hotel_name',
        'address',
        'contact_number',
        'price_per_night',
        'status',
    ] ;

    public $timestamps = true;

    public function room(){
        return $this->hasMany(\App\Models\Room::class,'tenant_id','tenant_id');
    }
}
