import Header from "../../../../../sharedComponents/Header"
import bgImg from '../../assets/bgImg.png'
import casefile from '../../assets/casefile.png'
import businesswar from '../../assets/businesswar.png'
import truecrime from '../../assets/truecrime.png'

const SelectPodcast = () => {
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
      id: 2,
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
      <div className="text-[#2F3941] text-6xl font-bold w-[540px]">People are listening to these podcasts</div>
      <img src={bgImg} />
      </div>
    </div>
    <div className="w-[1140px] flex flex-col justify-center mx-auto">
      <div className=" text-2xl font-semibold mt-14 mb-9">Select the ones you would like to subscribe to</div>
      <div className="flex flex-wrap justify-between">
        {
          podcasts.map(({ id, title, desc, img })=>{
            return (
              <div className="w-[365px] h-[484px] border p-2 rounded-lg">
                <img src={img} />
                <div className=" text-2xl font-semibold mt-6 mb-2">{title}</div>
                <div className=" text-base text-[#68737D] mb-5">{desc}</div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default SelectPodcast