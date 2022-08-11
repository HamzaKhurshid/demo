import { ReactComponent as Logo } from '../../../logo.svg'

const Header = ({
  bgColor = 'bg-white'
}) => {
  return(
    <div className={`flex justify-between items-center h-24 ${bgColor}`}>
      <div className='w-[1140px] flex justify-between items-center mx-auto'>
      <Logo/>
      <div className='text-base text-[#14353C]'>{ localStorage.getItem('email') && localStorage.getItem('email') } </div>
      </div>
    </div>
  )
}

export default Header;