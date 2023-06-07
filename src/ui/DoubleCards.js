
// {Img1, Title1, Content1, LinkText1, Link1, Img2, Title2, Content2, LinkText2, Link2}

const DoubleCards = (props) => {

  return(
    <div className='flex flex-col gap-8 mb-5 px-3 ' style={{height: 'calc(100vh * 2)'}}>
      {props.props.map((item) => (
      <div key={item.id} className={`flex flex-col ${item.image_direction === 'left' ? 'md:flex-row lg:flex-row' : 'md:flex-row-reverse lg:flex-row-reverse'} w-full md:h-1/2 lg:h-1/2 truncate whitespace-normal`}>
        <div className="zoom md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 truncate">
          <img className='md:h-full lg:h-full w-full object-cover' src={item.home_image} alt='gempic'/>
        </div>
        <div className='md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 bg-stone-100 flex flex-col justify-center items-start py-4 px-8'>
          <p className='text-orange-500 font-bold text-xl mb-3'>{item.title}</p>
          <p className='mb-3 text-slate-400 text-sm md:text-md lg:text-md'>{item.details}</p>
          <a href='#museum' className='hover:text-orange-500 text-xs md:text-sm lg:text-sm underline underline-offset-2 text-slate-500'>{item.learn_more_txt}</a>
        </div>
      </div>
      ))}
    </div>
  )
}

export default DoubleCards;