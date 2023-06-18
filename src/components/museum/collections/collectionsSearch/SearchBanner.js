import { Suspense, useRef } from 'react';
import { Await, useSearchParams } from 'react-router-dom';

const SearchBanner = ({catFilter, ThemesFilter, PeriodsFilter, MatFilter, ProvFilter, galFilter}) => {

  let [searchParams, setSearchParams] = useSearchParams();
  let categoryRef = useRef();
  let periodRef = useRef();
  let materialRef = useRef();
  let provRef = useRef();
  let galleryRef = useRef();
  let themeRef = useRef();
  let keywordRef = useRef();

  console.log(searchParams);
  
  const searchHandler = (e) => {
      let newSearchParams = {
        'keyword': `${keywordRef.current.value}`,
        'category_id': `${categoryRef.current.value}`,
        'period_id': `${periodRef.current.value}`,
        'material_id': `${materialRef.current.value}`,
        'provenance_id': `${provRef.current.value}`,
        'gallery_id': `${galleryRef.current.value}`,
        'theme_id': `${themeRef.current.value}`,
      };
      e.preventDefault();
      console.log(newSearchParams);
      setSearchParams(() => {
        return new URLSearchParams({
          ...newSearchParams
        });
      })
    }

    const clearHandler = (e) => {
      e.preventDefault();
      keywordRef.current.value = '';
      categoryRef.current.value = '';
      periodRef.current.value = '';
      materialRef.current.value = '';
      provRef.current.value = '';
      galleryRef.current.value = '';
      themeRef.current.value = '';
    }

  return(
    <div className="flex flex-col w-full h-[140vh] md:h-[90vh] items-center relative text-white">
      <img className='h-full object-cover' src={require('../../../../imgs/search-banner1.png')} alt="search banner"/>


      <div className='absolute top-[5%] md:top-[7%] w-[90%] container mx-auto flex flex-col justify-center items-center px-4'>

        <p className="font-bold text-2xl mb-6 md:mb-14 lg:mb-20">Collections Search</p>
        
          <form className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 font-bold text-white'>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={catFilter}>
                <label className='' htmlFor='category' >Category</label>
                <select ref={categoryRef} id='category' name='category' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300' value=''>Select</option>
                  {catFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='bg-stone-500 text-sm text-white'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={PeriodsFilter}>
                <label className='' htmlFor='Period' >Period</label>
                <select ref={periodRef} id='Period' name='Period' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300' value=''>Select</option>
                  {PeriodsFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='bg-stone-500 text-sm text-white'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={MatFilter}>
                <label className='' htmlFor='Material' >Material</label>
                <select ref={materialRef} id='Material' name='Material' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300' value=''>Select</option>
                  {MatFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='bg-stone-500 text-sm text-white'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={ProvFilter}>
                <label className='' htmlFor='Provenance' >Provenance</label>
                <select ref={provRef} id='Provenance' name='Provenance' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300' value=''>Select</option>
                  {ProvFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='bg-stone-500 text-sm text-white'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={galFilter}>
                <label className='' htmlFor='category' >Gallery</label>
                <select ref={galleryRef} id='Gallery' name='Gallery' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300' value=''>Select</option>
                  {galFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='text-sm text-white bg-stone-500'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={ThemesFilter}>
                <label className='' htmlFor='Theme' >Theme</label>
                <select ref={themeRef} id='Theme' name='Theme' className='rounded text-stone-500 text-sm bg-transparent border-[2px] '>
                  <option className='bg-stone-300 text-stone-500' value=''>Select</option>
                  {ThemesFilter.map((item)=>(
                    <option key={item?.id} value={item?.id} className='text-sm text-white bg-stone-500'>{item?.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>
            

            <div className='grid grid-cols-1 h-10 md:grid-cols-2 lg:grid-cols-3 md:col-span-2 lg:col-span-3 gap-5 w-full text-sm font-semibold mt-4 lg:mt-8'>
              <input ref={keywordRef} type='text' placeholder='KeyWord' className='col-span-2 md:col-span-1 lg:col-span-2 text-stone-500 text-sm rounded bg-transparent border-[2px]' />
              <p className='flex w-full justify-center items-center gap-5 md:gap-4 h-[40px]'>
                <button onClick={searchHandler} className='bg-orange-500 rounded h-full w-[50%]'>Search</button>
                <button onClick={clearHandler} className='bg-transparent rounded h-full w-[50%] border-[1px] '>Clear</button>
              </p>
            </div>
          </form>

      </div>
    </div>
  )
}

export default SearchBanner;