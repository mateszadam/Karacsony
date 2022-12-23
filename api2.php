<?php
$file = fopen('file.txt', 'r');
$content = fread($file, filesize('file.txt'));
fclose($file);

$myFile = fopen("file.txt", "w") or die("Nem sikerült megnyitni a fájlt!");
$a = "Adam;20"
$txt = $content . $a;

fwrite($myFile, $content);

fclose($myFile);
?>