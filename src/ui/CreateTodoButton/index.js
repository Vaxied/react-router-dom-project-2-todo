import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './CreateTodoButton.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function CreateTodoButton(props) {
    // const navigate = useNavigate()
    const history = useHistory()
    return (
        <button
            className="CreateTodoButton"
            onClick={() => history.push('/new')}
        >
            +
        </button>
    )
}

export { CreateTodoButton }
