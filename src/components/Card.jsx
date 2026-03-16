import { useState } from 'react'

export default function Card({ card, score, setScore, highestScore, setHighestScore, clickedCards, setClickedCards, shuffleCards }) {
    function handleClick() {
        if (clickedCards.includes(card.id)) {
            setHighestScore(prev => Math.max(prev, score))
            setScore(0)
            setClickedCards([])
        } else {
            setScore(prev => prev + 1)
            setClickedCards(prev => [...prev, card.id])
        }

        shuffleCards()
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={card.image} alt={card.id} />
            <p>{card.name}</p>
        </div>
    )
}