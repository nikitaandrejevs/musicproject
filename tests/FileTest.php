<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\FileHandler\Handler;

class FileTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $file = new Handler("001-G3.mp3");
        $this->assertEquals(20897, $file->getFileSize());
        $this->assertNotEquals(null, $file->getContent());
        $this->assertEquals(20897, strlen($file->getContent()));
    }

    public function testSave()
    {
        $file = new Handler("001-G3.mp3");
        $this->assertEquals(20897, strlen($file->getContent()));

        $result = $file->save(storage_path(). "/Notes/" . "mfile.txt");
        $this->assertEquals(true, $result);

        $savedFile = new Handler("mfile.txt");
        $this->assertEquals(20897, strlen($savedFile->getContent()));
        $this->assertEquals($file->getContent(), $savedFile->getContent());
    }
}
