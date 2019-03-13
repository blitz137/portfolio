//Devon Mires IGN CODE-FOO Solution 3 witcher program
//Geralt's inventory.
//3-12-2019

//brute force
//loop through every possible combination of helmet, leg, boot, and chest.
//at each combination loop through every combination of adding an extra piece
//check combined price. If price is over amount of crowns you have then do nothng.
//if not over then add combined value.
//then add array of each element plus combined value into bigger array as an object.
//loop through that array to find highest value.
//highest value is your answer.
//This solution will work for any inventory that has a cost and value asscociated with it. 
//As long as it has the same restrictions, such as one of each armor type plus extra.

let crowns = 300;
let bigArr = [];
let helmet = [];
let chest = [];
let leggings = [];
let boots = [];
let extra = [];

let inventory = [
{"armorType" : "helmet" , "name": "Serpentine Cruz Headpiece","cost":90, "ArmorValue":23},
{"armorType" : "leggings" , "name": "Famed Pon Leggings ","cost":87, "ArmorValue":22},
{"armorType" : "leggings" , "name": "Ursine Trousers","cost":78, "ArmorValue":18},
{"armorType" : "helmet" , "name": "Keeton Mask","cost":77, "ArmorValue":24},
{"armorType" : "leggings" , "name": "Wolven Shinguards","cost":75, "ArmorValue":15},
{"armorType" : "leggings" , "name": "Hansen's Breeches","cost":69, "ArmorValue":17},
{"armorType" : "helmet" , "name": "Feline Visor","cost":68, "ArmorValue":16},
{"armorType" : "chest" , "name": "Armor de Jandro","cost":67, "ArmorValue":22},
{"armorType" : "chest" , "name": "Chestpiece of Vachon","cost":64, "ArmorValue":23},
{"armorType" : "boots" , "name": "Diamond Boots","cost": 64, "ArmorValue": 18},
{"armorType" : "leggings" , "name": "Griffin Pants ","cost":62, "ArmorValue":11},
{"armorType" : "chest" , "name": "Kaer Morhen Armor","cost":62, "ArmorValue":21},
{"armorType" : "helmet" , "name": "Ornate helmet of Cagampan ","cost":60, "ArmorValue":16},
{"armorType" : "chest" , "name": "Cured Leather Chestpiece","cost":59, "ArmorValue":20},
{"armorType" : "leggings" , "name": "Tanned Leg Protection","cost":59, "ArmorValue":15},
{"armorType" : "chest" , "name": "Smith's Plated Chestguard","cost":58, "ArmorValue":10},
{"armorType" : "chest" , "name": "Dented Plate Armor","cost": 57, "ArmorValue":19},
{"armorType" : "leggings" , "name": "Manticore Braces","cost":56, "ArmorValue":12},
{"armorType" : "chest" , "name": "Jeweled Drake Tunic","cost":55, "ArmorValue":19},
{"armorType" : "chest" , "name": "Ginger's Gilded Armor","cost":54, "ArmorValue":18},
{"armorType" : "helmet" , "name": "Offner Protector","cost":54, "ArmorValue":15},
{"armorType" : "leggings" , "name": "Mail Emares Leggings","cost":53, "ArmorValue":14},
{"armorType" : "boots" , "name": "Steel Boots","cost": 52, "ArmorValue":14},
{"armorType" : "boots" , "name": "Tate's Spiked Cleats","cost":52, "ArmorValue":20},
{"armorType" : "chest" , "name": "Garcia Guard","cost":50, "ArmorValue":17},
{"armorType" : "helmet" , "name": "Leather helmet","cost": 49, "ArmorValue":13},
{"armorType" : "leggings" , "name": "Woven Leggings","cost":47, "ArmorValue":11},
{"armorType" : "helmet" , "name": "Sligar's Noggin Protector","cost":46, "ArmorValue":12},
{"armorType" : "leggings" , "name": "Silken Pants ","cost":45, "ArmorValue":10},
{"armorType" : "helmet" , "name": "Glass Bowl","cost":44, "ArmorValue":12},
{"armorType" : "leggings" , "name": "Tattered Shorts","cost":42, "ArmorValue":13},
{"armorType" : "boots" , "name": "Leather Lunde Shoes","cost":35, "ArmorValue":7},
{"armorType" : "boots" , "name": "Cloth Shoes ","cost":33, "ArmorValue":5},
]





