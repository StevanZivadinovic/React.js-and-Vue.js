import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import {AiOutlineLike} from 'react-icons/ai'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const contextData = React.useContext(UserContext);


  useEffect(() => {
    localStorage.setItem('id', contextData.dataApp.id)
    fetch(contextData.dataApp.id ? `https://dummyjson.com/posts/user/${contextData?.dataApp.id}` : `https://dummyjson.com/posts/user/${localStorage.getItem('id')}`)
.then(res => res.json())
.then((data)=>{
  console.log(data.posts);
  setBlogs(data.posts)
});
  }, [])
  
  
  return (
    <div className='bg-[#F0F0F0] h-[100vh] pt-[10%]'>
      <form className='flex flex-col w-[60%] mx-auto  content-center' action="">
        <input className='p-[.5rem] rounded mb-[1rem]' aria-label='Title' placeholder='Title' type="text" name="title" id="title" />
        <textarea className='p-[.5rem] rounded mb-[1rem]' placeholder='Write your post here...' name="" id="" cols="30" rows="5"></textarea>
        <button className='mx-auto uppercase rounded my-[1rem] w-[20%] bg-[#487AF7] text-[#F0F0F0] '>Post</button>
      </form>
      <div className="blogsList">
        <ul>
        {blogs && blogs.map((a,i)=>{
          return (<li className='bg-[#FFFFFF] mb-[1rem] w-[60%] mx-auto p-[1rem]'  key={i}>
            <div className="mainContent">
            <h2 className='text-[1.5rem] w-[70%]'>{a.title}</h2>
            </div>
            <div className="flex justify-between align-center self-center content-center likes">
              <div className="">
            <p className='w-[50%] leading-4 h-[2rem] overflow-hidden '>{`${a.body}`}</p>
              </div>
              <div className="flex text-center">
              <AiOutlineLike size={50} className='mr-[.3rem]'/>
              <p className='text-[1.5rem] flex flex-col justify-center'>{a.reactions}</p>
              </div>
            </div>
          </li>)
        })}
        </ul>
      </div>
    </div>
  )
}

export default Blogs