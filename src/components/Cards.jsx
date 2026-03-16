import { useEffect, useState } from 'react'
import Card from './Card'

export default function Cards({ score, setScore, highestScore, setHighestScore}) {
    const [cards, setCards] = useState([])
    const [clickedCards, setClickedCards] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
            const fetchCards = []
            const pokemonId = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            
            for (let id of pokemonId) {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await res.json()
                
                fetchCards.push({
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default
                })
            }

            setCards(fetchCards)
        }

        fetchPokemon()
    }, [])

    return (
        <div className='cards-container'>
            {cards.map(card => (
                <Card 
                    key={card.id}
                    card={card}
                    score={score}
                    setScore={setScore}
                    highestScore={highestScore}
                    setHighestScore={setHighestScore}
                    clickedCards={clickedCards}
                    setClickedCards={setClickedCards}/>
            ))}
        </div>
    )
}