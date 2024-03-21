import React from 'react'
import './TodoForm.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { useNavigate } from 'react-router-dom'
import { useTodos } from '../../routes/useTodos'

function TodoForm(props) {
    // const navigate = useNavigate()
    const history = useHistory()
    const { state } = useTodos()
    const { loading } = state
    const [newTodoValue, setNewTodoValue] = React.useState(
        props.defaultTodoText || ''
    )

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        // navigate('/')
        history.push('/')
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(props)
        props.submitEvent(newTodoValue)
        console.log(newTodoValue)
        // navigate('/')
        history.push('/')
    }
    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cut onions for lunch"
                disabled={loading}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {props.actionText}
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
