import { useState } from "react"
import SelectIndustry from "./pages/SelectIndustry"
import SelectPodcast from "./pages/SelectPodcast"

const Onboarding = () => {
  const [ step, setStep ] = useState('selectIndustry')
  return  (step === 'selectIndustry') ? <SelectIndustry step={step} setStep={setStep} /> : <SelectPodcast step={step} setStep={setStep} />
}

export default Onboarding