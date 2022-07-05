import React from 'react'
import { StyledCard } from '../styles/Card.styled'

export const Card = ({item:{id, title, body, image}}) => {
  return (
      <div>
        <StyledCard>
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./../assets/img/${image}`}></img>
        </div>
    </StyledCard>
    </div>
  )
}
