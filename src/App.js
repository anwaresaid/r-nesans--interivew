import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { getPosts } from "./services/apiService";
import Card from "./components/Card";

function App() {
  const [postNumber, setPostNumber] = useState(5);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("posts", posts);
    getPosts(postNumber).then((data) => setPosts(data));
  }, [postNumber]);

  return (
    <div className="App">
      <Navbar setPosts={setPostNumber} />
      <b>Toplam kullanici Sayisi:{postNumber}</b>
      <div className="card-container">
        {posts.map((post) => (
          <Card item={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
