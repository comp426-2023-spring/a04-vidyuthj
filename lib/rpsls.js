
const game_results = {
  rock: {
      rock: 'tie',
      paper: 'win',
      scissors: 'lose',
      lizard: 'lose',
      spock: 'win'
  },
  paper: {
      rock: 'lose',
      paper: 'tie',
      scissors: 'win',
      lizard: 'win',
      spock: 'lose'
  },
  scissors: {
      rock: 'win',
      paper: 'lose',
      scissors: 'tie',
      lizard: 'lose',
      spock: 'win'
  },
  lizard: {
      rock: 'win',
      paper: 'lose',
      scissors: 'win',
      lizard: 'tie',
      spock: 'lose'
  },
  spock: {
      rock: 'lose',
      paper: 'win',
      scissors: 'lose',
      lizard: 'win',
      spock: 'tie'
  }
}

export function rps(shot) {
  let possible = ["rock", "paper", "scissors"];
  var random_gen = Math.trunc(Math.random() * 3);
  var opp = possible[random_gen];

   if (shot == null) { 
    return { player : opp }; 

    }
    shot = shot.toLowerCase();

    if (!(possible.includes(shot))) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    return { player: shot,
             opponent: opp,
             result: game_results[opp][shot] 
            };

}

export function rpsls(shot) {
     var random_gen = Math.trunc(Math.random() * 5);
    let possible = ["rock", "paper", "scissors", "lizard", "spock"];
    var opp = possible[random_gen];
    if (shot == null) { 
        return { player : opp }; 
    }
    shot = shot.toLowerCase();
    
    if (!(possible.includes(shot))) {
        throw new RangeError();
    }
    return {
            player: shot,
            opponent: opp,
            result: game_results[opp][shot]
        };
}