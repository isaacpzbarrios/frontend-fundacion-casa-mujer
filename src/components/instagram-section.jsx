import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/instagram-posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-black mb-4">
        Síguenos en Instagram
      </h2>

      <div className="flex items-center mb-4 my-7">
        <div className="bg-black p-6 rounded-full mr-2">
          <FaInstagram className="text-white text-4xl" />
        </div>
        <span className="text-lg font-semibold text-[#E64A4A] hover:text-[#8A4FCD] cursor-pointer">
          <a target="_blank" className="text-2xl" href="https://www.instagram.com/casadelamujerbaq/">
            @casadelamujerbaq
          </a>
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border-none"
          >
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_type === 'VIDEO' ? post.thumbnail_url: post.media_url}
                alt={post.caption}
                className="w-full h-80 object-cover transition duration-300 ease-in-out hover:scale-110 hover:opacity-80"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
