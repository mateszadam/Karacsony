<?php

// Megnyitjuk a fájlt olvasásra
$file = fopen('file.txt', 'r');

// Fájl tartalmát beolvassuk
$content = fread($file, filesize('file.txt'));

// Bezárjuk a fájlt
fclose($file);

// A fájl tartalmát visszaküldjük a JavaScript kódnak
echo $content;

?>