// need to add to todoObjects instead
let todoObjects = (() => {
    todoObject = {'example':'exampletext',}
})()

class Todo{
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        // default priority is medium if not set
        if (priority) {
            this.priority = priority;
        } else {
            this.priority = 'medium';
        }
        this.lists = {};
    }
   
    createList(name) {
        this.lists[name] = new List(name);
    };
};

// create new lists within todo;
class List{
    constructor(name) {
    this.name = name;
    this.items = []; 
    this.done = false;   
    }
    
    //method to toogle if done or not
    toggleDone = () => this.done? this.done = false : this.done = true;
    
    addItem = (itemName) => this.items.push(itemName);
}; 

//function to create Todo
const createTodo = (title, description, dueDate, priority) => new Todo(title, description, dueDate, priority);



///////////////////////////////////////////////////////////////////////
///Dom stuff

const domStuff = (() => {
    const mainContent = document.getElementById('content');
    const addTodo = document.getElementById('addTodo');
    const todoScreen = document.getElementById('todoScreen');
    const form = document.getElementById('todoForm');
    const submit = document.getElementById('submit');
    const todoList = document.getElementById('todos')

    const getFormStuff = () => {
        const newName = document.getElementById('todoName').value;
            const newDate = document.getElementById('todoDueDate').value;
            const newDescription = document.getElementById('description').value;
            const priorityRadio = form.querySelectorAll('input[name=priority]');
            let newPriority;
            for (rBtn of priorityRadio) {
                if (rBtn.checked) {newPriority = rBtn.value;}
            }
        return {newName, newDate, newDescription, newPriority}
    }

    const clearForm = () => {
        const values = ['todoName', 'todoDueDate', 'description'];
        values.forEach(item => {
            let toWipe = document.getElementById(item);
            toWipe.value= null;
        }) 
    }

    const showForm = () => {
        mainContent.style.display="none";
        todoScreen.style.display='block';
    }

    const closeForm = () => {
        mainContent.style.display="";
        todoScreen.style.display='none';
    }

    

    const createTodoDiv = (newTodo) => {
        let newDiv= document.createElement('div');
        newDiv.classList.add('todoItem');
        let newText = document.createElement('p');
        newText.textContent = newTodo.title;
        newDiv.appendChild(newText);
        todoList.prepend(newDiv);
    } 

    //plus sign toggle main screen display and form popping up
    addTodo.addEventListener('click', (e) => {
        e.preventDefault();
        showForm();
        
        submit.addEventListener('click', (e)=> {
            e.preventDefault();
            //create object from form
            const newForm = getFormStuff();
            //use form to create Todo
            const newTodo = createTodo(newForm.newName, newForm.newDescription, newForm.newDate, newForm.newPriority);
            createTodoDiv(newTodo);
            clearForm();
            closeForm();
            
        })
    });



    
})();