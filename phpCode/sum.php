<?php

echo "Digite o primeiro número: ";
$x = trim(fgets(STDIN));

echo "Digite o segundo número: ";
$y = trim(fgets(STDIN));

$x = (int)$x;
$y = (int)$y;

$soma = $x + $y;

echo "A soma de $x e $y é: $soma\n";
?>