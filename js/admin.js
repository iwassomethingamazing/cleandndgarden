// Sample data with country codes
const visitorData = [
    { country: 'IT', ip: '192.168.1.1', date: '2023-09-05' },
    { country: 'FR', ip: '192.168.1.2', date: '2023-09-10' },
    { country: 'US', ip: '192.168.1.3', date: '2023-09-15' },
    { country: 'DE', ip: '192.168.1.4', date: '2023-09-20' },
];

// Function to populate the table
function populateTable(data) {
    const tableBody = document.getElementById('visitorTable');
    tableBody.innerHTML = '';
    data.forEach(visitor => {
        const flagUrl = `https://www.countryflags.io/${visitor.country}/flat/32.png`; // Example flag URL
        const row = `<tr>
            <td>${visitor.country} <img src="${flagUrl}" alt="${visitor.country} flag" style="width: 20px; height: 15px;"></td>
            <td>${visitor.ip}</td>
            <td>${visitor.date}</td>
            <td><button class="btn btn-info" onclick="showDetails('${visitor.ip}')">View</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Initial population of the table
populateTable(visitorData);


// Function to simulate a new visitor
function addNewVisitor() {
    const countries = ['IT', 'FR', 'US', 'DE', 'ES']; // Example country codes
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const newVisitor = {
        country: randomCountry,
        ip: `192.168.1.${Math.floor(Math.random() * 255)}`, // Random IP
        date: new Date().toISOString().split('T')[0], // Today's date
    };

    visitorData.push(newVisitor);
    populateTable(visitorData);
}

// Call this function when the admin page loads
addNewVisitor();

