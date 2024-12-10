$(document).ready(function() {
    // Fetch motorsport data from the backend
    $.get('/api/motorsports', function(data) {
      let container = $('#motorsport-container');
      data.forEach(item => {
        let motorsportItem = `
          <div class="motorsport-item">
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        `;
        container.append(motorsportItem);
      });
    });
  });
  