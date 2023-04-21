/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arregloDeArreglos = [];
   for(const clave in objeto){
      if(objeto.hasOwnProperty(clave)){
         const arregloKeyValue = [clave, objeto[clave]];
         arregloDeArreglos.push(arregloKeyValue);
      }
   }
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const letrasContadas = {};
   
   const stringLimpiado = string.toLowerCase().replace(/\s+/g, '');
   
   for(let i = 0; i < stringLimpiado.length; i++){
      const letra = stringLimpiado[i];
      if(letrasContadas.hasOwnProperty(letra)){
         letrasContadas[letra]++;
      }else{
         letrasContadas[letra] = 1;
      }
   }


   const letrasContadasOrdenadas = {};
   const letrasOrdenadas = Object.keys(letrasContadas).sort();
   for (let i=0; i < letrasOrdenadas.length; i++){
      const letra = letrasOrdenadas[i];
      letrasContadasOrdenadas[letra] = letrasContadas[letra];
   }

   return letrasContadasOrdenadas;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = '';
   let minusculas = '';

   for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         mayusculas += string[i];
      }else{
         minusculas += string[i];
      }
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split(' ');

   for(let i = 0;i < palabras.length; i++){
      palabras[i] = palabras[i].split('').reverse().join('');
   }

   let resultado = palabras.join(' ');
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroStr = numero.toString();
   let longitud = numeroStr.length;

   for(let i = 0; i < longitud / 2;i++){
      if(numeroStr[i] !== numeroStr[longitud - 1 - i]){
         return "No es capicua";
      }
   }

   return "Es capicua";

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let resultado = string.replace(/[abc]/g, '');

   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b){
      return a.length - b.length;
   });

   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let elementosComunes = array1.filter(function(elemento) {
      return array2.indexOf(elemento) !== -1;
   });

   return elementosComunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
