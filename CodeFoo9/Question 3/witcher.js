//Devon Mires IGN CODE-FOO Solution 3 witcher program
//Geralt's inventory.
//3-12-2019

//brute force
//loop through every possible combination of helmet leg boot and chest
//at each combo then loop through every combination of adding an extra
//check combined price if over crowns then do nothng
//if not over then add combined value
//then add array of each element plus combined value into big array
//loop through that array to find highest value
//that is your answer.
//mic drop



let crowns = 300;
let bigArr=[];
let helmet=[];
let chest =[];
let leggings=[];
let boots = [];
let extra = [];

let inventory = [
{"armorType" : "Helmet" , "name": "Serpentine Cruz Headpiece","cost":90, "ArmorValue":23, "worth":""},
{"armorType" : "Leggings" , "name": "Famed Pon Leggings ","cost":87, "ArmorValue":22, "worth":""},
{"armorType" : "Leggings" , "name": "Ursine Trousers","cost":78, "ArmorValue":18, "worth":""},
{"armorType" : "Helmet" , "name": "Keeton Mask","cost":77, "ArmorValue":24, "worth":""},
{"armorType" : "Leggings" , "name": "Wolven Shinguards","cost":75, "ArmorValue":15, "worth":""},
{"armorType" : "Leggings" , "name": "Hansen's Breeches","cost":69, "ArmorValue":17, "worth":""},
{"armorType" : "Helmet" , "name": "Feline Visor","cost":68, "ArmorValue":16, "worth":""},
{"armorType" : "Chest" , "name": "Armor de Jandro","cost":67, "ArmorValue":22, "worth":""},
{"armorType" : "Chest" , "name": "Chestpiece of Vachon","cost":64, "ArmorValue":23, "worth":""},
{"armorType" : "Boots" , "name": "Diamond Boots","cost": 64, "ArmorValue": 18, "worth":""},
{"armorType" : "Leggings" , "name": "Griffin Pants ","cost":62, "ArmorValue":11, "worth":""},
{"armorType" : "Chest" , "name": "Kaer Morhen Armor","cost":62, "ArmorValue":21, "worth":""},
{"armorType" : "Helmet" , "name": "Ornate Helmet of Cagampan ","cost":60, "ArmorValue":16, "worth":""},
{"armorType" : "Chest" , "name": "Cured Leather Chestpiece","cost":59, "ArmorValue":20, "worth":""},
{"armorType" : "Leggings" , "name": "Tanned Leg Protection","cost":59, "ArmorValue":15, "worth":""},
{"armorType" : "Chest" , "name": "Smith's Plated Chestguard","cost":58, "ArmorValue":10, "worth":""},
{"armorType" : "Chest" , "name": "Dented Plate Armor","cost": 57, "ArmorValue":19, "worth":""},
{"armorType" : "Leggings" , "name": "Manticore Braces","cost":56, "ArmorValue":12, "worth":""},
{"armorType" : "Chest" , "name": "Jeweled Drake Tunic","cost":55, "ArmorValue":19, "worth":""},
{"armorType" : "Chest" , "name": "Ginger's Gilded Armor","cost":54, "ArmorValue":18, "worth":""},
{"armorType" : "Helmet" , "name": "Offner Protector","cost":54, "ArmorValue":15, "worth":""},
{"armorType" : "Leggings" , "name": "Mail Emares Leggings","cost":53, "ArmorValue":14, "worth":""},
{"armorType" : "Boots" , "name": "Steel Boots","cost": 52, "ArmorValue":14, "worth":""},
{"armorType" : "Boots" , "name": "Tate's Spiked Cleats","cost":52, "ArmorValue":20, "worth":""},
{"armorType" : "Chest" , "name": "Garcia Guard","cost":50, "ArmorValue":17, "worth":""},
{"armorType" : "Helmet" , "name": "Leather Helmet","cost": 49, "ArmorValue":13, "worth":""},
{"armorType" : "Leggings" , "name": "Woven Leggings","cost":47, "ArmorValue":11, "worth":""},
{"armorType" : "Helmet" , "name": "Sligar's Noggin Protector","cost":46, "ArmorValue":12, "worth":""},
{"armorType" : "Leggings" , "name": "Silken Pants ","cost":45, "ArmorValue":10, "worth":""},
{"armorType" : "Helmet" , "name": "Glass Bowl","cost":44, "ArmorValue":12, "worth":""},
{"armorType" : "Leggings" , "name": "Tattered Shorts","cost":42, "ArmorValue":13, "worth":""},
{"armorType" : "Boots" , "name": "Leather Lunde Shoes","cost":35, "ArmorValue":7, "worth":""},
{"armorType" : "Boots" , "name": "Cloth Shoes ","cost":33, "ArmorValue":5, "worth":""},
]





//loops through every item in inventory
for (var i = inventory.length - 1; i >= 0; i--) {

	//adds value to each item's worth. Worth represents the price per armor value.
	//The lower the worth the more the more "bang for your buck".
	inventory[i].worth = inventory[i].cost/inventory[i].ArmorValue;
	
	//seperates items based off type of armor and add them to an array for corresponding type.
	switch (inventory[i].armorType){

		case "Helmet":
			var currentArmor = helmet;
		break;

		case "Chest":
			var currentArmor =chest;
		break;

		case "Leggings":
			var currentArmor =leggings;
		break;

		case "Boots":
			var currentArmor =boots;
		break;
	}
	
	currentArmor.push(inventory[i]);


}




for (var h = 0; h < helmet.length; h++) {
	
	for (var c = 0; c < chest.length; c++) {
	
		for (var l = 0; l < leggings.length; l++) {
		
			for (var b = 0; b < boots.length; b++) {

				extra=[];
				for (var i = 0; i < inventory.length; i++) {
					
					if(inventory[i] != helmet[h]&&	inventory[i] !=chest[c] && inventory[i] !=leggings[l] &&inventory[i] !=boots[b]){
						extra.push(inventory[i]);
					}
				}
				
				for (var e = 0; e < extra.length; e++) {
		 			var bigCost = helmet[h].cost + chest[c].cost +  leggings[l].cost + boots[b].cost + extra[e].cost;
				
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


for (var i = 0; i < bigArr.length; i++) {
	if(bigArr[i].value>max.value){
		max = bigArr[i];
	}
}

//console.log(max);
//max is the answer.


for (var i = 0; i < max.arr.length; i++) {
	
if (i<max.arr.length-1){
console.log("The best choice for your "+max.arr[i].armorType+" piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".");
}
else{
	console.log("The best choice for your extra piece is the "+max.arr[i].name + " with a cost of "+max.arr[i].cost+" and a value of "+max.arr[i].ArmorValue+".");

}



}

console.log("Your overall cost is "+max.cost +" with a total armor value of "+max.value+".")