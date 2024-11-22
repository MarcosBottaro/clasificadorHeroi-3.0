const readline = require("readline-sync");

class Hero {
  constructor(name, age, vocation) {
    this.name = name;
    this.age = age;
    this.vocation = vocation.toLowerCase();
  }
  atack() {
    let attackMessage;
    switch (this.vocation) {
      case "warrior":
        attackMessage = "a espada!";
        break;
      case "ninja":
        attackMessage = "a shuriken!";
        break;
      case "wizard":
        attackMessage = " magia!";
        break;
      case "monk":
        attackMessage = "artes marciais!";
        break;
      default:
        attackMessage = "Favor escolha uma das classes disponíveis!";
    }
    return attackMessage;
  }
}

let proceed = true;
while (proceed) {
  let name = readline.question("What is your name? ");
  let age = readline.question("how old are you? ");
  if (age >= 18) {
    let vocation = readline
      .question("Wich class do you prefer to be? (Warrior,Wizard,Ninja,Monk) ")
      .toLowerCase();

    let myHero = new Hero(name, age, vocation);

    console.log(
      "O nobre herói " + myHero.name + " atacou usando " + myHero.atack()
    );

    let ask = readline.question("Deseja criar outro herói? (y/n) ");
    proceed = ask.toLowerCase() === "y";
  } else {
    console.log("Você é menor de idade e não pode acessar o jogo!");
    proceed = false;
  }
}
