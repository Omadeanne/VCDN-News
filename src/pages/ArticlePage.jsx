import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navbar';

import { FaThumbsUp, FaComment, FaBookmark, FaShareAlt } from 'react-icons/fa';

function ArticlePage() {
  const { postId } = useParams(); // Get the postId from the URL
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]); // State for storing user's comments
  const [newComment, setNewComment] = useState(''); // State for new comment
  const [showCommentBox, setShowCommentBox] = useState(false); // State for comment box visibility

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
        const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${postId}`);

        setPost(postResponse.data);
        setUser(userResponse.data);
        setPhoto(photoResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPost();
  }, [postId]);

  // Handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    
    if (newComment.trim() === '') return;

    // Add the new comment to the list
    const newCommentObj = {
      body: newComment,
      name: 'User',
      email: 'user@example.com',
    };

    // Update the comments state
    setComments([...comments, newCommentObj]);
    setNewComment(''); // Reset the input field

    // Optionally, you can hide the comment box after submitting
    // setShowCommentBox(false); // Uncomment this line if you want to hide the comment box after submission
  };

  // Ads for the right side
  const ads = [
    { id: 1, image: 'https://tpc.googlesyndication.com/simgad/14746181467339228025', link: '#' },
    { id: 2, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Hot Topics</h1>
          <hr className="border-gray-400 w-full mb-4" />

          {post && user && photo && (
            <>
              <div className="flex space-x-4 mb-8">
                {/* Left Side: Photo */}
                <img
                  src={photo.thumbnailUrl}
                  alt={post.title}
                  className="w-1/3 h-full object-cover rounded-lg"
                />
                {/* Right Side: Post Content */}
                <div className="flex flex-col justify-center w-2/3">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                  <p className="text-gray-700 mb-4">{post.body}</p>
                  <p className="text-sm text-gray-400">Published: {new Date().toLocaleDateString()}</p>
                  <div className="mt-4">
                    <h2 className="text-sm font-normal text-gray-500">Author: {user.name}</h2>
                    <p className="text-gray-500 text-sm font-normal">Email: {user.email}</p>
                  </div>
                </div>
              </div>

              {/* Like, Comment, Bookmark, Share Section */}
              <div className="flex justify-between items-center my-4">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-700 hover:text-red-500">
                    <FaThumbsUp className="mr-2" /> Like
                  </button>
                  <button
                    className="flex items-center text-gray-700 hover:text-red-500"
                    onClick={() => setShowCommentBox(!showCommentBox)}
                  >
                    <FaComment className="mr-2" /> Comment
                  </button>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-700 hover:text-red-500">
                    <FaBookmark className="mr-2" /> Bookmark
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-red-500">
                    <FaShareAlt className="mr-2" /> Share
                  </button>
                </div>
              </div>

              {/* Comment Section */}
              {showCommentBox && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>

                  {/* Comments List */}
                  <div className="space-y-4 mb-8">
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                        <p className="font-semibold text-gray-900">{comment.name}</p>
                        <p className="text-gray-700">{comment.body}</p>
                        <p className="text-gray-500 text-sm">{comment.email}</p>
                      </div>
                    ))}
                  </div>

                  {/* Adding New Comment */}
                  <form onSubmit={handleCommentSubmit}>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      rows="4"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      Submit Comment
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Side: Ads */}
        <div className="col-span-1 space-y-4">
          {ads.map((ad) => (
            <a href={ad.link} key={ad.id} target="_blank" rel="noopener noreferrer">
              <img src={ad.image} alt={`Ad ${ad.id}`} className="w-full h-60 object-cover rounded-lg shadow-lg my-14" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
