import React from 'react'
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { TodosError } from '../../ui/TodosError'
import { TodosLoading } from '../../ui/TodosLoading'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodoForm } from '../../ui/TodoForm'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { Modal } from '../../ui/Modal'
import { ChangeAlert } from '../../ui/ChangeAlert'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    const { state, stateUpdaters } = useTodos()

    const {
        error,
        loading,
        // openModal,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
    } = state

    const {
        deleteTodo,
        completeTodo,
        // setOpenModal,
        synchronizeTodos,
        addTodo,
        setSearchValue,
    } = stateUpdaters

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                    loading={loading}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    loading={loading}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                searchedText={searchValue}
                totalTodos={totalTodos}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchedText) => (
                    <p>No hay resultados para {searchedText}</p>
                )}
            >
                {(todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onEdit={() => navigate(`/edit/${todo.id}`)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                )}
            </TodoList>

            {/* {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )} */}

            <CreateTodoButton
            // setOpenModal={setOpenModal}
            />
            <ChangeAlert synchronize={synchronizeTodos} />
        </React.Fragment>
    )
}

export default HomePage
