import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(
        reducer,
        initialState({ initialValue })
    )

    const { error, synchronizedItem, loading, item } = state
    // ACTION CREATORS

    const onError = (error) =>
        dispatch({ type: actionTypes.error, payload: error })
    const onSuccess = (item) =>
        dispatch({ type: actionTypes.success, payload: item })
    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
    const onSynchronize = () => dispatch({ type: actionTypes.synchronize })

    React.useEffect(() => {
        setTimeout(() => {
            console.log('localstorage useffect')
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                onSuccess(parsedItem)
            } catch (error) {
                onError(error)
            }
        }, 2000)
    }, [synchronizedItem])

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            onSave(newItem)
        } catch (error) {
            onError(error)
        }
    }

    const synchronizeItem = () => {
        onSynchronize()
    }

    return {
        item,
        saveItem,
        loading,
        error,
        synchronizeItem,
    }
}
const initialState = ({ initialValue }) => ({
    error: false,
    synchronizedItem: true,
    loading: true,
    item: initialValue,
})

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    synchronize: 'SYNCHRONYZE',
}

const reducer = (state, action) => {
    // actionTypes.success and [actionTypes.success] are not the same. 'SUCCESS' != ['SUCCESS']
    // console.log(action.type, [actionTypes.success])
    switch (action.type) {
        case actionTypes.error: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case actionTypes.success: {
            return {
                ...state,
                error: false,
                loading: false,
                synchronizedItem: true,
                item: action.payload,
            }
        }
        case actionTypes.save: {
            return {
                ...state,
                item: action.payload,
            }
        }
        case actionTypes.synchronize: {
            return {
                ...state,
                synchronizedItem: false,
                loading: true,
            }
        }
        default: {
            return { ...state }
        }
    }
}

export { useLocalStorage }
