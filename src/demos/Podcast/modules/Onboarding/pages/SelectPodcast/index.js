import { Button, Header } from "../../../../../sharedComponents"
import bgImg from '../../assets/bgImg.png'
import casefile from '../../assets/casefile.png'
import businesswar from '../../assets/businesswar.png'
import truecrime from '../../assets/truecrime.png'
import { useState } from "react"

const SelectPodcast = () => {
  const [ selectedPodcast, setSelectedPodcast ] = useState({
    1: false, 2: false, 3: false
  })
  const podcasts = [
    {
      id: 1,
      title: 'Casefile',
      desc: `Fact is scarier than fiction. Subscribe to Casefile Premium to receive ad-free episodes released one week early, along with access to bonus Q&A's, our exclusive show 'Behind the Files', and more.`,
      img: casefile
    },
    {
      id: 2,
      title: 'Canadian True Crime',
      desc: `Explore some of the most heinous, controversial, heart-breaking and thought-provoking true crime cases in Canadian history.`,
      img: truecrime
    },
    {
      id: 3,
      title: 'Business Wars',
      desc: `Busines is war. Sometimes the prize is your wallet or your attention. Sometimes, it’s just the fun of beating the other guy.`,
      img: businesswar
    },
  ]
  return(
    <>
    <Header bgColor="bg-[#E7F4F2]" />
    <div className="h-[450px] bg-[#E7F4F2] flex justify-between items-center">
      <div className="w-[1140px] mx-auto flex justify-between items-center">
      <div className="text-[#2F3941] text-6xl font-bold w-[600px] leading-[60px]">People are listening to these podcasts</div>
      <img src={bgImg} alt={''} />
      </div>
    </div>
    <div className="w-[1140px] flex flex-col justify-center mx-auto">
      <div className=" text-2xl font-semibold mt-14 mb-9">Select the ones you would like to subscribe to</div>
      <div className="flex flex-wrap justify-between mb-14">
        {
          podcasts.map(({ id, title, desc, img })=>{
            return (
              <div key={id} className="w-[365px] h-[484px] border p-2 rounded-lg cursor-pointer" onClick={()=> setSelectedPodcast({...selectedPodcast, [id]: !selectedPodcast[id]})}>
                <div className='relative'>
                  <img src={img} alt={title} />
                  <input type={'checkbox'} className='absolute top-2 left-2 w-[23px] h-[23px] cursor-pointer accent-[#E7F4F2]' checked={ selectedPodcast[id] }/>
                </div>
                <div className=" text-2xl font-semibold mt-6 mb-2">{title}</div>
                <div className=" text-base text-[#68737D] mb-5">{desc}</div>
              </div>
            )
          })
        }
      </div>
      <Button label="Next" className=" w-[10%] mx-auto mb-24" />
    </div>
    </>
  )
}

export default SelectPodcast