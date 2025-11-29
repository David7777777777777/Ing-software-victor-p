document.getElementById("btnOfertas").addEventListener("click", () => {
    alert("Aquí aparecerán las mejores ofertas de la semana 😄");
});

const botones = document.querySelectorAll(".btnComprar");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Producto agregado al carrito 🛒");
    });
});
