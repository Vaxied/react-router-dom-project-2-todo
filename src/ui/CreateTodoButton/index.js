import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const navigate = useNavigate()
    return (
        <button className="CreateTodoButton" onClick={() => navigate('/new')}>
            +
        </button>
    )
}

export { CreateTodoButton }
