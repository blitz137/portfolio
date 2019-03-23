//Devon Mires IGN CODE-FOO Solution 2 PokeBall
//Coit Tower Hiest
//3-10-2019

/*To find the amount of pokeballs that could fit in coit tower. You use the formula (filled space)/(volume of sphere). Where filled space is equal to (container volume) * (packing density). The average packing for organized storage is 74%*/

//assuming a stored pokeball is about the same size as an average golf ball

//pokeBall radius is equall to 0.84inches

//volume of the poke ball would equall 4/3 * PI * Radius to the third power
let ballVolume = 4 / 3 * Math.PI * (0.84 * 0.84 * 0.84);

let pokeBall = ballVolume;

//coit tower height is 210ft tall
//coit tower area is 74,050 squared feet
//the volume of coit tower would be equall to area times height
//assuming the tower is hollowed out to fit the maximum amount of pokeballs
//the volume will equall the space used to store the pokeballs
let coitVolume = 74050 * 210;
let coitTower = coitVolume;

//there will be empty space between each pokeball
//in geometry sphere packing refers to an arrangement of spheres in a 3 dimensional space.
//typically if the spheres are equal in size and packed densly there will be 26% of empty space.

//the filled space of the tower is only 74% percent.
let filledSpace = coitTower * 0.74;

//the pokeballs are in inches so i need to convert them to feet

let pokeBallFeet = pokeBall / 12;

//to find how many pokeballs we divide the volume of the tower that is filled by the volume of a single pokeball
let answer = filledSpace / pokeBallFeet;

console.log(answer);

//aprx. 55,619,983 pokeballs in the tower on calc
