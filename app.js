const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const Team = require('./controllers/team');
const Player = require('./controllers/player');

team = new Team();
team.name = "FC Reconvilier";
team.league = "5 ieme";

for(i=0;i<10;i++){
    player = new Player();
    player.id = i;
    player.name = `Fabio ${i}`;
    player.number = 9+i;

    team.addPlayer(player);
}

console.log(team);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use('/', routes);

module.exports = app;