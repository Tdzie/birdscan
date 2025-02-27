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
}





window.onload = function() {
    locationData.locations.forEach((location) => {
        let button = document.createElement('button');
        button.innerText = location.name;
        button.value = location.id;
        button.type = 'button';
        button.classList.add('btn', 'btn-primary');
        button.addEventListener('click', function() {
            fetchEbirdData(location.id);
        });
        document.querySelector('#button_container').appendChild(button);
    });
}
