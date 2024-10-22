// menu.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            if (document.title == 'Servicios') {
                document.getElementById('menu-container').classList.add('bg-yellow');
            }
        })
        .catch(error => console.error('Error loading menu:', error));
});


// Verifica si la página actual es index.html
if (document.title != 'Pigmentos') {
    document.getElementById('menuBar').classList.add('colored');
}

