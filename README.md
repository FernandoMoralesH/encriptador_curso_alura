# Encriptador curso alura

Programa web para encriptar mensajes.

## _Índice_

- 1.- [Propósito](#id1)
- 2.- [Modelo Figma](#2)
- 3.- [Lenguaje de programación Utilizado](#3)
- 4.- [Funciones](#4)
- 5.- [Resultado](#5)
- 6.- [Repositorio](#6) 



[![Ejemplo de imagen](https://via.placeholder.com/150)](https://www.ejemplo.com)

[![gI joe](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Propósito <a name="id1"></a>

> El proposito de l proyecto es el de tomar practica al momento de comenzar a realizar un proyecto web desde 0.
> 
> El proyecto tiene el objetivo de encriptar y descencriptyar mensajes mediante el siguiente modelo:

    - Las "llaves" de encriptación que utilizaremos son las siguientes:

            La letra "e" es convertida para "enter"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "o" es convertida para "ober"
            La letra "u" es convertida para "ufat"

            Requisitos:

                - Debe funcionar solo con letras minúsculas
                - No deben ser utilizados letras con acentos ni caracteres especiales.
                - Debe ser posible convertir una palabra para la versión encriptada también
                devolver una palabra encriptada para su versión original.

            Por ejemplo:
            "gato" => "gaitober"
            gaitober" => "gato"

                - La página debe tener campos para inserción del texto que será encriptado o 
                   desencriptado, y el usuario debe poder escoger entre as dos opciones.
                - El resultado debe ser mostrado en la pantalla.


## Modelo Figma <a name="2"></a>

La version preliminar se realizo en Figma, quedando de le siguiente manera:

- Cuenta con un Text Field para poder escribir el mensaje a encriptar/desencriptar.
- Cuenta con dos botones para poder realizar ambas unciones por separado.
- Cuenta dos Tex Areas, lugar donde se despliega el mensaje encriptado y desencriptado respectivamente.

![Modelo](img/modelo figma_encriptador)


## Lenguaj de Programación Utilizado <a name="3"></a>

Se utilizaron las siguientes recursos para realizar el proyecto:

- HTML: Para la estructura del proyecto.
- CSS: Para darleestilo y formato al proyecto
- Javascript: Se utiliza para generar la secuencia de codigos que haga el proceso de encriptación y viseversa.


## Funciones <a name="4"></a>

Encriptacion:

- El mensaje debe escribirse solo con letras mayusculas.
- Del mensaje escrito se encriptan solo las vocales.
- Se respeta secuencia de letras consonantes y espacios.

Desencriptación:

- El mensaje encriptadose puede copiar diretcmenete del sistema.
- La funcion desencripta solo la secuencia de letras que generan cada vocal.
- Se respeta secuencia de letras consosnantes y espacios.

## Resultado <a name="5"></a> 

![Resultado](img/Encriptador)

## Repositorio <a name="6"></a>

[Repositorio GitHub](https://fernandomoralesh.github.io/encriptador_curso_alura/)


















