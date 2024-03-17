import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './home'
import EditPage from './editTodo'
import CreatePage from './createTodo'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<EditPage />} />
                <Route path="/edit" element={<CreatePage />} />
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </HashRouter>
    )
}

export default App
