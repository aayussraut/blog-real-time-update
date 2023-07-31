import { useState } from "react";
import { createPost } from "../utils/post";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    createPost(blog).then((res) => {
      console.log(res);
      navigate("/blogs");
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-800 p-16 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={blog.title}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={blog.content}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
