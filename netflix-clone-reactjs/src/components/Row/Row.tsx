import React, { FC } from 'react'

interface IRow{
    title:string,
    requestURL:string
}

const Row:FC<IRow> = () => {
  return (
    <div>Row</div>
  )
}

export default Row