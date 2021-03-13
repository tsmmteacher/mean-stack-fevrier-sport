const express = require('express');
const app = express();
// import body parser module
const bodyParser = require("body-parser");
const bcrypt=require('bcrypt');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sport', { useNewUrlParser: true, useUnifiedTopology: true });
const Player = require('./models/player');
const Team = require('./models/team');
const User = require('./models/user');

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// create express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/getAllPlayers', (req, res) => {
  console.log('Appel de getAllPlayers');
  /*let players = [
    { id: 1, name: 'Ronaldo', poste: 'attaquant', numero: '7', age: 30, description: 'Meilleur joueur au monde' },
    { id: 2, name: 'Ronaldo', poste: 'attaquant', numero: '7', age: 30, description: 'Meilleur joueur au monde' },
    { id: 3, name: 'Ronaldo', poste: 'attaquant', numero: '7', age: 30, description: 'Meilleur joueur au monde' },
    { id: 4, name: 'Ronaldo99', poste: 'attaquant', numero: '7', age: 30, description: 'Meilleur joueur au monde' }

  ];*/
  Player.find((err,docs)=>{
    if(err){
      console.log('erreur avec la BDD');
    }
    else {
      res.status(200).json({
        allPlayers: docs
      });
    }
  });
 /* res.status(200).json({
    allPlayers: players
  });*/
});
app.get('/getPlayerById/:id', (req, res) => {
  console.log('Appel de get Player By ID ', req.params.id);
  Player.findOne().then({_id: req.params.id}).then(
    (data)=>{
      if(data){
        res.status(200).json({player:data})
      }
    }
  )
});
app.put('/editPlayer/:id', (req, res) => {
  console.log('Edit Player By ID ', req.params.id);
  console.log('Player to edit : ', req.body);
});
app.delete('/deletePlayer/:id', (req, res) => {
  console.log('Delete Player By ID ', req.params.id);
  Player.deleteOne({_id:req.params.id}).then(
    res.status(200).json({message:'Suppression avec succès '})
  );
});
app.post('/addPlayer', (req, res) => {

  console.log('Player Added : ', req.body);//req.body : objet envoyé
  //insert into DB
  const player = new Player({
    name: req.body.name,
    poste: req.body.poste,
    numero: req.body.numero,
    age: req.body.age

  });
  player.save().then(
    (data) => {
      if(data) {
        res.status(200).json({
          message: 'Player added with success '
        })
      }
    })

});

app.post('/addTeam', (req, res) => {

  console.log('Team Added : ', req.body);//req.body : objet envoyé
  //insert into DB
  const team = new Team({
    name: req.body.name,
    foundation: req.body.foundation,
    country: req.body.country,
    stadium: req.body.stadium

  });
  team.save().then(
    (data) => {
      if(data) {
        res.status(200).json({
          message: 'Team added with success '
        })
      }
    })

});
/*app.post('/login', (req, res) => {
  .console.log('nous sommes dans Login :',req.body);
  User.findOne({email:req.body.email}).then(

  )
});*/
app.post('/signup', (req, res) => {
bcrypt.hash(req.body.pwd,10).then(
  (cryptedPwd)=>{
    const user = new User({
      firstName:req.body.firstName,
       lasstName:req.body.lastName,
       email:req.body.email,
       pwd:cryptedPwd

        });
        user.save().then(
          (data) => {
            if(data) {
              res.status(200).json({
                message: 'Added with success ! '
              })
            }
          })

  }
)


});
module.exports = app;
