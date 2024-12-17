import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = () => {
      const data = [
        {
          id: 1,
          title: "Choosing the Right Sofa for Your Living Room",
          excerpt:
            "A sofa is the centerpiece of your living room. Learn how to pick the perfect sofa that balances comfort, style, and durability for your space.",
          imageUrl:
            "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          id: 2,
          title: "Top Furniture Trends for 2024",
          excerpt:
            "Stay ahead of the curve with the latest furniture trends that are expected to dominate in 2024. From minimalist designs to multifunctional furniture, find out what’s in style.",
          imageUrl:
            "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "How to Organize Your Home Office Furniture",
          excerpt:
            "A well-organized home office can boost your productivity. Discover how to choose furniture that maximizes space and enhances your work environment.",
          imageUrl:
            "https://images.pexels.com/photos/5546886/pexels-photo-5546886.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          id: 4,
          title: "Sustainable Furniture: The Future of Home Design",
          excerpt:
            "With a growing focus on sustainability, eco-friendly furniture is becoming more popular. Learn about the materials and designs that contribute to a greener home.",
          imageUrl:
            "https://images.pexels.com/photos/7959554/pexels-photo-7959554.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          id: 5,
          title: "How to Mix and Match Furniture Styles",
          excerpt:
            "Creating a cohesive interior design with a mix of furniture styles can be challenging. This guide offers tips on blending modern, vintage, and eclectic pieces.",
          imageUrl:
            "https://images.pexels.com/photos/5644354/pexels-photo-5644354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ];

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-brown-500 px-6 py-[90px] space-y-16 ">
      <h1 className="text-display-3 text-heading-black font-bold text-center mb-8">
        Style Your Home <br /> with Expert Furniture Tips and Ideas
      </h1>

      <div className="max-w-4xl mx-auto">
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex items-center space-x-6"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-64 h-48 object-cover rounded-2xl"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2 mb-12">{post.excerpt}</p>
                  <p
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="underline"
                  >
                    {" "}
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts available</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
