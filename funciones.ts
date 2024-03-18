//Se escriben igual que en javascript pero tiene límite con la inferencia
//A los parametros se les pone el tipo de dato que es.
function saludar(name: string){
    console.log(`Hola ${name}`);
}

//Evitar any implicitos, se puede desactivar de la configuración.

saludar("Juan");
// saludar(2);


//Para tipar objetos
function saludar2({name, age}: {name: string, age: number}){
    console.log(`Nombre ${name}, edad: ${age}`);
}

saludar2({name: "Juan", age: 26});

//también se puede hacer para lo que devuelve
//Si infiere del tipo que retorna como en este caso
// function saludar3({name, age}: {name: string, age: number}){
//     console.log(`Nombre ${name}, edad: ${age}`);
//     return age;
// }

// Pero se puede poner así también
function saludar3({name, age}: {name: string, age: number}): number{
    console.log(`Nombre ${name}, edad: ${age}`);
    return age;
}

// Funciones como parametros
//No está correcto tipar con Function
//La forma de tipar sería: fn: (name: string) => string
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel');
}

sayHiFromFunction((name: string) => {
    console.log(`Hola ${name}`);
})

//Las funciones en js se pueden guardar como variables y pasar como parametros.
//Tipar arrow functions
const sumar = (a: number, b: number): number => {
    return a+b;
}

const restar: (a: number, b: number) => number = (a, b) => {
    return a-b;
}

//never
//funciones que nunca van a devolver nada
function throwError(message: string): never {
    throw new Error(message);
}

// inferencia funciones anonimas segun el contexto
const avengers = ['Spiderman', 'Hulk', 'IronMan'];

avengers.forEach(function (avengers){
    console.log(avengers.toUpperCase());

})