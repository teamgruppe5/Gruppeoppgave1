let app = document.getElementById('app')
let itemspictures = ["./img/coke.png", "./img/dagger.png", "./img/energy.png", "./img/gameboy.png", 
					"./img/hamburger.png", "./img/hammer.png", "./img/hand-cuffs.png", "./img/hatchet.png",
					"./img/molotov.png", "./img/samsung-s8.png", "./img/sandwich.png", "./img/diamond.png"];
let btnStatus = "Close Inventory"

//view
show()
// inventory() function holds many divs class="inventory" and id="inventoryid(0-11)"
// store() function holds many divs class="store" and id="storeid(0-11)"
function show(){
	
	app.innerHTML = /*HTML*/ `
	<div id='InventoryHolder'> 	${inventory()} </div>
	<button id='stupidBtn' onclick='closeInventory()'>Close Inventory</button>
	<div id='StoreInventory'>	${store()} </div>
	


	`;
}

function store(){ //this is store slots
	let html =""
	for(let i = 0; i < 12; i++){
		 html += /*HTML*/ `<div class='store' onclick='buyItem(this.id)' id="storeid${i}"><img  class="images"  src=${itemspictures[i]} alt="and where is the picture?"></div>
		 `;
		 }
	  return html;
	}

function inventory(){ //this is inventory slots
	let html =""
	for(let i = 0; i < 12; i++){
		 html += /*HTML*/ `<div class='inventory' id="inventoryid${i}"></div>
		 `;
		 }
  return html;
  }


function closeInventory(){
	let stupidBtn = document.getElementById('stupidBtn')
	
	if(stupidBtn.innerHTML === 'Close Inventory'){
	document.getElementById('InventoryHolder').classList.add('hidden')
	stupidBtn.innerHTML = 'Open Inventory'
	}
	else{
	document.getElementById('InventoryHolder').classList.remove('hidden')
	stupidBtn.innerHTML = 'Close Inventory'
	}
}
let i = 0
function buyItem(itemID){
	let itID = itemID
	let storeItem = document.getElementById(itemID);
	let inventoryID = "inventoryid" + i
	let inventorySlot = document.getElementById(inventoryID)
	if(inventorySlot.innerHTML === ""){
			inventorySlot.innerHTML = storeItem.innerHTML
		}
	else {
		i++
		buyItem(itID);
	};
}



// function sellItem(){}