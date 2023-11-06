// Represents a character with name, age, and type properties
class Character {
    constructor(hero) { // Constructor initializing character properties
        this.heroName = hero[0]; // Assigning character name
        this.heroAge = hero[1]; // Assigning character age
        this.heroType = hero[2]; // Assigning character type
    }

    attack() { // Method to display character's attack based on their type
        let specialAttack = ''; // Variable to store attack type

        switch (this.heroType) { // Switch statement based on character type
            case "Warrior": // If character is a warrior
                specialAttack = 'magic'; // Set attack type as magic
                break;

            case "Mage": // If character is a mage
                specialAttack = 'sword'; // Set attack type as sword
                break;

            case "Monk": // If character is a monk
                specialAttack = 'martial arts'; // Set attack type as martial arts
                break;

            case "Ninja": // If character is a ninja
                specialAttack = 'shuriken'; // Set attack type as shuriken
                break;

            default: // For unknown character types
                specialAttack = 'an unknown attack method'; // Set attack type as unknown
                break;
        }

        console.log(`The ${this.heroType} attacked using ${specialAttack}`); // Display the attack type
    }
}

function sendHeroesIntoBattle(summonedHeroes) { // Function to send summoned heroes into battle
    const hero_0 = new Character(summonedHeroes.hero_0); // Create hero 0 and perform an attack
    hero_0.attack();

    const hero_1 = new Character(summonedHeroes.hero_1); // Create hero 1 and perform an attack
    hero_1.attack();

    const hero_2 = new Character(summonedHeroes.hero_2); // Create hero 2 and perform an attack
    hero_2.attack();

    const hero_3 = new Character(summonedHeroes.hero_3); // Create hero 3 and perform an attack
    hero_3.attack();
}

function main() { // Main function
    const summonedHeroes = { // Object containing details of summoned heroes
        hero_0: ["Geralt", 47, "Warrior"], // Hero 0 with name, age, and type
        hero_1: ["Merlin", 159, "Mage"], // Hero 1 with name, age, and type
        hero_2: ["Xuanzang", 61, "Monk"], // Hero 2 with name, age, and type
        hero_3: ["Donatello", 37, "Ninja"] // Hero 3 with name, age, and type
    }

    console.log(`
       +--------------------+
       |   Battle Started   |
       +--------------------+   
    `);
    sendHeroesIntoBattle(summonedHeroes); // Send summoned heroes into battle
}

main(); // Execute the main function
