document.getElementById("addList").addEventListener("click",(()=>{let e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("id","nameInput"),document.getElementById("lists").appendChild(e),e.insertAdjacentHTML("beforeBegin","Name: ")}));