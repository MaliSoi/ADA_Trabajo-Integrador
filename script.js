document.getElementById('hamburguesa').addEventListener('click', function() {
    let menu = document.getElementById('menu-list');
    menu.classList.toggle('active');
    console.log("Clase active añadida:", menu.classList.contains("active"));
});