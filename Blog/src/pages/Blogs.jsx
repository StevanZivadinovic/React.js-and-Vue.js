import React, { useEffect } from 'react'
import { UserContext } from '../context/UserContext';

const Blogs = () => {
  const contextData = React.useContext(UserContext);

  useEffect(() => {
    localStorage.setItem('id', contextData.dataApp.id)
    fetch(contextData.dataApp.id ? `https://dummyjson.com/posts/user/${contextData?.dataApp.id}` : `https://dummyjson.com/posts/user/${localStorage.getItem('id')}`)
.then(res => res.json())
.then((data)=>{
  console.log(data.posts)
});
  }, [])
  
  
  return (
    <div className='bg-[#F0F0F0] h-[100vh]'>
      <form className='flex flex-col w-[60%] mx-auto text-center content-center' action="">
        <input className='p-[.5rem] rounded mb-[1rem]' aria-label='Title' placeholder='Title' type="text" name="title" id="title" />
        <textarea className='p-[.5rem] rounded mb-[1rem]' placeholder='Write your post here...' name="" id="" cols="30" rows="5"></textarea>
        <button className='text-center uppercase rounded my-[1rem] w-[20%] bg-[#487AF7] text-[#F0F0F0] '>Post</button>
      </form>
    </div>
  )
}

export default Blogs