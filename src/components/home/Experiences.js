import HoverButton from '../../ui/HoverButton';


const Experiences = () => {
  return(
    <div className="h-screen flex flex-col items-center mt-10 relative px-2 truncate">
      <p className="text-4xl font-bold mb-8">GEM Experiences</p>
      <p className="mb-8">Choose The Memories You'll Taking Home</p>
      <div className="h-2/3	w-full flex rounded flex justify-between gap-8">
        <div className='w-1/2 h-full zoom truncate relative rounded-l-lg ex-hover'>
          <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_312936443.png')} alt='experiences'/>
          <div className='absolute left-5 bottom-6 hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>The hidden gems of land of Egypt!</p>
          </div>
        </div>
        <div className='w-1/2 h-full flex flex-col gap-8'>
          <div className='zoom truncate h-1/2 w-full rounded-tr-lg relative ex-hover'>
            <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_701637964.png')} alt='experiences'/>
            <div className='absolute left-5 bottom-6 hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>The different cuisines of GEM</p>
          </div>
            </div>
          <div className='zoom truncate h-1/2 w-full rounded-br-lg relative ex-hover'>
            <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_796346002.png')} alt='experiences'/>
            <div className='absolute left-5 bottom-6 hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>Working next to 7000 years of history</p>
          </div>
            </div>
        </div>
      </div>
      <div className="mt-4 text-sm ">
        <HoverButton text="Resturants and Cafes"/>
      </div>
    </div>
  )
}

export default Experiences;