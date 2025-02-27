class Bird {
  constructor(comName,sciName, locationId, howMany, date, locationName) {
    this.name = comName;
    this.sciName = sciName;
    this.locationId = locationId;
    this.locationName = locationName;
    this.howMany = howMany;
    this.date = date;
    this.uniqueIdentifier = `${this.name}-${this.locationId}-${this.date}`;
  }


  fly() {
    console.log(`${this.name} is flying`);
  }
}

/* Information about the API return 

    {
        "speciesCode": "hoocro1",
        "comName": "Hooded Crow",
        "sciName": "Corvus cornix",
        "locId": "L7884500",
        "locName": "улица Старикова, Chundzha KZ-Almaty (43.5309,79.4551)",
        "obsDt": "2020-01-21 16:35",
        "howMany": 1,
        "lat": 43.530936,
        "lng": 79.455132,
        "obsValid": true,
        "obsReviewed": false,
        "locationPrivate": true,
        "subId": "S63619695"
    },

*/