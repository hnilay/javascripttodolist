


function newElement(){

    let ulDOM = document.querySelector("ul#list")
    let liDOM = document.createElement("li")
    
    let inputDOM = document.querySelector("#task")

    if (inputDOM.value && inputDOM.value.replace(/^\s+|\s+$/g, "").length !== 0) {

        liDOM.innerHTML = inputDOM.value
        ulDOM.append(liDOM)

        localStorage.setItem("input",inputDOM.value)

        inputDOM.value = ""

        $("#liveToast").toast('show');


    } else{
        $("#liveToastII").toast('show');
    }

    let toDoList = document.querySelector("#list")
    toDoList.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    });

    // span oluşturma, çarpı ekleme ve spani li elementine ekleme
    let span = document.createElement('SPAN');
    span.className = 'close';
    span.textContent = '\u00D7';
    liDOM.appendChild(span);


    // spane tıklanınca li elementini silme
    span.onclick = () => {
        liDOM.style.display = 'none';
    };

}

   



