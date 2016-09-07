<?php

namespace app\FileHandler;


class Handler
{

    private $filename;
    private $fileSize;
    private $content = null;

    /**
     * Handler constructor.
     * @param $title
     */
    public function __construct($title)
    {
        $content = "";
        $this->filename = storage_path() . "/Notes/" . $title;
        $this->fileSize = filesize($this->filename);
        $handle = fopen($this->filename, 'rb');

        $content .= fread($handle, $this->fileSize);
        $this->content = $content;

        fclose($handle);

    }

    public function save($path)
    {
        file_put_contents($path, $this->getContent());
        return true;
    }
    /**
     * @return string
     */
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * @return int
     */
    public function getFileSize()
    {
        return $this->fileSize;
    }

    public function getContent()
    {
        return $this->content;
    }
}