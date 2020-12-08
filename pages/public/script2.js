function onClickFn(event){
const url1 = "https://run.mocky.io/v3/2b123640-799e-42ea-a952-797665dc5f01";
fetch(url1).then(onSuccess, onError);
}

function onError(error){
	console.log(error);
}

function onSuccess(response){
	response.text().then(onProcess);
}

function onProcess(text){
	var list = document.querySelector(".list_pizza_items");
	var txt = JSON.parse(text);
	
	for(var i=0; i<txt.length; i++){
		var list_item = document.createElement("a");
		list_item.setAttribute("class", "list_pizza_item");
		var list_image = document.createElement("div");
		list_image.setAttribute("class", "list_item_image");

		var images = document.createElement("img");
		images.setAttribute("src", txt[i]["image_url"]);

		images.style.width = "290px";
		images.style.height = "180px";
		list_image.appendChild(images); 

		var list_text = document.createElement("div");
		list_text.setAttribute("class", "list_item_text");
		list_text.innerHTML = txt[i]["name"];
		var list_price = document.createElement("div");
		list_price.setAttribute("class", "list_pizza_price");
		list_price.innerHTML = txt[i]["price"]+"$";
		list_item.appendChild(list_image);
		list_item.appendChild(list_text);
		list_item.appendChild(list_price);
		list.appendChild(list_item);
	}
}


function onclickFn2(event){
const url2 = "https://run.mocky.io/v3/022d6af3-750c-438a-94fc-4bdcb42b4a59";
fetch(url2).then(onSuccess2, onError);
}

function onError(error){
	console.log(error);
}

function onSuccess2(response){
	response.text().then(onProcess2);
}

function onProcess2(text){
	var list = document.querySelector(".list_cake_items");
	var txt = JSON.parse(text);
	
	for(var i=0; i<txt.length; i++){
		var list_item = document.createElement("a");
		list_item.setAttribute("class", "list_cake_item");
		var list_image = document.createElement("div");
		list_image.setAttribute("class", "list_item_image");

		var images = document.createElement("img");
		images.setAttribute("src", txt[i]["image_url"]);

		images.style.width = "210px";
		images.style.height = "315px";
		list_image.appendChild(images); 

		var list_text = document.createElement("div");
		list_text.setAttribute("class", "list_item_text");
		list_text.innerHTML = txt[i]["name"];
		var list_price = document.createElement("div");
		list_price.setAttribute("class", "list_cake_price");
		list_price.innerHTML = txt[i]["price"]+"$";
		list_item.appendChild(list_image);
		list_item.appendChild(list_text);
		list_item.appendChild(list_price);
		list.appendChild(list_item);

	}
}

function onclickFn3(event){
const url2 = "https://run.mocky.io/v3/2bb40b0a-0dd2-45d9-a399-3f9e699babe4";
fetch(url2).then(onSuccess3, onError);
}

function onError(error){
	console.log(error);
}

function onSuccess3(response){
	response.text().then(onProcess3);
}

function onProcess3(text){
	var list = document.querySelector(".list_cupcake_items");
	var txt = JSON.parse(text);
	
	for(var i=0; i<txt.length; i++){
		var list_item = document.createElement("a");
		list_item.setAttribute("class", "list_cupcake_item");
		var list_image = document.createElement("div");
		list_image.setAttribute("class", "list_item_image");

		var images = document.createElement("img");
		images.setAttribute("src", txt[i]["image_url"]);

		images.style.width = "130px";
		images.style.height = "190px";
		list_image.appendChild(images); 

		var list_of_text = document.createElement("div");
		list_of_text.setAttribute("class", "list_of_text")

		var list_text = document.createElement("div");
		list_text.setAttribute("class", "list_cupcake_text");
		list_text.innerHTML = txt[i]["name"];

		var list_txt = document.createElement("p");
		list_txt.setAttribute("class", "def");
		list_txt.innerHTML = txt[i]["text"];

		var list_price = document.createElement("div");
		list_price.setAttribute("class", "list_cupcake_price");
		list_price.innerHTML = txt[i]["price"]+"$"
		

		list_of_text.appendChild(list_text);
		list_of_text.appendChild(list_txt);
		list_of_text.appendChild(list_price);

		list_item.appendChild(list_image);
		list_item.appendChild(list_of_text);
		list.appendChild(list_item);

	}
}

