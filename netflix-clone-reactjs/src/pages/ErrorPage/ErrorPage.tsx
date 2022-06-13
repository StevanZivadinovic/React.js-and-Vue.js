import React from 'react'
import IErrorPage from '../../interfaces/errorPage'

const ErrorPage: React.FC<IErrorPage> = (props: IErrorPage) => {
  return (
    <div>
         <h1 className='text-white text-2xl'>{props.code}</h1>
        <h2 className='text-white text-2xl'>{props.message}</h2>

    </div>
  )
}

export default ErrorPage