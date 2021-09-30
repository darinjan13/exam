<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public $table = 'orders';
    public $timestamps = false;
    protected $fillable = [
        'details', 'discount', 'tax', 'total'
    ];
    protected $cast = [
        'details' => 'array'
    ];
}