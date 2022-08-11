import { useNavigate } from 'react-router-dom';

const FeaturedPodcasts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>FeaturedPodcasts</h1>
      <button 
        onClick={() => {
          localStorage.removeItem('user_token');
          navigate('/podcast/auth/login');
        }}
      >
        Logout from the app
      </button>
    </div>
  );
};

export default FeaturedPodcasts;