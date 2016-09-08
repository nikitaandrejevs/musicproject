<?php

use App\FileHandler\Handler;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class audio_table_seeder extends Seeder
{


    public function getFileName($file)
    {
        $ext = substr($file, -3);

        if ($ext == "mp3") {
            return $file;
        }
        else return null;
    }


    /**
     * Run the database seeds.
     *
     * @param $filename
     * @return null|string
     */
    public function getFileContent($filename)
    {
        $file = new Handler("$filename");
        return $file->getContent();
    }


    public function run()
    {
        DB::table('audio')->truncate();

        $files = scandir(storage_path()."/Notes/");
        foreach ($files as $file){
            $fileName = $this->getFileName($file);
            if ($fileName) {
                $f = explode('.', $fileName);
                DB::table('audio')->insert([
                    'filename' => $fileName,
                    'hashed' => Hash::make($fileName),
                    'title' => $f[0],
                    'extension' => $f[1],
                    'file' => base64_encode($this->getFileContent($fileName))
                ]);
            }
        }


    }
}
