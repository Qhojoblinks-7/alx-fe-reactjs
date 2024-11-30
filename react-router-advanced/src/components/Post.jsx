// Post.jsx
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  return <div>Post ID: {postId}</div>;
};
