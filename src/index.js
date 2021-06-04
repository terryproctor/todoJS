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

// test
// let bigProject = new Todo('birthday party', 'Georges birthday party', '1804');
// bigProject.createList('go_shopping');
// bigProject.createList('cook_food');
// bigProject.lists.cook_food.addItem('cheese and pineapples on sticks');
// console.log(bigProject.lists);

//////////
///Dom stuff
// const inputs = ['name', 'description', 'dueDate', 'priority'];
// const inputNewList = (type) => {
//     //display boxes for inputing name and due by date to create new list
//     let inputDiv = document.createElement('div');

//     let newInput = document.createElement('input',);
//     newInput.setAttribute("type", type);
//     newInput.setAttribute("id", `${type}Input`);
//     let listsColumn = document.getElementById('lists');
//     listsColumn.appendChild(newInput);
//     newInput.insertAdjacentHTML('beforeBegin', `${type}: `)
// }

// const addList = document.getElementById('addList');
// addTodo.addEventListener('click', () => inputs.forEach(x => inputNewList(x)));