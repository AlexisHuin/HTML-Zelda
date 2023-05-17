require("dotenv").config();
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//dossier public comme répertoire static
app
  .use(express.static(path.join(__dirname, 'public')))
  //EJS
  .set("views", "./views")
  .set("view engine", "ejs")
  .get("/", (req, res) => {
    res.render("index", {
      title: "Legend Of Zelda",
      titlebanniere: "Legend Of Zelda",
      linkcard:
        "https://www.screenhacker.com/screensite/wp-content/uploads/2022/10/1665216259_1280x720.jpg",
      namecard: "Link",
      pathcard: "/index",
    })
  })
  .get("/link", (req, res) => {
    res.render("link", {
      title: "Link",
      titlebanniere: "Link, héros du temps",
      linkcard:
        "https://www.screenhacker.com/screensite/wp-content/uploads/2022/10/1665216259_1280x720.jpg",
      namecard: "Link",
      pathcard: "/link",
    });
  })
  .get("/ganondorf", (req, res) => {
    res.render("ganondorf", {
      title: "Ganondorf",
      titlebanniere: "Ganondorf, roi démon",
      linkcard:
        "https://images.nintendolife.com/f8809ea6e3732/ganondorf-totk.large.jpg",
      namecard: "Ganondorf",
      pathcard: "/ganondorf",
    });
  })
  .get("/zelda", (req, res) => {
    res.render("zelda", {
      title: "Zelda",
      titlebanniere: "Princesse Zelda",
      linkcard:
        "https://cdn.mos.cms.futurecdn.net/7BuhEPPFpJ4hHiVSFEhWYM-1200-80.jpg",
      namecard: "Zelda",
      pathcard: "/zelda",
    });
  })
  .get("/hyrule", (req, res) => {
    res.render("hyrule", {
      title: "Hyrule",
      titlebanniere: "Le monde d'Hyrule",
      linkcard:
        "https://i1.sndcdn.com/artworks-f9YWHdeOvZAEZJrb-s49y4g-t500x500.jpg",
      namecard: "Hyrule",
      pathcard: "/hyrule",
    });
  })
  .use((req, res) => {
    res
      .status(404)
      .render("404", { title: "404", titlebanniere: "Page introuvable" });
  })

  // Démarrer le serveur
  .listen(PORT, () => {
    console.log(`Je tourne sur l'adresse: http://localhost:${PORT}`);
  });

  /*npm run dev  pour lancer le serveur*/