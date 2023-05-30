import HoverButton from '../../ui/HoverButton';


const Experiences = () => {
  return(
    <div className="container mx-auto md:h-screen lg:h-screen flex flex-col items-center mt-5 relative px-2 truncate">
      <p className="text-3xl font-bold mb-8">GEM Experiences</p>
      <p className="mb-8">Choose The Memories You'll Taking Home</p>
      <div className="h-2/3	w-full flex rounded flex-col md:flex-row lg:flex-row justify-between gap-6">

        <div className='w-full md:w-1/2 lg:w-1/2 h-48 md:h-full lg:h-full zoom truncate relative rounded md:rounded-l-lg lg:rounded-l-lg ex-hover'>
          <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_312936443.png')} alt='experiences'/>
          <div className='absolute left-5 bottom-6 lg:hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>The hidden gems of land of Egypt!</p>
          </div>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 md:h-full lg:h-full flex flex-col gap-6'>

          <div className='zoom truncate h-48 md:h-1/2 lg:h-1/2 w-full rounded md:rounded-tr-lg lg:rounded-tr-lg relative ex-hover'>
            <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_701637964.png')} alt='experiences'/>
            <div className='absolute left-5 bottom-6 lg:hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>The different cuisines of GEM</p>
          </div>
            </div>

          <div className='zoom truncate h-48 md:h-1/2 lg:h-1/2 w-full rounded md:rounded-tr-lg lg:rounded-tr-lg relative ex-hover'>
            <img className='h-full w-full object-cover' src={require('../../imgs/shutterstock_796346002.png')} alt='experiences'/>
            <div className='absolute left-5 bottom-6 lg:hidden content'>
            <p className='text-orange-600 font-bold'>Experiences</p>
            <p className='font-bold text-white'>Working next to 7000 years of history</p>
          </div>
            </div>
        </div>
      </div>
      <div className="mt-8 mb-6 text-xs font-bold">
        <HoverButton text="Resturants and Cafes"/>
      </div>
    </div>
  )
}

export default Experiences;