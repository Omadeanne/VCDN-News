import { useEffect, useState, useContext } from 'react'; 
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaComment } from 'react-icons/fa';
import AuthContext from '../component/AuthContext';

function ArticlePage() {
  const { postId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [photo] = useState(location.state?.imageUrl || '');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const { isAuthenticated, setRedirectAfterLogin, user: authUser } = useContext(AuthContext);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const sectionTitle = location.state?.sectionTitle || 'Hot Topics';

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

        setPost(postResponse.data);
        setUser(userResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleCommentClick = () => {
    if (!isAuthenticated) {
      setRedirectAfterLogin(location.pathname);
      setShowAuthModal(true);
    } else {
      setShowCommentBox(!showCommentBox);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() === '') return;

    const newCommentObj = {
      postId: postId,
      body: newComment,
      name: authUser?.name || 'User', 
      email: authUser?.email || 'user@example.com', 
      id: comments.length + 1, 
    };



    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const closeModal = () => {
    setShowAuthModal(false);
  };

  // Ads for the right side
  const ads = [
    { id: 1, image: 'https://tpc.googlesyndication.com/simgad/14746181467339228025', link: '#' },
    { id: 2, image: 'https://tpc.googlesyndication.com/simgad/17704820894939281964', link: '#' },
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="col-span-2">
        <h1 className="text-3xl font-bold text-red-500 mb-4">{sectionTitle}</h1>
        <hr className="border-gray-400 w-full mb-4" />

        {post && user && (
          <>
            <div className="flex space-x-4 mb-8">
              <img
                src={photo}
                alt={post.title}
                className="w-1/3 h-full object-cover rounded-lg"
              />
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

            {/* Comment Section */}
            <div className="flex justify-between items-center my-4">
              <div className="flex space-x-4">
                <button
                  className="flex items-center text-gray-700 hover:text-red-500"
                  onClick={handleCommentClick}
                >
                  {!isAuthenticated && <div className='flex items-center'><FaComment className="mr-2" /> Comment </div>}
                </button>
              </div>
            </div>

            {isAuthenticated && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>

                <div className="space-y-4 mb-8">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow">
                      <p className="font-semibold text-gray-900">{comment.name}</p>
                      <p className="text-gray-700">{comment.body}</p>
                      <p className="text-gray-500 text-sm">{comment.email}</p>
                    </div>
                  ))}
                </div>

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

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign In or Register</h2>
            <p className="mb-4">You must sign in or register to leave a comment.</p>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/sign-in')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Register
              </button>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
