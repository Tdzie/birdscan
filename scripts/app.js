const birdContainer = document.querySelector('#bird_container');
const myHeaders = new Headers();
const eBirdApiToken = '377m29pfd648';
myHeaders.append("X-eBirdApiToken", eBirdApiToken);
var birdList = new BirdList();


const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

document.querySelector('#back_to_top_button').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

async function fetchEbirdData(locationId) {
    try {
        const response = await fetch(`https://api.ebird.org/v2/data/obs/AL/recent?includeProvisional=true&r=${locationId}`, requestOptions);
        const eBirdData = await response.json();
        birdList = new BirdList();

        eBirdData.forEach((bird) => {
            birdList.addBird(bird);
        });
  
        displayBirds(); // Call next function after everything is done
    } catch (error) {
        console.error("Error fetching bird data:", error);
    }
}


function displayBirds() {
birdContainer.innerHTML = '';
  birdContainer.appendChild(birdList.getBirdsGroup());
  birdContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}


function load_locations(name) {
    const button_container =document.querySelector('#button_container')
    button_container.innerHTML = '';
    locationData[name].forEach((location) => {
        let button = document.createElement('button');
        button.innerText = location.name;
        button.value = location.id;
        button.type = 'button';
        button.classList.add('btn', 'btn-outline-info');
        button.addEventListener('click', function() {
            fetchEbirdData(location.id);
        });
        button_container.appendChild(button);
        

    });
}


document.addEventListener("DOMContentLoaded", function() {
    load_locations_in_select();
    handleLocationChange();
});


const locationMenu = document.getElementById("location_selection_menu");

function handleLocationChange() {
    const selectedValue = locationMenu.value;
    load_locations(selectedValue);
}

function load_locations_in_select() {
    for (const location in locationData) {
        let option = document.createElement('option');
        option.value = location;
        option.innerText = location;
        locationMenu.appendChild(option);
    }
}

locationMenu.addEventListener("change", handleLocationChange);
