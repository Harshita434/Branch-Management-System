import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div style={{ padding: 40 }}>
            <h2>404 — page not found</h2>
            <p>
                <Link to="/">Go home</Link>
            </p>
        </div>
    )
}