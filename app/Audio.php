<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Audio extends Model
{
    private $simpleNotes = array(
        "A4",
        "B4",
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A5"
    );

    public function inArray($value, $array)
    {
        if (in_array(substr($value, 0, 2), $array)) {
            $s = substr($value,2, 1);
            if(($s == '-') or !$s)
                return true;
        }
        return false;
    }

    public function pickRightNote($note, $collection)
    {
        $result = $collection->filter(function($value) use ($note) {
            return $this->inArray($value->title, array($note));
        });

        return collect($result['0'])->forget('title'); //dunno why, but originally that was a collection of '0' => Array
    }

    /**
     *
     */
    public function getRandomSound()
    {
        $note = $this->simpleNotes[array_rand($this->simpleNotes)];
        $collection = Audio::select('title','hashed', 'file')->where('title', 'like', $note . "%")->get();
        $result = $this->pickRightNote($note, $collection);
        return $result;
    }
    public function getSound($title)
    {
        $collection = Audio::select('title','hashed', 'file')->where('title', 'like', $title . "%")->get();
        return $this->pickRightNote($title, $collection);
    }
    public function getSimpleSounds()
    {
        $collection = Audio::select('id', 'filename', 'hashed')->get();
        $result = $collection->filter(function($value) {
            return $this->inArray($value->title, $this->simpleNotes);
        });
        return $result;
    }
}
