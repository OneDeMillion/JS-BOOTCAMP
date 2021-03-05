'use strict'

// Fetch existing todos from Local Storage

const getSavedTodos = () => {

    const todoJSON = localStorage.getItem('todos')

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to Local Storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render app todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        let searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        let hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const getItemsToDo = filteredTodos.filter((todo) => !todo.completed )
        
        document.querySelector('#to-dos').innerHTML = ''
        document.querySelector('#to-dos').appendChild(generateSummaryDOM(getItemsToDo))
        
    filteredTodos.forEach((todo) => {
        document.querySelector('#to-dos').appendChild(generateTodoDOM(todo))
    })
}

//remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkEl = document.createElement('input')
    const spanEl = document.createElement('span')
    const removeButton = document.createElement('button')

    //setup todo checkbox
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    todoEl.appendChild(checkEl)
    checkEl.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    //setup the todo text
    spanEl.textContent = todo.text
    todoEl.appendChild(spanEl)

    //set up the remove button
    removeButton.textContent = "x"
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    

    return todoEl
}

// Get the DOM elemments for summary

const generateSummaryDOM = (getItemsToDo) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${getItemsToDo.length} todos left.`
    return summary
}