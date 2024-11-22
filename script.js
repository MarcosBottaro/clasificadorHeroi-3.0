//digite em seu terminal " npm install readline-sync "
//é necessário para que o programa rode, pois ele é responsavel por ter o diálogo como usuráio
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
        console.log("Favor escolha uma das classes disponíveis!");
        let vocation;
        do {
          vocation = readline
            .question(
              "Wich class do you prefer to be? (Warrior,Wizard,Ninja,Monk) "
            )
            .toLowerCase();
        } while (!["warrior", "wizard", "ninja", "monk"].includes(vocation));
        this.vocation = vocation;
        return this.atack();
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

    let ask = readline.question("Do you want to create another Hero? (y/n) ");
    proceed = ask.toLowerCase() === "y";
  } else {
    console.log("Você é menor de idade e não pode acessar o jogo!");
    proceed = false;
  }
}
