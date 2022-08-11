const Button = ({
  label = '',
  icon = '',
  className = '',
  onClick = ()=> console.log('Button Clicked'),
  type = 'default'
}) => {
  return <button className={`${type === 'default' ? 'bg-[#14353C] text-white' : 'border border-[#14353C] hover:bg-[#14353C] hover:text-white'} py-3 px-7 rounded-lg  ${className}`} onClick={onClick}>{icon && <span className="mr-3">{icon}</span>}{label}</button>
}

export default Button;