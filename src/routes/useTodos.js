import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { TodoList } from '../ui/TodoList'

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        synchronizeItem: synchronizeTodos,
    } = useLocalStorage('TODOS_V2', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter((todo) => !!todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const addTodo = (text) => {
        console.log(addTodo)
        const id = newToDoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
            id,
        })
        console.log(newTodos)
        saveTodos(newTodos)
    }

    const editTodo = (id, text) => {
        console.log(editTodo)
        const index = todos.findIndex((todo) => todo.id === id)
        const newTodos = [...todos]
        newTodos[index].text = text
        saveTodos(newTodos)
    }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const state = {
        error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
    }

    const stateUpdaters = {
        deleteTodo,
        completeTodo,
        synchronizeTodos,
        addTodo,
        editTodo,
        setSearchValue,
    }

    return {
        state,
        stateUpdaters,
    }
}

function newToDoId(todos) {
    console.log(todos.length)
    if (!todos.length) return 1
    const idList = todos.map((todo) => todo.id)
    let id = Math.max(...idList) + 1
    return id
}
export { useTodos }
