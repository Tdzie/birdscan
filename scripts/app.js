const birdContainer = document.querySelector('#bird_container');
const myHeaders = new Headers();
const eBirdApiToken = '377m29pfd648';
const footer = document.querySelector('#footer');
myHeaders.append("X-eBirdApiToken", eBirdApiToken);
var birdList = new BirdList();
var daysAgo = 10;
const locationSetOne = "L724990,L725014,L4813791,L2584608,L4449700,L725012,L1777744,L883243,L166463,L888778";
const locationSetTwo = "L724996,L25329309,L5156724,L859480,L3031511,L923371,L795156,L1151027,L3086944,L725009";
const locationSetThree = "L165792,L2687357,L1286702,L1032547,L934114,L4061500,L30747785,L888778,L1127619";

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

document.querySelector('#back_to_top_button').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

async function fetchEbirdData(locationId) {
    const loader = document.getElementById("loader");
    //const spinner = document.querySelector('#spinner');
    try {

        loader.classList.remove("hidden"); // Show "Processing..."
        
        const response = await fetch(`https://api.ebird.org/v2/data/obs/AL/recent?includeProvisional=true&back=${daysAgo}&r=${locationId}`, requestOptions);
        await delay(300); // Simulate a delay for the loader
        const eBirdData = await response.json();
        
        birdList = new BirdList();
    
        eBirdData.forEach((bird) => {
            birdList.addBird(bird);
        });
  
        displayBirds(); // Call next function after everything is done
    } catch (error) {
        console.error("Error fetching bird data:", error);
    }finally {
        loader.classList.add("hidden"); // Always hide loader, even if there's an error
    }
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function displayBirds() {
birdContainer.innerHTML = '';
  birdContainer.appendChild(birdList.getBirdsGroup());
  birdContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  footer.classList.add("show");
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
        if(location.id ==="1"){
            button.addEventListener('click', function() {
                fetchTheIsland(locationSetOne, locationSetTwo, locationSetThree);
            });
        }else{
            button.addEventListener('click', function() {
                fetchEbirdData(location.id);
            });
        }

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
    birdContainer.innerHTML = '';
    footer.classList.remove("show");
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

async function fetchTheIsland(locationSetOne, locationSetTwo, locationSetThree) {
    const loader = document.getElementById("loader");
    //const spinner = document.querySelector('#spinner');
    try {
 
        loader.classList.remove("hidden"); // Show "Processing..."
        birdList = new BirdList();
        const response = await fetch(`https://api.ebird.org/v2/data/obs/AL/recent?includeProvisional=true&back=${daysAgo}&r=${locationSetOne}`, requestOptions);
        await delay(1000); // Simulate a delay for the loader
        const eBirdData = await response.json();
        
        const response2 = await fetch(`https://api.ebird.org/v2/data/obs/AL/recent?includeProvisional=true&back=${daysAgo}&r=${locationSetTwo}`, requestOptions);
        await delay(1000); // Simulate a delay for the loader
        const eBirdData2 = await response2.json();
        
        const response3 = await fetch(`https://api.ebird.org/v2/data/obs/AL/recent?includeProvisional=true&back=${daysAgo}&r=${locationSetThree}`, requestOptions);
        await delay(1000); // Simulate a delay for the loader
        const eBirdData3 = await response3.json();
        
  
    
        eBirdData.forEach((bird) => {
            birdList.addBird(bird);
        });
        eBirdData2.forEach((bird) => {
            birdList.addBird(bird);
        });
        eBirdData3.forEach((bird) => {
            birdList.addBird(bird);
        });
  
        displayBirds(); // Call next function after everything is done
    } catch (error) {
        console.error("Error fetching bird data:", error);
    }finally {
        loader.classList.add("hidden"); // Always hide loader, even if there's an error
    }
}