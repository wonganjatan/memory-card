import { useState } from 'react'

export default function Header({ score, highestScore }) {
    return (
        <div className='header'>
            <div className="header-left-section">
                <h1>Welcome!</h1>
            </div>
            <div className="header-right-section">
                <p>Score: <span>{score}</span></p>
                <p>Highest Score: <span>{highestScore}</span></p>
            </div>
        </div>
    )    
}