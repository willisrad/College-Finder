// script.js

function fetchCollegeData() {
    // Get the college name from the input field
    const collegeName = document.getElementById('collegeName').value.trim();

    // Sample data for demonstration (replace with real data if needed)
    const collegeData = {
        "Harvard University": {
            acceptanceRate: "4.6%",
            inStateTuition: "$51,925",
            outStateTuition: "$51,925",
            actScore: "33-35",
            satScore: "1460-1570",
            weather: "Cold Winters, Moderate Summers"
        },
        "Stanford University": {
            acceptanceRate: "4.3%",
            inStateTuition: "$55,473",
            outStateTuition: "$55,473",
            actScore: "32-35",
            satScore: "1440-1560",
            weather: "Mild Climate, Sunny"
        },
        "Massachusetts Institute of Technology": {
            acceptanceRate: "6.7%",
            inStateTuition: "$53,790",
            outStateTuition: "$53,790",
            actScore: "34-36",
            satScore: "1500-1570",
            weather: "Cold Winters, Warm Summers"
        },
        // Add more colleges as needed
    };

    // Get the result container elements
    const acceptanceRateEl = document.getElementById('acceptanceRate');
    const inStateTuitionEl = document.getElementById('inStateTuition');
    const outStateTuitionEl = document.getElementById('outStateTuition');
    const actScoreEl = document.getElementById('actScore');
    const satScoreEl = document.getElementById('satScore');
    const weatherEl = document.getElementById('weather');
    const noDataEl = document.getElementById('noData');

    // Check if the college data exists
    if (collegeName in collegeData) {
        const data = collegeData[collegeName];

        // Update the result elements with college data
        acceptanceRateEl.textContent = data.acceptanceRate;
        inStateTuitionEl.textContent = data.inStateTuition;
        outStateTuitionEl.textContent = data.outStateTuition;
        actScoreEl.textContent = data.actScore;
        satScoreEl.textContent = data.satScore;
        weatherEl.textContent = data.weather;
        noDataEl.style.display = 'none'; // Hide the "No Data Found" message
    } else {
        // If no data is found, display a message
        acceptanceRateEl.textContent = '';
        inStateTuitionEl.textContent = '';
        outStateTuitionEl.textContent = '';
        actScoreEl.textContent = '';
        satScoreEl.textContent = '';
        weatherEl.textContent = '';
        noDataEl.style.display = 'block'; // Show the "No Data Found" message
    }
}
