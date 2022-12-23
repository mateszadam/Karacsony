<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="loose">
        <h1>Vesztettél!</h1>
        <p id="pont"></p>
        <p id="mPont"></p>

    </div>
    <div id="snowDiv">

    </div>

    <div id="basket">
        <?php

        // Megnyitjuk a fájlt olvasásra
        $file = fopen('file.txt', 'r');
        
        // Fájl tartalmát beolvassuk
        $content = fread($file, filesize('file.txt'));
        
        // Bezárjuk a fájlt
        fclose($file);
        
        // A fájl tartalmát kiíratjuk
        echo $content;
        
        ?>
    </div>

    <div id="nav">
        <div class="btn" id="navLeft">←</div>
        <div class="btn" id="navRight">→</div>
    </div>




    <script src="script.js"></script>
</body>
</html>