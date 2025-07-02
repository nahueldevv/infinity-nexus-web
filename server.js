// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configurar el motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 2. Servir archivos estáticos (CSS, JS, imágenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));


// --- RUTAS DE LA APLICACIÓN ---

app.get("/", (req, res) => {
  // 'index' se refiere a 'views/index.ejs'
  res.render("index", { title: "Inicio" }); 
});

app.get("/tienda", (req, res) => {
  res.render("tienda", { title: "Tienda" });
});

app.get("/producto", (req, res) => {
  res.render("producto", { title: "producto" });
});

app.get("/sobre-nosotros", (req, res) => {
    res.render("sobre-nosotros", { title: "Sobre Nosotros" });
});

app.get("/capacitaciones", (req, res) => {
    res.render("capacitaciones", { title: "Capacitaciones" });
});

app.get("/sucursales", (req, res) => {
    res.render("sucursales", { title: "Sucursales" });
});

app.get("/soporte", (req, res) => {
    res.render("soporte", { title: "Soporte" });
});

app.get("/checkout", (req, res) => {
    res.render("checkout", { title: "checkout" });
});

app.get("/gracias", (req, res) => {
    res.render("gracias", { title: "gracias por su compra" });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});