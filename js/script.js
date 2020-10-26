alert('JS is working!')
//Constants and State Variables
const hpURL = http//hp-api.herokuapp.com/api/characters
const $name = $('#Name')
const $imgage = $('#img')
const $house = $('#House')
const $species = $('#Species')
const $ancestry = $('#Ancestry')
const $actor = $('#Actor')

//Function

 const promise = $ajax ({url: `http//hp-api.herokuapp.com/api/characters`})
    .then(
        (data) => {
            console.log(data)
            $(#Name).text(data.name)
            $(#img).text(data.image)
            $(#House).text(data.house)
            $(#Species).text(data.species)
            $(#Ancestry).text(data.ancestry)
            $(#Actor).text(data.actor)
        },
        (error)
        alert ('error')
    )