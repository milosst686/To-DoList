let osnovniDiv = document.createElement("div");
osnovniDiv.className = "osnovniDiv";
document.body.appendChild(osnovniDiv);

let naslovDiv = document.createElement("div");
naslovDiv.className="naslovDiv";
osnovniDiv.appendChild(naslovDiv);

let naslovTxt = document.createElement("h1");
naslovTxt.className= "naslovTxt";
naslovTxt.innerHTML = "To - Do";
naslovDiv.appendChild(naslovTxt);

let unosDiv = document.createElement("div");
unosDiv.className="unosDiv";
osnovniDiv.appendChild(unosDiv);

let inputBox = document.createElement("input");
inputBox.className= "inputBox";
inputBox.type = "text";
inputBox.id = "inputBox";
unosDiv.appendChild(inputBox);

let inputBtn = document.createElement("button");
inputBtn.className = "inputBtn";
inputBtn.innerHTML = "+";
unosDiv.appendChild(inputBtn);
inputBtn.onclick= (ev)=> 
{
    this.dodajToDo(osnovniDiv);
}



function dodajToDo(osnova)
{
    let unetiTxt = document.getElementById("inputBox").value;
    let itemDiv = document.createElement("div");
    itemDiv.className = "itemDiv";
    osnova.appendChild(itemDiv);

    let textZaNalepiti = document.createElement("label");
    textZaNalepiti.innerHTML = unetiTxt;
    textZaNalepiti.className = "txtZaNalepiti";
    itemDiv.appendChild(textZaNalepiti);

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.className = "deleteBtndiv";
    itemDiv.appendChild(deleteBtnDiv);

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "x";
    deleteBtnDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', () =>{osnova.removeChild(itemDiv)});
    inputBox.value = null;

}

