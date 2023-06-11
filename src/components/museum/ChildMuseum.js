import HoverButton from '../../ui/HoverButton';

const ChildMuseum = ({title, description, left, right}) => {
  return (
  <div id="child_museum" className="container mx-auto lg:my-10 flex flex-col items-center justify-center relative px-4 childMuseum">
    <p className="text-3xl font-bold mb-8">{title}</p>
    <p className="mb-8">{description}</p>
    <div className="h-screen	w-full flex rounded flex-col md:flex-row lg:flex-row justify-between gap-6">

      <div className='experience-left w-full md:w-1/2 lg:w-1/2 h-48 md:h-full lg:h-full zoom truncate whitespace-normal relative rounded md:rounded-l-lg lg:rounded-l-lg ex-hover'>
        <div className="bg-black absolute w-full h-full opacity-30 truncate"></div>
        <img className='h-full w-full object-cover' src={left.image} alt='experiences'/>
        <div className='absolute left-3 bottom-6 px-2'>
          <p className='text-orange-600 font-bold'>{left.title}</p>
          <p className='font-semibold text-sm text-white'>{left.details}</p>
        </div>
      </div>

      <div className='experience-right w-full md:w-1/2 lg:w-1/2 md:h-full lg:h-full flex flex-col gap-6'>
        {right.map((item) => (
          <div key={item.id} className='zoom whitespace-normal truncate h-48 md:h-1/2 lg:h-1/2 w-full rounded md:rounded-tr-lg lg:rounded-tr-lg relative ex-hover'>
            <div className="bg-black absolute w-full h-full opacity-30 truncate"></div>
            <img className='h-full w-full object-cover' src={item.image} alt='experiences'/>
            <div className='absolute left-3 bottom-6'>
              <p className='text-orange-600 font-bold'>{item.title}</p>
              <p className='font-semibold text-sm text-white'>{item.details}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-8 mb-6 text-xs font-bold">
      <HoverButton text="Learn More"/>
    </div>
  </div>
  )
}

export default ChildMuseum;