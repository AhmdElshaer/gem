

const DoubleCards = ({Img1, Title1, Content1, LinkText1, Link1, Img2, Title2, Content2, LinkText2, Link2}) => {
  return(
    <div className='flex flex-col h-screen gap-8 mb-5 px-3 '>
      <div className='flex flex-row w-full h-1/2 zoom truncate whitespace-normal'>
        <img className='h-full w-1/2 object-cover' src={Img1} alt='gempic'/>
        <div className='h-full w-1/2 bg-stone-100 flex flex-col justify-center items-start px-14'>
          <p className='text-orange-500 font-bold text-2xl mb-3'>{Title1}</p>
          <p className='mb-3 text-slate-400'>{Content1}</p>
          <a href={Link1} className='text-sm underline underline-offset-2 text-slate-500'>{LinkText1}</a>
        </div>
      </div>

      <div className='flex flex-row-reverse w-full h-1/2 zoom truncate whitespace-normal'>
      <img className='h-full w-1/2 object-cover' src={Img2} alt='gempic'/>
        <div className='h-full w-1/2 bg-stone-100 flex flex-col justify-center items-start px-14'>
          <p className='text-orange-500 font-bold text-2xl mb-3'>{Title2}</p>
          <p className='mb-3 text-slate-400'>{Content2}</p>
          <a href={Link2} className='text-sm underline underline-offset-2 text-slate-500'>{LinkText2}</a>
        </div>
      </div>
    </div>
  )
}

export default DoubleCards;