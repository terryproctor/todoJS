class List{
    constructor(title, dueDate, listPriority) {
        this.title = title;
        this.dueDate = dueDate;
        // default priority is medium if not set
        if (listPriority) {
            this.listPriority = listPriority;
        } else {
            this.listPriority = 'medium'
        }
        this.projects = {};
        //defaulted done to false
        this.done = false;
    }
    
    //method to toogle if done or not
    toggleDone = () => this.done? this.done = false : this.done = true;

    createProject(projectName, dueDate, priority) {
        let newProject = new Project(projectName, dueDate, priority);
        this.projects[newProject.projectName] = newProject;
    };
};

// create new projects within list;
class Project{
    constructor(projectName, dueDate, priority) {
        this.projectName = projectName;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todos = [];    
    }
    
    createTodo(todoName) {
        this.todos.push(todoName);
    };
}; 

//test
const listy = new List ('firstList', '20/06/2022');
//console.log(listy);
listy.createProject('shopping', '31/05/2021', 'high');
listy.createProject('golf', '31/05/2021', 'low');
console.log(listy.projects.golf);
listy.projects.golf.createTodo('help');
console.log(listy.projects.golf.todos[0]);
