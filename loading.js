function showLoading(){
    const div= document.createElement("div");
    div.classList.add("loading","centralize");

    const label = document.createElement("label");
    label.innerText= "Carregando..."
    document.body.appendChild(div);

    div.appendChild(label);

    setTimeout(()=> hideLoading(),2000);
}

function hideLoading(){
    alert('hide')
}