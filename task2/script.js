let btnOpen = document.getElementById("openBtn");
  let mainContainer = document.getElementById("main");
  const createModal = function(){
    let id = new Date().getTime();
    let div = document.createElement("div");
    div.className = "modal";
    div.id = id;
    let closeBtn = document.createElement("button");
    closeBtn.innerText = "Close Modal";
    closeBtn.id = "closeBtn";
    closeBtn.setAttribute("onclick", `closeModal(${id})`);
    let top = Math.floor(Math.random() * 500);
    let left = Math.floor(Math.random() * 500);
    console.log(top, left);
    
    div.setAttribute("style",`top:${top}px; left: ${left}px;`);
    mainContainer.appendChild(div);
    div.appendChild(closeBtn);
  }
  const closeModal = function(id){
    const modal = document.getElementById(id);
    modal.remove();
  }