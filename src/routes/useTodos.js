import React from 'react'
import { useLocalStorage } from './useLocalStorage'
// import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

// Custom hook to get URL query
const useQuery = () => new URLSearchParams(useLocation().search)
function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        synchronizeItem: synchronizeTodos,
    } = useLocalStorage('TODOS_V2', [])
    // const [searchParams] = useSearchParams()
    // const paramsValue = searchParams.get('search')
    const [searchValue, setSearchValue] = React.useState('')
    const query = useQuery()
    const paramsValue = query.get('search')

    // Verify if search parameters exist. If they do, and are different than the input value, set to the params value.
    if (paramsValue && paramsValue !== searchValue) {
        setSearchValue(paramsValue)
    }

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
        const id = newToDoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
            id,
        })
        saveTodos(newTodos)
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id)
        return todos[todoIndex]
    }

    const editTodo = (id, text) => {
        console.log('id', id)
        console.log('text', text)
        const todoIndex = todos.findIndex((todo) => {
            console.log(todo.id === id)
            return todo.id === id
        })
        console.log('index', todoIndex)
        const newTodos = [...todos]
        newTodos[todoIndex].text = text
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
        getTodo,
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
