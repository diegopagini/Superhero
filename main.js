let superHeroes = [
    {
        foto: './Assets/batman.jpg',
        nombre: 'Batman',
        poder: 'Billonario',
        edad: 40
    },
    {
        foto: './Assets/capitan.jpg',
        nombre: 'Capitan America',
        poder: 'Fuerza',
        edad: 130
    },
    {
        foto: './Assets/hulk.jpg',
        nombre: 'Hulk',
        poder: 'Fuerza',
        edad: 30
    },
    {
        foto: './Assets/ironman.jpg',
        nombre: 'Iron Man',
        poder: 'Billonario',
        edad: 50
    },
    {
        foto: './Assets/linterna.jpg',
        nombre: 'Linterna Verde',
        poder: 'Una linterna',
        edad: 25
    },
    {
        foto: './Assets/spiderman.jpg',
        nombre: 'Spider-Man',
        poder: 'Trepar',
        edad: 17
    },
    {
        foto: './Assets/superman.jpg',
        nombre: 'Superman',
        poder: 'Vuela',
        edad: 35
    },
    {
        foto: './Assets/wonder.jpg',
        nombre: 'Wonder Woman',
        poder: 'Fuerza',
        edad: 350
    },
]

function mostrarHeroe(){
    heroe = '';
    superHeroes.forEach(el => {
        heroe += `<div>
        <img src='${el.foto}'>
        <h2>${el.nombre}</h2>
        <h4>Tiene el poder de: ${el.poder}</h4>
        <h5>Tiene ${el.edad} de años</h5>
        </div>`
    })
    document.getElementById('container').innerHTML = heroe
}
mostrarHeroe();