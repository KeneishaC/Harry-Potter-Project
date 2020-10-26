
//Constants and State Variables
const $name = $('#name')
const $imgage = $('#img')
const $house = $('#house')
const $species = $('#species')
const $ancestry = $('#ancestry')
const $actor = $('#actor')

//Function

 const promise = $.ajax({url: `http://hp-api.herokuapp.com/api/characters`})
    .then(
        (data) => {
            console.log(data)
            $name.text(data.name)
            $img.text(data.image)
            $house.text(data.house)
            $species.text(data.species)
            $ancestry.text(data.ancestry)
            $actor.text(data.actor)
        },
        (error) => {
            alert ('error')
        }        

    )