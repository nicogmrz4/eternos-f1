#!/bin/bash

# Buscar los archivos .json dentro del directorio public/data y mostrarlos en una listaa como opciones a elegir al usuario

# Obtener la lista de archivos .json
files=$(ls public/data | grep ".json")

# Mostrar la lista de archivos al usuario
PS3="Seleccione una temporada:"
select file in $files; do
    if [ -n "$file" ]; then
        read -p "Ingrese el ID de la temporada: " seasonId
        if [ -n "$seasonId" ]; then
            data=$(curl "http://f1eternosjsongen.local/api/seasons/$seasonId/export")
            echo $data > $PWD/public/data/$file
        fi

        echo $file
        break;
    else
        echo "Opción inválida."
    fi
done
