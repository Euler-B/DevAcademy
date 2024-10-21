var b = 3;
var a = 1;
var c = 8;
const discriminante = Math.sqrt(b * b - 4 * a * c);
var xa = -b + discriminante / (2 * a);
var xb = -b - discriminante / (2 * a);

// Esto es un comentario, tiene fines informativos dentro del codigo que escribimos, y no es ejecutable por el compilador/interprete.

// El discriminante es una expresion que se calcula a partir de los coeficientes de un polinomio, y nos proporciona
// informacion importante sobre las raices de una ecuacion, en este caso lo usaremos, para determinar si una raiz
// es negativa, y en caso de der negativa evitamos hacer el calculo de la misma ya que sabemos que en el campo 
// de los numeros reales no existen raices cuadradas negativas. 

if (discriminante >= 0) {
  console.log(`la raiz positiva es:`, xa);
  console.log(`la raiz negativa es:`, xb);
} else {
    console.log(`*************************************************************************************************` );
    console.log(`\t\tEl discriminante obtenido es negativo. \n  Por lo que no existe una solucion en ` +
    `el campo de los numeros reales, para una raiz negativa   `);
    console.log(`*************************************************************************************************` );
}
