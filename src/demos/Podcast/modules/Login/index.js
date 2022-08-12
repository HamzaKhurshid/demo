import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { ReactComponent as Mic } from './assets/mic.svg'
import { ReactComponent as Logo } from '../../../../logo.svg'

const Login = () => {
  return(
    <div className="bg-[#E7F4F2] h-screen flex flex-col items-center pt-14">
      <Logo/>
      <div className="w-[680px] h-[600px] bg-white flex flex-col justify-center items-center mt-14">
        <Mic/>
        <div className='text-3xl font-bold my-12 '>The Podcast App</div>
        <Input placeholder='Enter email address' className='w-[550px]' />
        <Input placeholder='Enter password' className='w-[550px]' />
        <Button label='Get Started' className='w-[550px]' onClick={()=> window.location.href = '/podcast/new'} />
      </div>
    </div>
  )
}

export default Login;