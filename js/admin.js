// Sample data
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
        const row = `<tr>
            <td>${visitor.country} <img src="flags/${visitor.country}.png" alt="${visitor.country} flag" style="width: 20px; height: 15px;"></td>
            <td>${visitor.ip}</td>
            <td>${visitor.date}</td>
            <td><button class="btn btn-info" onclick="showDetails('${visitor.ip}')">View</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to create the chart
const ctx = document.getElementById('viewsChart').getContext('2d');
const viewsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Page Views',
            data: [30, 20, 50, 70, 60, 90, 120, 150, 130, 160, 200, 240],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
});

// Function to show details
function showDetails(ip) {
    const detailsList = document.getElementById('detailsContent');
    detailsList.innerHTML = `<li>Details for IP: ${ip}</li>`;
    // Add more detailed information as needed
}

// Initial population of the table
populateTable(visitorData);
