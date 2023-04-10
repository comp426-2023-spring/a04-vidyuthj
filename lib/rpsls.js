export function rps_function(shot) {
    const options = ["rock", "paper", "scissors"];
    
    if(shot == null){
      return{"player": options[Math.floor(Math.random() * options.length)]};
    }
    const opponent = options[Math.floor(Math.random() * options.length)];
    let message;

    if (shot === opponent) {
        message = "tie";
      } else if (
        (shot === "rock" && opponent === "scissors") ||
        (shot === "paper" && opponent === "rock") ||
        (shot === "scissors" && opponent === "paper")
      ) {
        message = "win";
      } else {
        message = "lose";
      }
      
      return `You chose ${shot}, computer chose ${opponent}. ${message}`;
}
export function rpsls_function(shot) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    
    if(shot == null){
      return{"player": options[Math.floor(Math.random() * options.length)]};
    }
    const opponent = options[Math.floor(Math.random() * options.length)];
    
    if(!hand.includes(shot)){
          console.log("Argument out of range!");
          console.error();
    }
    let message;
    if (shot === opponent) {
        message = "tie";
      } else if (
        (shot === "rock" && (opponent === "scissors" || opponent === "lizard")) ||
        (shot === "paper" && (opponent === "rock" || opponent === "spock")) ||
        (shot === "scissors" && (opponent === "paper" || opponent === "lizard")) ||
        (shot === "lizard" && (opponent === "paper" || opponent === "spock")) ||
        (shot === "spock" && (opponent === "rock" || opponent === "scissors"))
      ) {
        message = "win";
      } else {
        message = "lose";
      }
      return `You chose ${shot}, computer chose ${opponent}. ${message}`;
    }  