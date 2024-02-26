import React from 'react'
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ synchronize }) {
    const { display, toggleDisplay } = useStorageListener(synchronize)
    if (display) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p className="ChangeAlert-msg">
                        Hubo cambios en otra pestaña o ventana
                    </p>
                    <p>Quieres actualizar tus ToDo's?</p>
                    <button
                        onClick={() => toggleDisplay(false)}
                        className="ChangeAlert-reload-btn"
                    >
                        Recargar
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export { ChangeAlert }
