//Constants and State Variables
const $name = $('#name')
const $image = $('#image')
const $house = $('#house')
const $species = $('#species')
const $ancestry = $('#ancestry')
const $actor = $('#actor')
let characterInfo, searchText;

//Listeners
$('form').on("submit", characterGetData)

//Function

function characterGetData(event) {
    event.preventDefault()

    const searchInfo = $('#search').val()
    $.ajax({
            url: `http://hp-api.herokuapp.com/api/characters?q=${searchInfo}`
        })
        .then(
            (data) => {
                //console.log(data)
                //characterInfo = data;
                //render();
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().toLowerCase().includes(searchInfo)) {
                        characterInfo = data[i]
                        $name.text(data[i].name)
                        $image.attr('src', data[i].image)
                        $house.text(data[i].house)
                        $species.text(data[i].species)
                        $ancestry.text(data[i].ancestry)
                        $actor.text(data[i].actor)
                    }
                }
                //return characterInfo;
            },
            (error) => {
                alert('error')
            }

        )
}

