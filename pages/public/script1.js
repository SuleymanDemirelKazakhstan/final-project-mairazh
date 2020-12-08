
function onClickFn(event){
const url = "https://run.mocky.io/v3/e424163b-f9e3-4ae2-a94f-65001c81fe5c";
fetch(url).then(onSuccess, onError);
}

function onError(error){
	console.log(error);
}

function onSuccess(response){
	response.text().then(onProcess);
}

function onProcess(text){
	var section = document.querySelector(".section_elements");
	var txt = JSON.parse(text);
	
	for(var i=0; i<5; i++){
		var section_element = document.createElement("div");
		section_element.setAttribute("class", "section_element");

		var images = document.createElement("img");
		images.setAttribute("src", txt[i]["image_url"]);

		images.style.width = "230px";
		images.style.height = "345px";
		section_element.appendChild(images); 
		section.appendChild(section_element);
	}
	
}


