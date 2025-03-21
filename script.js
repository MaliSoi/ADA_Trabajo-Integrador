const hamburguesa = document.getElementById('hamburguesa');
const menu = document.querySelector('.navegacion-principal ul');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('activo');
    hamburguesa.classList.toggle('activo'); // Agrega o quita la clase 'activo' al menú hamburguesa
});