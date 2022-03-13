import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrvaComponenta() {
let navigator = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigator('/treca')}}>PrvaComponenta</button>
        </div>
  )
}
