<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'tbl_table';
    protected $primaryKey = 'gender_id';
    protected $fillable = [
        'gender',
    ];

    public function users(): Hasmany {
        return $this->hasMany(User::class, 'gender_id', 'gender_id');
    }
}
