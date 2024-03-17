import React from 'react'

function useStorageListener(synchronize) {
    const [storageChange, setStorageChange] = React.useState(false)

    React.useEffect(() => {
        const onChange = (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en los To Dos')
                setStorageChange(true)
            }
        }
        window.addEventListener('storage', onChange)

        return () => {
            window.removeEventListener('storage', onChange)
        }
    }, [])

    const toggleDisplay = () => {
        setStorageChange(false)
        synchronize()
    }
    return {
        display: storageChange,
        toggleDisplay,
    }
}

export { useStorageListener }
