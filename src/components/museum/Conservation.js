import OrangeButton from '../../ui/OrangeButton';

const Conservation = ({title, description, image}) => {
  return (
    <div className='conser'>
      <div id="conservation" className="container mx-auto h-full relative px-4 flex flex-col justify-center items-center md:mb-[300px]">
        <div className="md:text-4xl text-3xl font-bold mb-6 md:mb-8 text-stone-600">{title}</div>
        <div className='w-full h-4/5 relative flex flex-col'>
          <div className='w-full h-4/5'>
            <img className="w-full h-full object-cover" src={image} alt='conservation' />
          </div>
          <div className=' flex flex-col p-6 md:p-10 gap-3 md:w-[50%] lg:w-1/2 md:absolute md:top-[50%] lg:top-[75%] md:left-[50%] md:translate-x-[-50%] bg-white shadow-2xl'>
            <p className='text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</p>
            <p className='leading-relaxed text-lg md:text-xl lg:text-2xl text-stone-500 font-base '>{description}</p>
            <OrangeButton text='Learn More'/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Conservation;