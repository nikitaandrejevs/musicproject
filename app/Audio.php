<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Audio extends Model
{
    public function getRandomSound()
    {
        return Audio::all()->count();
    }
}
