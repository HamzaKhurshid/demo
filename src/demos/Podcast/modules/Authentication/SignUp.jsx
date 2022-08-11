import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button 
        onClick={() => {
          localStorage.setItem('user_token', 'admin123');
          navigate('/podcast/dashboard');
        }}
      >
        Signup
      </button>
    </div>
  )
};

export default SignUp;