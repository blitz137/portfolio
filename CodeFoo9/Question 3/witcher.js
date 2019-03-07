//wont work unless crowns are equell to or higher than minimum cost to buy full set.

let crowns = 204;
let unit =[];
let helmet=[];
let chest =[];
let leggings=[];
let boots = [];
let extra = [];
let currentList =[];
let passed = false;
let thing = [];
let test =0;
let overallCost=0;
let overallValue;
let newHigh=[];
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

var updateExtraPassed =true;

//
function overallAdd(){
	overallCost = bestextra.cost+bestHelmet.cost+bestChest.cost+bestLeggings.cost+bestBoots.cost;
	overallValue = bestextra.ArmorValue+bestHelmet.ArmorValue+bestChest.ArmorValue+bestLeggings.ArmorValue+bestBoots.ArmorValue;
}

function updateExtra(){
	extra =[];
	for (var i = 0; i < inventory.length; i++) {
		if((inventory[i]!== bestHelmet)&& (inventory[i]!== bestChest)&&(inventory[i]!== bestLeggings)&&(inventory[i]!== bestBoots)){
			if(newHigh[0]!=undefined){
				for (var j = 0; j < newHigh.length; j++) {
					if(newHigh[j]==inventory[i]){
						updateExtraPassed = false;
					}
				}
			}
			if (updateExtraPassed == true){
				extra.push(inventory[i]);
			}
			else{
				updateExtraPassed = true;
			}
		}
	}	
	
	mySort(extra);
	bestextra = extra[0];
	bestWorth(extra, bestextra, extraLocal);
}


//sorts selected armor type array from least to greatest cost.
function mySort(arr){
	for (var i=1; i<arr.length; i++){
        for (var j=arr.length; j<1; j--){
            if (parseInt(arr[j-1].cost) < parseInt(arr[j].cost)){
                var temp = arr[j-1];
                arr[j-1] = arr[i]
                arr[j] = temp;
            }   
        }    
    }
}

//finds armors with best/lowest worth rating.
function bestWorth(armor, bestArmor, armorLocal){
	for (var i = 0; i < armor.length; i++) {
		if(armor[i].worth< bestArmor.worth){
			if(armor != extra){
				switch (armor[i].armorType){

					case "Helmet":
						bestHelmet = armor[i];
					break;

					case "Chest":
						bestChest =armor[i];
					break;

					case "Leggings":
						bestLeggings =armor[i];
					break;

					case "Boots":
						bestBoots =armor[i];
					break;
				}	
			}
			bestArmor=armor[i];
			armorLocal = i;	

			if (armor==extra){
				bestextra = extra[i];
			}
		}
	}
}
function armorSort(arr){
	for (var j=1; j<arr.length; j++){
        for (var i=1; i<arr.length; i++){
            if (parseInt(arr[i-1].ArmorValue) < parseInt(arr[i].ArmorValue)){
                var temp = arr[i-1];
                arr[i-1] = arr[i]
                arr[i] = temp;
            }   
        }    
    }
}
	

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

mySort(helmet);

mySort(leggings);

mySort(chest);

mySort(boots);


let bestHelmet = helmet[0];
let bestChest = chest[0];
let bestLeggings = leggings[0];
let bestBoots = boots[0];

var helmetLocal;
var chestLocal;
var leggingsLocal;
var bootsLocal;

bestWorth(helmet, bestHelmet, helmetLocal);
//console.log(bestHelmet);
bestWorth(chest, bestChest, chestLocal);
bestWorth(leggings, bestLeggings, leggingsLocal);
bestWorth(boots, bestBoots, bootsLocal);


let bestextra;
var extraLocal;



updateExtra();



overallAdd();


//check for highest cost then exicute
//put all best objects into array and have location for type recorded
//check each one for most needed to be replaced then replace that element with next cheapest option
//then check if it meets criterea otherwise do it again. need to add sswithc statements and functions
//change some ifs to be recursive functions so you can call it again only if you didn't get right answer.

let helmetPassed = false;
let chestPassed = false;
let leggingsPassed = false;
let bootsPassed = false;
let extraPassed = false;


