/*
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. 
Agregando además las siguientes funciones:

Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python
*/
const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]



// Declaration

function Koder( name, lastname, generation, birthDate, bootcamp, scores){
    this.name = name;
    this.lastname = lastname;
    this.generation = generation;
    this.birthDate = birthDate;
//  this.country = country;
    this.bootcamp = bootcamp;
    this.school = "Kodemia";
    this.scores = scores;
    this.Mascotas = 'Ninguna';
    this.greet = function(){
        console.log( `Hola mi nombre es ${this.name} y soy de la generacion ${this.generation} de ${this.bootcamp}` )
    }
    this.asking = function(question, mentor){
        console.log(`${mentor} tengo duda sobre ${question}`)
    }
    this.getAge = function() {
        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }
    this.getAverage = function() {
        const sumaScore = this.scores.reduce((accum,current)=>{
            return accum += current.score
        },0) // / this.score.length

        const Average = sumaScore / this.scores.length

        return Average 
    }
}

//instancia

// forEach
console.log(".forEach")

const kodersArray = []

kodersCollection.forEach((current, index)=>{
let koder = new Koder( current.name , current.lastName, current.generation , current.birthday, current.bootcamp, current.scores )
kodersArray.push(koder)
})

console.log(kodersArray) 

// Map
console.log(".Map")

const koders = kodersCollection.map((current, index) => new Koder( current.name , current.lastName, current.generation , current.birthday, current.bootcamp, current.scores ))

console.log(koders)

/*const koders = kodersCollection.map((current, index)=>{
return new Koder( current.name , current.lastName, current.generation , current.birthday, current.bootcamp, current.scores )
})*/

console.log(".filter")

const kodersJS = koders.filter((current)=>{
//    console.log(current)
//    if(current === 'JavaScript') return current
    return current.bootcamp === 'JavaScript'
})
console.log(kodersJS)

const kodersPtn = koders.filter((current)=> current.bootcamp === 'Python')
console.log(kodersPtn)


//otras opciones

console.log(" ")

let newArrayKoders = kodersCollection.map((koder)=>{
    return new Koder(koder.name, koder.lastName, koder.generation, koder.birthDate, koder.bootcamp, koder.school, koder.scores)
})

console.log(newArrayKoders)
console.log(newArrayKoders[0].bootcamp)

let kodersJavaScript = newArrayKoders.filter( koder => koder.bootcamp === 'JavaScript' )
console.log(kodersJavaScript)
let kodersPython = newArrayKoders.filter( koder => koder.bootcamp === 'Python' )
console.log(kodersPython)