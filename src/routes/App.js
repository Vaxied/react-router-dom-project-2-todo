import React from 'react'
// import { HashRouter, Routes, Route } from 'react-router-dom'
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom/cjs/react-router-dom.min'
import HomePage from './home'
import EditTodo from './EditTodo'
import NewTodo from './NewTodo'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    {<HomePage />}
                </Route>
                <Route exact path="/new">
                    {<NewTodo />}
                </Route>
                <Route path="/edit/:id">{<EditTodo />}</Route>
                <Route path="*">{<p>Not found</p>}</Route>
            </Switch>
        </HashRouter>
    )
}

export default App
