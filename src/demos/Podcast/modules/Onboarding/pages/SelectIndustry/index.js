import { Button, Header } from "../../../../../sharedComponents"
import { Industries } from "../../data"

const SelectIndustry = () => {
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
            return <div key={id} className=" p-4 border border-[#68737D] rounded cursor-pointer w-60 flex items-center mb-5 mx-2"> <span className=" mr-3">{icon}</span>{label}</div>
          })
        }
      </div>
      <Button label="Next" className="w-60 py-3 text-lg" />
    </div>
    </>
  )
}

export default SelectIndustry