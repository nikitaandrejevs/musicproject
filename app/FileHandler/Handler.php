<?php

namespace app\FileHandler;


class Handler
{

    public $filename;
    public $filesize;
    public $handle;
    public $content;
    /**
     * Handler constructor.
     */
    public function __construct($title)
    {
        $this->filename = "/Users/Xors/MusicProject/storage/app/Notes/".$title;
        $this->filesize = filesize($this->filename);
        $this->handle = fopen($this->filename, 'rb');
    }

    public function getContent()
    {
        $content = "";
        while (!feof($this->handle))
        {
            $content .= fread($this->handle, 1024);
        }
        return $content;
    }
}