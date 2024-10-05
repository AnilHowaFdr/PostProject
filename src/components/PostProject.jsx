import { useState, useEffect } from "react";
import PostProjectItems from "./PostProjectItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostProject = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const post = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);
  const handleSubmit = () => toast("Post added successfully!");
  return (
    <section>
      <ToastContainer />
      <div className="container pt-10">
        <h1 className="text-center text-5xl font-bold pb-10">
          Information about Post
        </h1>
        <div>
          {postList.map((item) => (
            <PostProjectItems
              key={item.key}
              data={item}
              onclick={handleSubmit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostProject;
