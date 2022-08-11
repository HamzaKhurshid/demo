import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button 
        onClick={() => {
          localStorage.setItem('user_token', 'admin123');
          navigate('/podcast/featured-podcasts');
        }}
      >
        login into the app
      </button>
    </div>
  )
};

export default Login;