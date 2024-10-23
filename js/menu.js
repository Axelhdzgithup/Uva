document.addEventListener("DOMContentLoaded", function () {
    // Fetch para cargar el menú desde el archivo menu.html
    fetch('/html/menu.html') // Usa ruta absoluta para evitar problemas de rutas
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el menú: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            const menuContainer = document.getElementById('menu-container');
            if (menuContainer) {
                menuContainer.innerHTML = data;

                // Si la página actual es "Servicios", añadir clase al menú
                if (document.title.trim() === 'Servicios') {
                    menuContainer.classList.add('bg-yellow');
                }

                // Verifica si la página actual no es "Pigmentos" y añade clase al menú
                if (document.title.trim() !== 'Pigmentos') {
                    const menuBar = document.getElementById('menuBar');
                    if (menuBar) {
                        menuBar.classList.add('colored');
                    } else {
                        console.error('Error: No se encontró el elemento con ID "menuBar".');
                    }
                }
            } else {
                console.error('Error: No se encontró el elemento con ID "menu-container".');
            }
        })
        .catch(error => console.error('Error loading menu:', error));
});
