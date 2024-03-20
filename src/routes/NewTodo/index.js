import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'

function NewTodo() {
    const {
        stateUpdaters: { addTodo },
    } = useTodos()
    return (
        <div className="form-container">
            <TodoForm
                label="Add your new TODO"
                actionText="Add"
                submitEvent={(text) => addTodo(text)}
            />
        </div>
    )
}

export default NewTodo
