import OrangeButton from '../../ui/OrangeButton';

const Conservation = ({title, description, image}) => {
  return (
    <div className='conser'>
      <div id="conservation" className="container mx-auto h-full relative px-4 flex flex-col justify-center items-center">
        <div className="text-3xl font-bold mb-8">{title}</div>
        <div className='w-full h-4/5 relative flex flex-col'>
          <div className='w-full h-4/5'>
            <img className="w-full h-full object-cover" src={image} alt='conservation' />
          </div>
          <div className='flex flex-col p-6 gap-3 md:w-1/2 lg:w-1/2 md:absolute lg:absolute md:top-[41%] lg:top-[41%] md:left-[30%] lg:left-[27%] bg-white'>
            <p className='text-orange-500 text-2xl font-bold'>{title}</p>
            <p className='leading-relaxed '>{description}</p>
            <OrangeButton text='LearnMore'/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Conservation;