//loops through every item in inventory
for (var i = inventory.length - 1; i >= 0; i--) {


	
	//seperates items based off type of armor and add them to an array for corresponding type.
	switch (inventory[i].armorType){

		case "helmet":
			var currentArmor = helmet;
		break;

		case "chest":
			var currentArmor =chest;
		break;

		case "leggings":
			var currentArmor =leggings;
		break;

		case "boots":
			var currentArmor =boots;
		break;
	}
	
	currentArmor.push(inventory[i]);


}

//these loops will go through each possible combination of armor

//loop through each helmet
for (var h = 0; h < helmet.length; h++) {
	
	//loop through each chest piece
	for (var c = 0; c < chest.length; c++) {
	
		//loop through each pair of leggings
		for (var l = 0; l < leggings.length; l++) {
		
			//loop through each pair of boots
			for (var b = 0; b < boots.length; b++) {

				extra=[];
				//loops through all inventory
				for (var i = 0; i < inventory.length; i++) {
					
					//if armor piece is not one of the picked ones already push to extra array
					if(inventory[i] != helmet[h]&&	inventory[i] !=chest[c] && inventory[i] !=leggings[l] &&inventory[i] !=boots[b]){
						extra.push(inventory[i]);
					}
				}
				
				//loops through each extra piece of armor
				for (var e = 0; e < extra.length; e++) {
					//adds each item cost together
		 			var bigCost = helmet[h].cost + chest[c].cost +  leggings[l].cost + boots[b].cost + extra[e].cost;
					
					//if collective cost is less then the amount of money you have
					//add them to an array
		 			if(bigCost<=crowns){

		 				var itemsArr =[];
		 				itemsArr.push(helmet[h]);
		 				itemsArr.push(chest[c]);
		 				itemsArr.push(leggings[l]);
		 				itemsArr.push(boots[b]);
		 				itemsArr.push(extra[e]);

		 				var valueAll = helmet[h].ArmorValue + chest[c].ArmorValue + leggings[l].ArmorValue + boots[b].ArmorValue + extra[e].ArmorValue;
				
		 				bigArr.push({"arr": itemsArr ,"value":valueAll ,"cost":bigCost});
		 			}
				}
			}
		}
	}
}





let max = bigArr[0];

//loops through array with all possible combinations to find highest armor value
for (var i = 0; i < bigArr.length; i++) {
	if(bigArr[i].value>max.value){
		max = bigArr[i];
	}
}

//console.log(max);
//max is the answer.

//selects answer div in html
const answer = document.querySelector(".answer");


//loops through array in answer
for (var i = 0; i < max.arr.length; i++) {
	
	//creates paragraph for each element
	const line =document.createElement("p");

//adds text to paragraph
if (i<max.arr.length-1){

  	line.textContent = "The best choice for your "+max.arr[i].armorType+" piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".";
 	
 	console.log("The best choice for your "+max.arr[i].armorType+" piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".");
}

else{
 	
 	line.textContent = "The best choice for your extra piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".";
  
	console.log("The best choice for your extra piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".");
}

//appends paragraph to end of answer div
answer.appendChild(line);

}

//creates paragraph
const overall = document.createElement("p");

//adds text to paragraph about the final answer
overall.textContent = "Your overall cost is "+max.cost +" with a total armor value of "+max.value+".";

console.log("Your overall cost is "+max.cost +" with a total armor value of "+max.value+".")

//appends final results to answer div
answer.appendChild(overall);
