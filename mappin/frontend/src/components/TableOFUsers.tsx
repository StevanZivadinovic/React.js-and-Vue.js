import React, { useEffect, useState } from 'react'
import { getPinsPerUser } from '../functions/userTableFunctions.ts'
import { Link } from 'react-router-dom'

interface pinsObjectType{
_id:string,
pinsCount:number
}
const TableOFUsers = () => {
const [usersPins, setUsersPins]=useState<pinsObjectType[]>([])
    useEffect(() => {
         getPinsPerUser(setUsersPins)
    }, [])
  return (
    <div className='tableOfUsers'>
        <div className="backArrow">
        <Link className="tableLink" to='/'><img src="./img/arrow_left.png" alt="" /></Link>
            
        </div>
        <ul>
            <div className="header">
                <p className="">User</p>
                <p className="">Number of points</p>
            </div>
            {
                usersPins.map((user,i)=>{
                    return (
                        <li key={i}>
                            <div className="">{user._id}</div>
                            <div className="">{user.pinsCount}</div>
                        </li>

                    )
                })
            }
        </ul>
    </div>
  )
}

export default TableOFUsers