function removeCost(){
overallAdd();

console.log(overallValue);
console.log(overallCost);
console.log("little high");
costDif = overallCost-crowns;
console.log(costDif);
//if this works then costDif becomes negative

for (var i = helmet.length - 1; i >= 0; i--) {
		
	if(helmet[i].cost <= bestHelmet.cost-costDif && helmetPassed!=true){

	newHigh.push(helmet[i]);
	//var newHelmet = helmet[i];
	helmetPassed = true;
	}
	
}
for (var i =chest.length - 1; i >= 0; i--) {
		
	if(chest[i].cost <= bestChest.cost-costDif &&chestPassed!=true){
	newHigh.push(chest[i]);
	//var newHelmet =chest[i];
	chestPassed = true;
	}
	
}

for (var i =leggings.length - 1; i >= 0; i--) {
		
	if(leggings[i].cost <= bestLeggings.cost-costDif && leggingsPassed!=true){
	newHigh.push(leggings[i]);
	//var newleggings = leggings[i];
	leggingsPassed = true;
	}
	
}

for (var i =boots.length - 1; i >= 0; i--) {
		
	if(boots[i].cost <= bestBoots.cost-costDif && bootsPassed!=true){
	newHigh.push(boots[i]);
	//var newboots = boots[i];
	bootsPassed = true;
	}
	
}

updateExtra();
for (var i = 0; i < extra.length; i++) {
	
	if(extra[i].cost<= bestextra.cost-costDif && extraPassed!=true /*&& extra[i].ArmorValue>extra[i+1].ArmorValue*/){
	


	newHigh.push(extra[i]);
	newHigh[newHigh.length-1].armorType = "Extra";
	//var newextra = extra[i];
	extraPassed = true;
	}

	
}

armorSort(newHigh);

if (newHigh[0]!=undefined){
switch (newHigh[0].armorType){

		case "Helmet":
			bestHelmet = newHigh[0];
		break;

		case "Chest":
			bestChest = newHigh[0];
		break;

		case "Leggings":
			bestLeggings = newHigh[0];
		break;

		case "Boots":
			bestBoots = newHigh[0];
		break;

		case "Extra":
			bestextra = newHigh[0];
		break;

	}
	//newHigh=[];
}

overallAdd();

if (overallCost>crowns){
		
for (var i = helmet.length - 1; i >= 0; i--) {
		
	if(helmet[i].cost < bestHelmet.cost && helmetPassed!=true){

	newHigh.push(helmet[i]);
	//var newHelmet = helmet[i];
	helmetPassed = true;
	}
	
}
helmetPassed = false;
for (var i =chest.length - 1; i >= 0; i--) {
		
	if(chest[i].cost < bestChest.cost &&chestPassed!=true){
	newHigh.push(chest[i]);
	//var newHelmet =chest[i];
	chestPassed = true;
	}
	
}
chestPassed = false;

for (var i =leggings.length - 1; i >= 0; i--) {
		
	if(leggings[i].cost < bestLeggings.cost && leggingsPassed!=true){
	newHigh.push(leggings[i]);
	//var newleggings = leggings[i];
	leggingsPassed = true;
	}
	
}
leggingsPassed = false;

for (var i =boots.length - 1; i >= 0; i--) {
		
	if(boots[i].cost < bestBoots.cost && bootsPassed!=true){
	newHigh.push(boots[i]);
	
	bootsPassed = true;
	}
	
}
bootsPassed = false;

updateExtra();
for (var i = 0; i < extra.length; i++) {
	
	if(extra[i].cost<= bestextra.cost && extraPassed!=true /*&& extra[i].ArmorValue>extra[i+1].ArmorValue*/){
	


	newHigh.push(extra[i]);
	newHigh[newHigh.length-1].armorType = "Extra";
	//var newextra = extra[i];
	extraPassed = true;
	}
	
}
extraPassed = false;
	


	for (var i = 0; i < newHigh.length; i++) {
		
	
		switch (newHigh[i].armorType){

			case "Helmet":
				bestHelmet = newHigh[i];
			break;

			case "Chest":
				bestChest = newHigh[i];
			break;

			case "Leggings":
				bestLeggings = newHigh[i];
			break;

			case "Boots":
				bestBoots = newHigh[i];
			break;

			case "Extra":
				bestextra = newHigh[i];
			break;

		}
	}
}


overallAdd();
if(overallCost>crowns){
	removeCost();
}
}


	



//figure out if you should store the best values into an object
//like  { "helmet" : {...}, "chest":{...}, .... ,"extra":{...}}
//could loop through object and move to next piece each time and use switch case so code below is used once
//instead of being repeated.

///need to compare the values before adding them.
//need to create fix for crowns being over budget.
let costDif = crowns-overallCost;

function addCost(){
	overallAdd();

costDif = crowns-overallCost;
console.log(overallValue);
console.log(overallCost);
console.log("little low");


for (var i = 0; i < helmet.length; i++) {
	if(helmet[i].cost<= bestHelmet.cost+costDif && helmet[i].ArmorValue> bestHelmet.ArmorValue){
		//var newHelmet = helmet[i];
		bestHelmet = helmet[i];
	}	
}

overallAdd();
costDif = crowns-overallCost;
for (var i = 0; i < chest.length; i++) {
	if(chest[i].cost<= bestChest.cost+costDif && chest[i].ArmorValue>bestChest.ArmorValue){
		//var newChest = chest[i];
		bestChest = chest[i];
	}
}
overallAdd();
costDif = crowns-overallCost;

for (var i = 0; i < leggings.length; i++) {
	if(leggings[i].cost<= bestLeggings.cost+costDif && leggings[i].ArmorValue>bestLeggings.ArmorValue){
		//var newLegs = leggings[i];
		bestLeggings = leggings[i];
	}
}
overallAdd();
costDif = crowns-overallCost;

for (var i = 0; i < boots.length; i++) {
	if(boots[i].cost<= bestBoots.cost+costDif && boots[i].ArmorValue>bestBoots.ArmorValue){
	//	var newBoots  = boots[i];
		bestBoots = boots[i];
	}	
}
overallAdd();
costDif = crowns-overallCost;

updateExtra();

for (var i = 0; i < extra.length; i++) {
	if( extra[i].cost <= bestextra.cost+costDif && extra[i].ArmorValue>bestextra.ArmorValue){
		//var newExtra = extra[i];
		bestextra = extra[i];
	}
}

overallAdd();

}




console.log(extra);
console.log(bestextra);

console.log(helmet);
console.log(bestHelmet);

console.log(chest);
console.log(bestChest);

console.log(leggings);
console.log(bestLeggings);

console.log(boots);
console.log(bestBoots);
if(overallCost>crowns){
	removeCost();
}
if (overallCost<crowns){
	addCost();
}


overallAdd();

console.log(overallValue);

console.log(overallCost);

console.log(extra);
console.log(bestextra);

console.log(helmet);
console.log(bestHelmet);

console.log(chest);
console.log(bestChest);

console.log(leggings);
console.log(bestLeggings);

console.log(boots);
console.log(bestBoots);
