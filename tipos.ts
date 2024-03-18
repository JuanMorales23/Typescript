const numberVar: number = 1;
//La inferencia de datos es dejar que Ts tome el tipo con base al valor
let texto = 'hola';
let numero = 20;
let c = numberVar + numero;  //También será numero infiriendo

//Cuando no sabe inferir un tipo, lo marca como any
//Se le dice que Ignore el tipado de typescript, no que puede tomar cualquier valor y luego pretender ser ello
let a; //??

//Cuando no se sabe el tipo
let unknownVar: unknown;

//Type alias
//Se hace en Pascal Case
type Hero = {
    name: string,
    age: number
}

//Objetos 
//Se le asigna el tipo Hero
let hero: Hero = {
    name: 'thor',
    age: 1500
}
//Si le intento poner una propiedad nueva pone problema
// hero.power = 100;

function createHeroes(name: string, age: number): Hero{
    return {
        name, age
    }
}

const thor = createHeroes('Thor', 1500);