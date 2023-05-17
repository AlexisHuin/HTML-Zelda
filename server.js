require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//dossier public comme répertoire static
app.use(express.static('public'))
            //EJS
    .set('views', './views')
    .set('view engine', 'ejs')
    .get('/', (req,res) => {res.render('index', { title : 'Legend Of Zelda', titlebanniere : 'Legend Of Zelda'})})
    .get('/link', (req,res) => {res.render('link', { title : 'Link', titlebanniere : 'Link, héros du temps'})})
    .get('/ganondorf', (req,res) => {res.render('ganondorf', { title : 'Ganondorf', titlebanniere : 'Ganondorf, roi démon'})})
    .get('/zelda', (req,res) => {res.render('zelda', { title : 'Zelda', titlebanniere : 'Princesse Zelda'})})
    .get('/hyrule', (req,res) => {res.render('hyrule', { title : 'Hyrule', titlebanniere : "Le monde d'Hyrule"})})
    .use((req, res) => {res.status(404).render('404', {title : "404", titlebanniere: "Page introuvable"})})

// Démarrer le serveur
  .listen(PORT, () => {console.log(`Je tourne sur l'adresse: http://localhost:${PORT}`);});
