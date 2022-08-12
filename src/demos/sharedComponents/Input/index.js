export const Input = ({
  id = '',
  name = '',
  label = '',
  type = 'text',
  className = '',
  placeholder = '',
  value = '',
  onChange = ()=> console.log('Onchange')
}) => {
  return(
    <div className="mb-4">
      {label && <label htmlFor={id}> {label} </label> }
      <input type={type} id={id} name={name} value={value} onChange={onChange} className={`px-4 py-3 border border-[#68737D] rounded-lg focus:outline-[#68737d] ${className}`} placeholder={placeholder}></input>
    </div>
  )
};