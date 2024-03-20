import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'
import { useLocation, useParams } from 'react-router-dom'

function EditTodo() {
    const { state, stateUpdaters } = useTodos()
    const { editTodo } = stateUpdaters
    const { getTodo, loading } = state
    const params = useParams()
    const location = useLocation()
    const id = Number(params.id)
    let todoText
    if (location.state?.todo) {
        todoText = location.state.todo.text
    } else if (loading) return <p>Cargando</p>
    else {
        const todo = getTodo(id)
        todoText = todo.text
    }

    return (
        <div className="form-container">
            <TodoForm
                label="Edit your TODO"
                actionText="Edit"
                defaultTodoText={todoText}
                submitEvent={(newText) => editTodo(id, newText)}
            />
        </div>
    )
}

export default EditTodo
