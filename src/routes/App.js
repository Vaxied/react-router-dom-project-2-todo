import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './home'
import EditTodo from './EditTodo'
import NewTodo from './NewTodo'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewTodo />} />
                <Route path="/edit/:id" element={<EditTodo />} />
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </HashRouter>
    )
}

export default App
