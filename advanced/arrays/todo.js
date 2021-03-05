
const todos = [
{
    text : 'Feed the Dog',
    completed :  true
},
{
    text : 'Clean up the kitchen',
    completed  : false
},
{
    text : 'Travel more', 
    completed  : true
},
{
    text : 'Memorize Pi',
    completed  : false
},
{
        text : 'Show dog some love',
        completed  : true
}]
// 2. Create a function to remove a to do by text value

const deleteTodo = function(todos, todoText) {
    const index =  todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

//function that shows just the todos that have to be completed

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}

const sortTodos = function(todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

//THIS WORKS BUT ABOVE IS THE EXAMPLE THAT WAS GIVEN BY ANDREW MEAD
// const sortTodos = function (todos) {
//     todos.sort(function (a, b) {
//         return (a.completed - b.completed)
//     })
// }

sortTodos(todos)
console.log(todos)



// console.log(getThingsToDo(todos, false))

//  deleteTodo(todos, 'Travel more')
//  console.log(todos)  //-> to see what changed

