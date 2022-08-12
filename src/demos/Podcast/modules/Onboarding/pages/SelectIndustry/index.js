import { useState } from "react"
import { Button, Header } from "../../../../../sharedComponents"
import { Industries } from "../../data"

const SelectIndustry = (props) => {
  const { step, setStep } = props
  const [ cat, setCat ] = useState({})
  return(
    <>
    <Header/>
    <div className="flex flex-col justify-center items-center pt-14">
      <div className=" text-xl text-[#68737D]">Thank you for signing up</div>
      <div className=" text-4xl font-semibold my-4">What do you like listening to?</div>
      <div className=" text-xl text-[#68737D]">This will help us give you recommendations you’ll enjoy</div>
      <div className=" my-16 flex justify-center items-center flex-wrap w-[900px]">
        {
          Industries.map(({ id, label, value, icon })=> {
            const isSelected = cat[value]
            return <div key={id} onClick={() => setCat({...cat, [value]: !cat[value] }) } className={` p-4 border border-[#C2D8D7] rounded cursor-pointer w-60 flex items-center mb-5 mx-2 ${isSelected ? 'bg-[#DEECED]' : ''}`}> <span className=" mr-3">{icon}</span>{label}</div>
          })
        }
      </div>
      <Button label="Next" className="w-60 py-3 text-lg" onClick={()=> setStep('selectPodcast')} />
    </div>
    </>
  )
}

export default SelectIndustry