'use strict'

console.log(uuidv4())

const todos = getSavedTodos()


const filters = {
    searchText: '',
    hideCompleted: false
}



renderTodos(todos, filters)



// Listen for search input
document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos,filters)
    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-done').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

    })
