(()=>{todoObject={};class e{constructor(e,t,n,o){this.title=e,this.dueDate=n,this.description=t,this.priority=o||"medium",this.lists={}}createList(e){this.lists[e]=new t(e)}}class t{constructor(e){this.name=e,this.items=[],this.done=!1}toggleDone=()=>this.done?this.done=!1:this.done=!0;addItem=e=>this.items.push(e)}(()=>{const t=document.getElementById("content"),n=document.getElementById("addTodo"),o=document.getElementById("todoScreen"),d=document.getElementById("todoForm"),i=document.getElementById("submit"),s=document.getElementById("todos");n.addEventListener("click",(n=>{n.preventDefault(),t.style.display="none",o.style.display="block",i.addEventListener("click",(n=>{n.preventDefault();const i=(()=>{const e=document.getElementById("todoName").value,t=document.getElementById("todoDueDate").value,n=document.getElementById("description").value,o=d.querySelectorAll("input[name=priority]");let i;for(rBtn of o)rBtn.checked&&(i=rBtn.value);return{newName:e,newDate:t,newDescription:n,newPriority:i}})();var l,c,m,r;(e=>{let t=document.createElement("div");t.classList.add("todoItem");let n=document.createElement("p");n.textContent=e.title,t.appendChild(n),s.prepend(t)})((l=i.newName,c=i.newDescription,m=i.newDate,r=i.newPriority,new e(l,c,m,r))),["todoName","todoDueDate","description"].forEach((e=>{document.getElementById(e).value=null})),t.style.display="",o.style.display="none"}))}))})()})();