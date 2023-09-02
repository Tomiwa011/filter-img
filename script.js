const root = document.getElementById('filterable-cards')
const all = document.getElementById('all')
const cars = document.getElementById('cars')
const people = document.getElementById('people')
const nature = document.getElementById('nature')

const images=[
    {
        images : 'images/nature-1.jpg',
        title: 'Mountains',
        about: 'lorem yooo',
        type: 'nature'
    },
    {
        images : 'images/nature-2.jpg',
        title: 'Lights',
        about: 'Lorem ipsum dolor..',
        type: 'nature'  
    },
    {
        images : 'images/nature-3.jpg',
        title: 'Nature',
        about: 'Lorem ipsum dolor..' ,
        type: 'nature' 
    },
    {
        images : 'images/car-1.jpg',
        title: 'Retro',
        about: 'Lorem ipsum dolor..',
        type: 'cars'  
    },
    {
        images : 'images/car-2.jpg',
        title: 'Fast',
        about: 'Lorem ipsum dolor..' ,
        type: 'cars' 
    },
    {
        images : 'images/car-3.jpg',
        title: 'Classic',
        about: 'Lorem ipsum dolor..',
        type: 'cars'  
    },
    {
        images : 'images/people-1.jpg',
        title: 'Men',
        about: 'Lorem ipsum dolor..' ,
        type: 'people' 
    },
    {
        images : 'images/people-2.jpg',
        title: 'Girl',
        about: 'Lorem ipsum dolor..',
        type: 'people'  
    },
]


const ShowAll =()=>{
    const allImages = images.map((image)=> {
        return `
        <div class="card p-0" data-name="nature">
        <img src="${image.images}" alt="img" />
        <div class="card-body">
          <h6 class="card-title">${image.title}</h6>
          <p class="card-text">${image.about}</p>
        </div>
      </div>
        `
    })
    
   
    all.style.backgroundColor = '#6c757d'
    all.style.color = 'white'
    nature.style.backgroundColor = 'white'
    nature.style.color = 'black'
    people.style.backgroundColor = ''
    people.style.color = 'black'
    cars.style.backgroundColor = ''
    cars.style.color = 'black'
    root.innerHTML = allImages.join('')
}
ShowAll()


const filterNature =()=>{
    const newArray = images.filter((image)=> image.type == 'nature')
console.log(newArray)
    const allImages = newArray.map((image)=> {
        return `
        <div class="card p-0" data-name="nature">
        <img src="${image.images}" alt="img" />
        <div class="card-body">
          <h6 class="card-title">${image.title}</h6>
          <p class="card-text">${image.about}</p>
        </div>
      </div>
        `
    })
    
    all.style.backgroundColor = ''
    all.style.color = 'black'
    nature.style.backgroundColor = '#6c757d'
    nature.style.color = 'white'
    root.innerHTML = allImages.join('')
    cars.style.backgroundColor = ''
    cars.style.color = 'black'
    people.style.backgroundColor = ''
    people.style.color = 'black'
}


const filterPeople =()=>{
    const newArray = images.filter((image)=> image.type == 'people')
console.log(newArray)
    const allImages = newArray.map((image)=> {
        return `
        <div class="card p-0" data-name="nature">
        <img src="${image.images}" alt="img" />
        <div class="card-body">
          <h6 class="card-title">${image.title}</h6>
          <p class="card-text">${image.about}</p>
        </div>
      </div>
        `
    })
    all.style.backgroundColor = ''
    all.style.color = 'black'
    people.style.backgroundColor = '#6c757d'
    people.style.color = 'white'
    nature.style.backgroundColor = ''
    nature.style.color = 'black'
    cars.style.backgroundColor = ''
    cars.style.color = 'black'
    
    
    root.innerHTML = allImages.join('')
}
const filtercars =()=>{
    const newArray = images.filter((image)=> image.type == 'cars')
console.log(newArray)
    const allImages = newArray.map((image)=> {
        return `
        <div class="card p-0" data-name="nature">
        <img src="${image.images}" alt="img" />
        <div class="card-body">
          <h6 class="card-title">${image.title}</h6>
          <p class="card-text">${image.about}</p>
        </div>
      </div>
        `
    })
    all.style.backgroundColor = ''
    all.style.color = 'black'
    people.style.backgroundColor = '#6c757d'
    people.style.color = 'white'
    cars.style.backgroundColor = '#6c757d'
    cars.style.color = 'white'
    nature.style.backgroundColor = ''
    nature.style.color = 'black'
    people.style.backgroundColor = ''
    people.style.color = 'black'
    
    root.innerHTML = allImages.join('')
}