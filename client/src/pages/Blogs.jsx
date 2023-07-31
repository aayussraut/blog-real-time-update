import { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";
import { getPost } from "../utils/post";
import sailsIOClient from "sails.io.js";
// import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   getPost()
  //     .then((post) => {
  //       setBlogs(post);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  // const io = SailsIoJs(SocketIoClient);
  // let io;
  // if (socketIOClient.sails) {
  //   io = socketIOClient;
  // } else {
  //   io = sailsIOClient(socketIOClient);
  // }
  // io.sails.connect("http://localhost:1337");

  // // Listen for events to ensure the connection is working
  // io.socket.on("connect", () => {
  //   console.log("WebSocket connected!");
  // });
  // io.sails.url = "http://localhost:1337";

  // const socket = io.connect("http://localhost:1337", {
  //   transports: ["websocket"],
  // });

  // socket.on("newBlogPost", function (msg) {
  //   console.log("Was HEre?");
  //   console.log(msg);
  //   // setBlogs((prevValue) => [msg].concat(prevValue));
  // });
  // }, []);

  //should show all the blogs using BlogCard COmponent
  // const blogs = [
  //   {
  //     title: "Blog 1",
  //     body: "This is blog 1",
  //     author: "Author 1",
  //   },
  //   {
  //     title: "Blog 2",
  //     body: "This is blog 2",
  //     author: "Author 2",
  //   },
  //   {
  //     title: "Blog 3",
  //     body: "This is blog 3",
  //     author: "Author 3",
  //   },
  // ];
  //
  // const socket = io.connect("http://localhost:1337", {
  //   transports: ["websocket"],
  // });

  // socket.on("newBlogPost", (msg) => {
  //   console.log(msg);
  //   // setBlogs((prevValue) => [msg].concat(prevValue));
  // });

  useEffect(() => {
    // Fetch initial blog data using getPost()
    getPost()
      .then((post) => {
        setBlogs(post);
      })
      .catch((error) => {
        console.error(error);
      });

    let io;
    if (socketIOClient.sails) {
      io = socketIOClient;
    } else {
      io = sailsIOClient(socketIOClient);
    }
    // io("http://localhost:1337", { transports: ["websocket"] });

    // const socket = io("http://localhost:1337", {
    //   transports: ["websocket"],
    // });

    // socket.on("connect", () => {
    //   console.log("WebSocket connected!");
    // });

    // socket.on("disconnect", () => {
    //   console.log("WebSocket disconnected!");
    // });

    // socket.on("newBlogPost", (msg) => {
    //   console.log("Received new blog post:", msg);
    //   // Handle the new blog post data, e.g., update the state or fetch updated data
    //   // setBlogs((prevBlogs) => [msg, ...prevBlogs]);
    // });

    // const io = sailsIOClient(socketIOClient);
    // let io = sailsIOClient(socketIOClient);
    // io.sails.url = "http://localhost:1337";

    // const socket = io.connect("http://localhost:1337", {
    //   transports: ["websocket"],
    // });
    io.sails.url = "http://localhost:1337";

    io.socket.on("connect", function onConnect() {
      console.log("This socket is now connected to the Sails server!");
    });

    io.socket.on("newBlogPost", (blog) => {
      console.log("workloads changed", blog);
      setBlogs((prevValue) => {
        console.log(prevValue);
        return prevValue.concat([blog]);
        // return [pre].concat(prevValue);
      });
    });

    // Establish WebSocket connection and set up event listener

    // Clean up event listeners on component unmount
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  // const socket = io("http://localhost:1337", {
  //   transports: ["websocket"],
  // });

  // socket.on("connect", () => {
  //   console.log("WebSocket connected!");
  // });

  // socket.on("disconnect", () => {
  //   console.log("WebSocket disconnected!");
  // });

  // socket.on("newBlogPost", (msg) => {
  //   console.log("Received new blog post:", msg);
  //   // Handle the new blog post data, e.g., update the state or fetch updated data
  //   // setBlogs((prevBlogs) => [msg, ...prevBlogs]);
  // });

  return (
    <div className="bg-slate-900 flex min-h-screen max-h-fit w-screen">
      <div className=" w-screen flex flex-col justify-center items-center pt-5 h-full">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
