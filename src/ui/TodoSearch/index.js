import React from 'react'
import './TodoSearch.css'
import { useSearchParams } from 'react-router-dom'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const paramsValue = searchParams.get('search')
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
        setSearchParams({ search: event.target.value })
        console.log('changed')
    }
    let text = searchValue
    if (paramsValue) {
        text = paramsValue
    }
    console.log('this is text', text)

    return (
        <input
            className="TodoSearch"
            placeholder="Onion"
            value={text || ''}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export { TodoSearch }
