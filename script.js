  // Search Functionality
  document.getElementById("searchForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the page from reloading

      const query = document.getElementById("searchInput").value.toLowerCase(); // Get the input value
      const results = [];

      // Define searchable content
      const searchableContent = [
          { name: "National Weather Service (NWS)", url: "https://www.weather.gov/" },
          { name: "News 5 Cleveland Weather", url: "https://www.news5cleveland.com/weather" },
          { name: "Storm Prediction Center (SPC)", url: "https://www.spc.noaa.gov/" },
          { name: "Tornado Preparedness", section: "Disaster Preparedness Tips for Weather Events" },
          { name: "Flood Preparedness", section: "Disaster Preparedness Tips for Weather Events" },
          { name: "Winter Storm Safety", section: "Disaster Preparedness Tips for Weather Events" },
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
              const link = result.url
                  ? `<a href="${result.url}" target="_blank">${result.name}</a>`
                  : result.name;

              resultsContainer.innerHTML += `<p>${link}</p>`;
          });
      } else {
          resultsContainer.innerHTML = "<p>No results found.</p>";
      }
  });

