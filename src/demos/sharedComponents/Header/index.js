import { ReactComponent as Logo } from '../assets/AppFlowsLogo.svg'
import ProfileAvatar from '../assets/ProfileAvatar.png'

const Header = ({
  bgColor = 'bg-white'
}) => {
  return(
    <div className={`flex justify-between items-center h-24 ${bgColor}`}>
      <div className='w-[1140px] flex justify-between items-center mx-auto'>
      <Logo/>
      <div className='text-base text-[#14353C] flex gap-x-[8px]'>
        <div className='mt-[6px] text-sm font-normal'>{ localStorage.getItem('email') ? localStorage.getItem('email') : 'test@gmail.com' }</div>
        <img alt='banner' src={ProfileAvatar} />        
      </div>
      </div>
    </div>
  )
}

export default Header;