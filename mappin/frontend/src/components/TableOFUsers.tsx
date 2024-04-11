import React from 'react'

const TableOFUsers = () => {
    const users=['asfadfdsf','sdfsdfsd','sdfsdfsd']
  return (
    <div className='tableOfUsers'>
        <ul>
            <div className="header">
                <p className="">User</p>
                <p className="">Number of points</p>
            </div>
                
            
            {
                users.map(user=>{
                    return (
                        <li>
                            <div className="">{user}</div>
                            <div className="">30</div>
                        </li>

                    )
                })
            }
        </ul>
    </div>
  )
}

export default TableOFUsers