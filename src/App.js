import React  from "react";
import { Route, Routes, Link } from "react-router-dom";
import Album from "./components/Album";
import Comments from "./components/Comments";
import Photo from "./components/Photo";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Users from "./components/Users";
import Data from "./components/Data";

export default function App() {
                     
  return (
    <div className="flex">
      <div className="flex flex-col  border w-[200px] h-screen">
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/users">
          Users &#8594;
        </Link>
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/posts">
          Posts &#8594;
        </Link>
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/totos">
          Todos &#8594;
        </Link>
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/photo">
          Photo &#8594;
        </Link>
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/album">
          Album &#8594;
        </Link>
        <Link className="border px-4 py-3 hover:bg-[#999999]" to="/comments">
          Comments &#8594;
        </Link>
      </div>
      

      <div>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="totos" element={<Todos  />} />
          <Route path="photo" element={<Photo />} />
          <Route path="album" element={<Album />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </div>
    </div>
  );
}
