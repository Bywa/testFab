class Team {
    name;
    league;
    id;
    players = [];

    addPlayer(player){
        this.players.push(player);
    }
}

//t = new Team('1','2');
module.exports = Team;