// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Show/Hide Floating Action Button based on scroll position
  window.onscroll = function() {
    const fab = document.querySelector('.fab');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      fab.style.display = 'block';
    } else {
      fab.style.display = 'none';
    }
  };
  
  // Scroll to Top Function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Chart.js Example (Placeholder for Graphs)
  const ctx = document.getElementById('structureChart').getContext('2d');
  const structureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Nucleus', 'Electron', 'Energy Levels'],
      datasets: [{
        label: 'Energy Distribution',
        data: [20, 50, 80],
        backgroundColor: ['rgba(0, 230, 230, 0.2)'],
        borderColor: ['rgba(0, 230, 230, 1)'],
        borderWidth: 1
      }]
    }
  });
  