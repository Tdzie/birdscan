class BirdList {
  constructor() {
    this.birds = [];
  }

  addBird(bird) {
    let newBird = new Bird(bird.comName, bird.sciName, bird.locId, bird.howMany, bird.obsDt, bird.locName, bird.subId, bird.speciesCode, bird.lat, bird.lng);
    this.birds.push(newBird);
  }

  sortBirds() {
    this.birds.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  }

  getBirdsGroup() {
    this.sortBirds();

    let unorderedList = document.createElement('ul');
    let groupedData = {};

    // Group birds by formatted date and location
    this.birds.forEach((bird) => {
        let formattedDate = this.formatTimestamp(bird.date);
        let key = `${formattedDate} | ${bird.locationName}`;

        if (!groupedData[key]) {
            groupedData[key] = [];
        }
        groupedData[key].push(bird);
    });

    // Convert the list of seen birds to a Set for faster lookup (with cleaned names)
    const seenBirdsSet = new Set(birdsSeen["Cappa"].map(name => name.trim().toLowerCase()));
    const birdsNeededSetMaggie = new Set(birdsNeededMaggie.map(name => name.trim().toLowerCase()));
    const birdsNeededSetTimothy = new Set(birdsNeededTimothy.map(name => name.trim().toLowerCase()));



    // Create elements for each group
    Object.keys(groupedData).forEach((key) => {
        let [date, location] = key.split(" | ");
        let firstBird = groupedData[key][0]; // The first bird of the group, for the checklist link

        // Create the EBird checklist link using the subId of the first bird
        let linkToEbird = `https://ebird.org/checklist/${firstBird.subId}`;

        // Create a section for each group
        let section = document.createElement('li');
        section.innerHTML = `
            <div class="bird-group">
                <div class="group-header">
                    <strong>${location}</strong>
                    <hr> 
                    <span style="font-weight: normal; cursor: pointer; text-decoration: underline;" onclick="window.open('${linkToEbird}', '_blank')">${date}</span>
                    <hr>
                </div>
                <ul class="bird-list"></ul>
            </div>`;

        let birdList = section.querySelector('.bird-list');

        // Add birds within each group
        groupedData[key].forEach((bird) => {
            let birdItem = document.createElement('li');

            // Clean the bird name before comparison
            let cleanedBirdName = bird.sciName.trim().toLowerCase();

            // Check if the cleaned name exists in the seen birds list
            let hasSeen = seenBirdsSet.has(cleanedBirdName);
            let isNeededMaggie = birdsNeededSetMaggie.has(cleanedBirdName);
            let isNeededTimothy = birdsNeededSetTimothy.has(cleanedBirdName);
            let maggieAndTimothy = birdsNeededSetMaggie.has(cleanedBirdName) && birdsNeededSetTimothy.has(cleanedBirdName);
            // Calculate the environment bounds for the bird map link
            let envminX = bird.lng - 0.2;
            let envmaxX = bird.lng + 0.2;
            let envminY = bird.lat - 0.2;
            let envmaxY = bird.lat + 0.2;

            // Create a clickable link for the bird map
            let customLink = `https://ebird.org/map/${bird.speciesCode}?neg=true&env.minX=${envminX}&env.minY=${envminY}&env.maxX=${envmaxX}&env.maxY=${envmaxY}&zh=true&gp=true&ev=Z&excludeExX=false&excludeExAll=false&mr=1-12&bmo=1&emo=12&yr=cur&byr=2023&eyr=2023#more-map-options`;
            let birdName = bird.name;
            let colorSelect = "black"; // Default color
            // Insert the bird name with the clickable map link and apply styles based on whether the bird was seen
            if (!hasSeen) {
                colorSelect = "lightblue";
                birdName += " - C,M,T."
            }else if (maggieAndTimothy) {
                colorSelect = "orange";
                birdName += " - M,T."
            }else if (isNeededMaggie) {
                colorSelect = "#996CAE";
                birdName += " - M."
            }else if (isNeededTimothy) {    
                colorSelect = "lightgreen";
                birdName += " - T."
            }

            birdItem.innerHTML = `
                <a href="${customLink}" target="_blank" style="text-decoration: none;">
                    <strong style="color: ${colorSelect}">${birdName}</strong> <span style="color: black"> - ${bird.howMany}</span>
                </a>
            `;

            birdList.appendChild(birdItem);
        });

        unorderedList.appendChild(section);
    });

    return unorderedList;
}

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    
    // Get today's and yesterday's dates without time
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Format time in 12-hour format with AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12-hour format

    const timeString = `${hours}:${minutes} ${amPm}`;

    // Determine if it's today, yesterday, or an older date
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (dateOnly.getTime() === today.getTime()) {
        return `Today - ${timeString}`;
    } else if (dateOnly.getTime() === yesterday.getTime()) {
        return `Yesterday - ${timeString}`;
    } else {
        return `${date.toLocaleDateString()} - ${timeString}`;
    }
}
}
