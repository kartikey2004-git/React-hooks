import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
    <ul className="space-y-4 list-disc">
      {data.map((post) => (
        <li
          key={post.id}
          className="p-4  bg-white rounded-2xl shadow hover:shadow-lg transition-all border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default DataFetcher;

// we want to fetch it once when component is loaded
