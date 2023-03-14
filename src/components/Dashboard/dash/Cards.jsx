import React from 'react'
import { CardsData } from '.'
import Card from './Card'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        {CardsData.map((card,id) => {
            return(
                <div className="parentcontainer">
                    <Card
                    icon = {card.icon}
                    
                    title ={card.title}
                    amount = {card.amount}
                    color ={card.color}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards