console.log("Hello world!");
document.body.style.backgroundColor = "black";
/* the white background was too much to handle during 10pm at night*/
/*
Step 1: prompt user for pet name
    - store user input in variable (petName)
Step 2: Set Pet energy and happiness levels to zero
    - create variables (energylvl), (happylvl)
Step 3: declare feed, pet, walk, options
    ~ feed = 2+ energy increase
    ~ pet = 1+ happiness increase
    ~ walk = 2+ happiness increase & 1- energy
        - if user chooses walk & energy lvl = 0, do NOT perform actions.
       instead, prompt alert message: "Not enough energy to enjoy a walk."
Step 4: create loop that repeats 6 times the following
    - prompt user for an action input
Step 5: after 6 successful actions log petName, happiness, and energy lvls.
*/

let petName = prompt("Name your pet.")
console.log(petName)

let happylvl = 0;
let energylvl = 0;
let feed = 2;
let pet = 1;
let walk = (happylvl + 2, energylvl -1);



for (let i = 0; i < 6; i++) {
    let userActions = String( prompt("feed, pet, or walk?") );
    console.log(userActions)
    if (userActions === "feed") {
        energylvl = energylvl + feed;
    } else if (userActions === "pet"){
        happylvl = happylvl + pet;
    } else if (userActions === "walk"){
	    --energylvl;
	    happylvl++;
	    happylvl++;
    }
    
    console.log("Energy Level: "  + energylvl);
    console.log("Happiness Level: "  + happylvl);
    
}

console.log("Your pet " + petName + "has the following levels: ", "happiness", happylvl, ",energy ", energylvl)