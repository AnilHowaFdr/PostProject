import React from "react";

const PostProjectItems = ({ data, onclick }) => {
  return (
    <div className=" border-2 border-blue-600 p-3 mb-3">
      <h2 className="text-4xl">{data?.title}</h2>
      <p className="py-3 text-lg">{data?.body}</p>
      <button
        onClick={onclick}
        className="text-white px-5 text-lg py-2 bg-orange-300 border rounded-xl"
      >
        Submit
      </button>
    </div>
  );
};

export default PostProjectItems;
