const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/login", (req, res) => {
    const { usuario, clave } = req.body;

    if (usuario === "admin" && clave === "1234") {
        res.json({ exito: true });
    } else {
        res.json({ exito: false });
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});