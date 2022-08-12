import { Button, Input } from '../../../sharedComponents';
import { ReactComponent as Mic } from './assets/mic.svg'
import { ReactComponent as AppFlowsLogo } from '../../../sharedComponents/assets/AppFlowsLogo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [ user, setUser ] = useState({ email: '', password: '', error: '' })
  const navigate = useNavigate()
  const handleSubmit = () => {
    const { email, password } = user
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(email && password)){
      setUser({...user, error: 'Email or Password cannot be empty'})
    }else if(!(email.match(validEmail))){
      setUser({...user, error: 'Invalid email or password'})
    }else{
      localStorage.setItem('email', user.email)
      navigate('/podcast/new')
    }
  }
  return(
    <div className="bg-[#E7F4F2] h-screen flex flex-col items-center pt-14">
      <AppFlowsLogo />
      <div className="w-[680px] h-[600px] bg-white flex flex-col justify-center items-center mt-14">
        <Mic/>
        <div className='text-3xl font-bold my-12 '>The Podcast App</div>
        { user.error && <div className='px-4 py-2 bg-red-100 text-red-800 text-sm mb-4 rounded'>{user.error}</div> }
        <Input value={user.email} onChange={(e) => setUser({...user, email: e.target.value, error: ''})} placeholder='Enter email address' className='w-[550px]' />
        <Input type='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value, error: ''})} placeholder='Enter password' className='w-[550px]' />
        <Button label='Get Started' className='w-[550px]' onClick={()=> handleSubmit()} />
      </div>
    </div>
  )
}

export default Login;