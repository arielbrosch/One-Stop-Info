// Search Functionality
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading

    const query = document.getElementById("searchInput").value.toLowerCase(); // Get the input value
    const results = [];

    // Define searchable content
    const searchableContent = [
        // Weather Page Content
        { name: "National Weather Service (NWS)", url: "https://www.weather.gov/" },
        { name: "News 5 Cleveland Weather", url: "https://www.news5cleveland.com/weather" },
        { name: "Storm Prediction Center (SPC)", url: "https://www.spc.noaa.gov/" },
        { name: "How to Prepare for Tornadoes", url: "SubPages/weather.html#tornado" },
        { name: "How to Prepare for Floods", url: "SubPages/weather.html#flood" },
        { name: "Winter Storm Safety Tips", url: "SubPages/weather.html#winter-storm" },

        //How-To Page Content
        { name: "CPR instructions", url: "SubPages/how_to.html#cpr" },
        { name: "Torniquet instructions", url:"SubPages/how_to.html#torniquet" },

        // Shelter Page Content
        { name: "Local Shelters", url: "SubPages/shelter.html" },
        { name: "Emergency Shelters Near Me", url: "SubPages/shelter.html#emergency" },
        { name: "Shelter Resources", url: "SubPages/shelter.html#resources" },

        // Traffic Page Content
        { name: "Current Traffic Updates", url: "SubPages/traffic.html" },
        { name: "Road Closures", url: "SubPages/traffic.html#closures" },
        { name: "Accident Reports", url: "SubPages/traffic.html#accidents" },

        // Weather Page Content
        { name: "Weather Map", url: "SubPages/weather.html#map" },
        { name: "Hourly Forecast", url: "SubPages/weather.html#hourly" },

        // Hospitals Page Content
        { name: "Nearby Hospitals", url: "SubPages/hospital.html" },
        { name: "Emergency Rooms", url: "SubPages/hospital.html#emergency" },
        { name: "Hospital Services", url: "SubPages/hospital.html#services" },

        // Government Officials Page Content
        { name: "Local Government Officials", url: "SubPages/gov_officials.html" },
        { name: "State Representatives", url: "SubPages/gov_officials.html#state-reps" },
        { name: "Emergency Contact Numbers", url: "SubPages/gov_officials.html#contacts" }
    ];

    // Search logic
    searchableContent.forEach((item) => {
        if (item.name.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    // Display results
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (results.length > 0) {
        results.forEach((result) => {
            const link = `<a href="${result.url}" target="_blank">${result.name}</a>`;
            resultsContainer.innerHTML += `<p>${link}</p>`;
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
});
