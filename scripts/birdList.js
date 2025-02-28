
class BirdList {
  constructor() {
    this.birds = [];
  }

  addBird(bird) {

    let newBird = new Bird(bird.comName, bird.sciName, bird.locId, bird.howMany, bird.obsDt, bird.locName);
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

    // Create elements for each group
    Object.keys(groupedData).forEach((key) => {
        let [date, location] = key.split(" | ");

        // Create a section for each group
        let section = document.createElement('li');
        section.innerHTML = `
        <div class="bird-group">
          <div class="group-header">
            <strong>${location}</strong> <hr> <span style="font-weight: normal">${date} </span><hr>
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

            // Apply different styles
            birdItem.innerHTML = `<strong style="color: ${hasSeen ? 'black' : 'darkred'}">${bird.name}</strong> - Count: ${bird.howMany}`;

            birdList.appendChild(birdItem);
        });

        unorderedList.appendChild(section);
    });

    return unorderedList;

}
/**
getBirdsGroup() {
    this.sortBirds();

    let unorderedList = document.createElement('ul');
    let groupedData = {};

    // Group birds first by location, then by date/time
    this.birds.forEach((bird) => {
        let formattedDate = this.formatTimestamp(bird.date);
        let locationKey = bird.locationName;

        if (!groupedData[locationKey]) {
            groupedData[locationKey] = {};
        }
        
        if (!groupedData[locationKey][formattedDate]) {
            groupedData[locationKey][formattedDate] = [];
        }

        groupedData[locationKey][formattedDate].push(bird);
    });

    // Convert the list of seen birds to a Set for faster lookup (with cleaned names)
    const seenBirdsSet = new Set(birdsSeen["Cappa"].map(name => name.trim().toLowerCase()));

    // Create elements for each location group
    Object.keys(groupedData).forEach((location) => {
        let locationSection = document.createElement('li');
        locationSection.innerHTML = `
        <div class="bird-group">
          <div class="group-header">
            <strong>${location}</strong>
          </div>
          <ul class="date-list"></ul>
        </div>`;

        let dateList = locationSection.querySelector('.date-list');

        // Add each date/time under the location
        Object.keys(groupedData[location]).forEach((date) => {
            let dateSection = document.createElement('li');
            dateSection.innerHTML = `
            <div class="date-group">
              <span style="font-weight: normal">${date}</span><hr>
              <ul class="bird-list"></ul>
            </div>`;

            let birdList = dateSection.querySelector('.bird-list');

            // Add birds for the specific date/time
            groupedData[location][date].forEach((bird) => {
                let birdItem = document.createElement('li');

                let cleanedBirdName = bird.sciName.trim().toLowerCase();
                let hasSeen = seenBirdsSet.has(cleanedBirdName);

                birdItem.innerHTML = `<strong style="color: ${hasSeen ? 'black' : 'darkred'}">${bird.name}</strong> - Count: ${bird.howMany}`;

                birdList.appendChild(birdItem);
            });

            dateList.appendChild(dateSection);
        });

        unorderedList.appendChild(locationSection);
    });

    return unorderedList;
}
**/
  getBirds() {
    this.sortBirds();

    let unorderedList = document.createElement('ul');

    this.birds.forEach((bird) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="bird-info">
      <strong>${bird.name} - ${bird.howMany}</strong>
      <span>${bird.locationName}</span>
      <span>${this.formatTimestamp(bird.date)}</span>
    </div>`;
  
    unorderedList.appendChild(listItem);
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
