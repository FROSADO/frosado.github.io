---
tags:
  - linux
  - bash
---

La técnica para poder manipular el valor de una variable a la que se hace referencia en un script de Bash. 
Una variable se procesa encerrando el nombre de la variable entre los caracteres `${ }`. La lógica de procesamiento se define mediante caracteres que siguen al nombre de la variable. 
Por ejemplo, la variable llamada MSG, la instrucción `${MSG^^}` convierte todos los caracteres en minúsculas de la variable MSG a mayúsculas, así:

```bash
MSG="hola Mundo"
echo ${MSG^^}
# HOLA MUNDO
```

Hay varias manipulaciones posibles segun el caracter que se ponga : 
- `^` : Mayusculas . Cambia el primer caracter de la cadena a Mayúsculas
- `^^`: Todo a MAYÚSCULAS: Cambia la cadena completa a Mayúsculas
- `,`: Minusculas: El primer caracter a minúsculas.
- `,,`: La cadena completa en minusculas

```bash
TXT="Hola MUNDO"
echo ${TXT,}
# hola MUNDO
echo ${TXT,,}
# hola mundo
echo ${TXT,^^} | echo ${1,,}

# El siguiente ejemplo para concatenar dos operaciones
echo ${MSG,,} | (read var; echo ${var^})
#     ^                          ^
#  Todo min.                 Solo primer carácter
# Hola mundo
```

Tambien se puede modificar las cadenas usando expresiones regulares o porciones de las cadenas.

Tambien se pueden usar expresiones regulares. 

Por ejemplo, si quiero cambiar una palabra concreta: 

```bash
TXT="Saluda a Manuel"
echo ${TXT//Manuel/David}
# Saluda a David

TXT="Necesito 100 euros"
# Va a cambiar todo los textos y va da dejar solo los numeros
echo ${TXT//[a-zA-Z]/X}
# XXXXXXXX 100 XXXXX

# Cambiar los numeros
echo ${TXT//[0-9]/Z}
# Necesito ZZZ euros

# O solo una porcion de texto 
echo ${TXT:4}
# sito 100 euros

echo ${TXT:4:7}
# sito 10

```

