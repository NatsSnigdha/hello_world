// Mobile sidebar
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Revenue chart
const revenueCanvas = document.getElementById("revenueChart");

new Chart(revenueCanvas, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue",
      data: [12000, 19000, 15000, 28000, 32000, 45250],
      borderColor: "#5271ff",
      backgroundColor: "rgba(82, 113, 255, 0.12)",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => "$" + Number(value).toLocaleString()
        }
      }
    }
  }
});

// Sales distribution chart
const salesCanvas = document.getElementById("salesChart");

new Chart(salesCanvas, {
  type: "doughnut",
  data: {
    labels: ["Electronics", "Fashion", "Home", "Others"],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ["#5271ff", "#16a36a", "#ffad42", "#ef647c"],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});

// Filter transactions by customer, product, date, amount, or status
const searchInput = document.getElementById("search");
const transactionRows = document.querySelectorAll("#transactionTable tbody tr");
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleRows = 0;

  transactionRows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleRows++;
  });

  emptyState.hidden = visibleRows !== 0;
});
