import React, { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { AiOutlineLike } from "react-icons/ai";

const Blogs = () => {
  const [title, setTitle] = useState("");
  const [bodyOfBlog, setBodyOfBlog] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [addedBlog, setAddedBlog] = useState();
  const contextData = React.useContext(UserContext);

  useEffect(() => {
   
    fetch(
      contextData.dataApp !==undefined
        ? `https://dummyjson.com/posts/user/${contextData?.dataApp.id}`
        : `https://dummyjson.com/posts/user/${parseInt(localStorage.getItem("id"))}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setBlogs(data.posts);
      });
  }, []);

  const makeNewBlog = (e) =>{
    e.preventDefault();
    fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: title,
    userId: contextData.dataApp !==undefined ? contextData.dataApp.id : parseInt(localStorage.getItem("id")),
    body:bodyOfBlog,
    reactions:Math.floor(Math.random() * 20),
    token: contextData.dataApp !==undefined ? contextData.dataApp.token : localStorage.getItem('token')
    
  })
})
.then(res => {
  return res.json()})
  .then((addedBlog)=>{
    console.log(addedBlog);
    setBlogs([...blogs,addedBlog]);
    
  });
  e.target.reset()
  }

  return (
    <div className="bg-[#F0F0F0] min-h-[100vh] pt-[10%]">
      <form onSubmit={(e)=>{makeNewBlog(e)}} className="flex flex-col w-[60%] mx-auto  content-center" action="">
        <input
          className="p-[.5rem] rounded mb-[1rem]"
          aria-label="Title"
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        <textarea
          className="p-[.5rem] rounded mb-[1rem]"
          placeholder="Write your post here..."
          name=""
          id=""
          cols="30"
          rows="5"
          onChange={(e)=>{setBodyOfBlog(e.target.value)}}

        ></textarea>
        <button className="mx-auto uppercase rounded my-[1rem] w-[20%] bg-[#487AF7] text-[#F0F0F0] ">
          Post
        </button>
      </form>
      <div className="blogsList ">
        <ul className="overflow-y-auto h-[100%]">
          {blogs &&
            blogs.map((a, i) => {
              return (
                <li
                  className="bg-[#FFFFFF] mb-[1rem] w-[60%] mx-auto p-[1rem]"
                  key={i}
                >
                  <div className="mainContent">
                    <h2 className="text-[1.5rem] w-[70%]">{a.title}</h2>
                  </div>
                  <div className="flex justify-between align-center self-center content-center likes">
                    <div className="">
                      <p className="lineClamp w-[50%]">{a.body}</p>
                    </div>
                    <div className="flex text-center justify-center">
                      <div className="flex justify-center align-center self-center">
                        <AiOutlineLike
                          size={50}
                          className="mr-[.3rem] flex justify-center flex-col"
                        />
                        <p className="text-[1.5rem] flex flex-col justify-center">
                          {a.reactions}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
