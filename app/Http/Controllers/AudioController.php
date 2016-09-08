<?php

namespace App\Http\Controllers;

use App\Audio;
use Illuminate\Http\Request;

use App\Http\Requests;

class AudioController extends Controller
{

    private $audio;

    /**
     * AudioController constructor.
     * @param $audio
     */
    public function __construct(Audio $audio)
    {
        $this->audio = $audio;
    }

    public function checkNote($note, Request $request)
    {
        return $this->audio->checkNote($note, $request);
    }

    public function getRandomSound()
    {
        return $this->audio->getRandomSound();
    }
    public function getSound($title)
    {
        return $this->audio->getSound($title);
    }
    public function getSimpleSounds()
    {
        return $this->audio->getSimpleSounds();
    }
}
