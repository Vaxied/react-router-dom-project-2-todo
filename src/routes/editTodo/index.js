import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'
import { useParams } from 'react-router-dom'

function EditTodo() {
    const { stateUpdaters } = useTodos()
    const { editTodo } = stateUpdaters
    const params = useParams()
    const id = Number(params.id)
    return (
        <div className="form-container">
            <TodoForm
                label="Edit your TODO"
                actionText="Edit"
                submitEvent={(newText) => editTodo(id, newText)}
            />
        </div>
    )
}

export default EditTodo
