// Function to add a new order item to the table
function addOrderItem(order) {
    const orderList = document.getElementById('orderList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.customerName}</td>
        <td>${order.orderDate}</td>
        <td>${order.orderValue}</td>
        <td>${order.customerCity}</td>
        <td>${order.status}</td>
        <td><button onclick="openInvoiceModal(${order.orderId})">View Invoice</button></td>
    `;
    orderList.appendChild(row);
}

// Function to fetch and display data from the local JSON file
async function fetchOrders() {
    try {
        const response = await fetch('orders.json'); // Replace 'orders.json' with the path to your local JSON file
        const data = await response.json();

        // Loop through the JSON data and add each order item
        data.forEach(order => {
            addOrderItem(order);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to open the invoice modal
function openInvoiceModal(orderId) {
    // Fetch the invoice content for the orderId and display it in the modal
    const invoiceContent = "<!-- Your invoice content here -->";
    document.querySelector(".modal-content").innerHTML = invoiceContent;
    document.getElementById("invoiceModal").style.display = "block";
}

// Function to close the invoice modal
function closeInvoiceModal() {
    document.getElementById("invoiceModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("invoiceModal");
    if (event.target == modal) {
        closeInvoiceModal();
    }
}

// Fetch orders when the page loads
fetchOrders();
