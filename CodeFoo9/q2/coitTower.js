//assuming a stored pokeball is about the same size as an average golf ball

//pokeBall radius is equall to 0.84inches

//volume of the poke ball would equall 4/3 * PI * Radius to the third power
let ballVolume = (4/3) * 3.14 * (0.84*0.84*0.84);

let pokeBall = ballVolume;
//coit tower height is 210ft tall
//coit tower area is 74,050 squared feet
//the volume of coit tower would be equall to area times height
let coitVolume = 74050 * 210;
let coitTower = coitVolume;
let filledSpace = coitTower * .74;


let pokeBallFeet = pokeBall /12;
let answer = filledSpace / pokeBallFeet;


console.log(answer);


//aprx. 55,680,822 on calc
