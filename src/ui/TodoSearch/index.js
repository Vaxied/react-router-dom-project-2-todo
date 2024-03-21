import React from 'react'
import './TodoSearch.css'
import {
    useHistory,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'
// import { useSearchParams } from 'react-router-dom'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    // const [searchParams, setSearchParams] = useSearchParams()
    // const paramsValue = searchParams.get('search')
    const history = useHistory()
    const location = useLocation()
    const onSearchValueChange = (event) => {
        const params = new URLSearchParams({ search: event.target.value })
        setSearchValue(event.target.value)
        // setSearchParams({ search: event.target.value })
        insertParams(event, params)
        console.log('changed')
    }

    const insertParams = (event, params) => {
        history.replace({
            pathname: location.pathname,
            search: params.toString(),
        })
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Onion"
            value={searchValue || ''}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export { TodoSearch }
