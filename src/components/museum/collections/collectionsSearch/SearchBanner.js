import { useEffect, useState } from 'react';
import { Filter } from '../../../../config/Config';
// import { Await } from 'react-router-dom';


const SearchBanner = () => {
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [themesFilter, setThemesFilter] = useState([]);
  const [periodsFilter, setPeriodsFilter] = useState([]);
  const [galleriesFilter, setGalleriesFilter] = useState([]);
  const [materialsFilter, setMaterialsFilter] = useState([]);
  const [provsFilter, setProvsFilter] = useState([]);

  useEffect(()=>{
    
    const CategoryFilter = () => {
      return Filter('categories')
    }
    setCategoriesFilter(CategoryFilter);

    const ThemesFilter = () => {
      return Filter('themes')
    }
    setThemesFilter(ThemesFilter);

    const PeriodsFilter = () => {
      return Filter('periods')
    }
    setPeriodsFilter(PeriodsFilter)

    const GalleriesFilter = () => {
      return Filter('galleries')
    }
    setGalleriesFilter(GalleriesFilter);

    const MaterialsFilter = () => {
      return Filter('materials')
    }
    setMaterialsFilter(MaterialsFilter);

    const ProvsFilter = () => {
      return Filter('provenances')
    }
    setProvsFilter(ProvsFilter);

  },[])

  console.log(categoriesFilter.length);

  return(
    <div className="flex flex-col w-screen h-[90vh] items-center relative text-white">
      <img className='h-full w-full' src={require('../../../../imgs/search-banner1.png')} alt="search banner"/>


      <div className='absolute top-[5%] md:top-[7%] w-full container mx-auto flex flex-col justify-center items-center'>

        <p className="font-bold text-2xl mb-6 md:mb-14 lg:mb-20">Collections Search</p>
        
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={{themesFilter, categoriesFilter}}> */}
          <form className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 font-bold text-white'>

            <p className='flex flex-col gap-3 w-full '>
              <label className='' htmlFor='category' >Category</label>
              <select id='category' name='category' className='rounded bg-transparent border-[2px]'>
                {categoriesFilter && categoriesFilter?.map((item)=>(
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))}
              </select>
            </p>
            

            <p className='flex flex-col gap-3 w-full'>
              <label className='text-white' htmlFor='period' >Period</label>
              <select id='period' name='period' className='rounded bg-transparent border-[2px]'></select>
            </p>

            <p className='flex flex-col gap-3 w-full'>
              <label className='text-white' htmlFor='material' >Material</label>
              <select id='material' name='material' className='rounded bg-transparent border-[2px]'></select>
            </p>

            <p className='flex flex-col gap-3 w-full'>
              <label className='text-white' htmlFor='Provenance' >Provenance</label>
              <select id='Provenance' name='Provenance' className='rounded bg-transparent border-[2px]'></select>
            </p>

            <p className='flex flex-col gap-3 w-full'>
              <label className='text-white' htmlFor='Gallery' >Gallery</label>
              <select id='Gallery' name='Gallery' className='rounded bg-transparent border-[2px]'></select>
            </p>

            <p className='flex flex-col gap-3 w-full'>
              <label className='text-white' htmlFor='Theme' >Theme</label>
              <select id='Theme' name='Theme' className='rounded bg-transparent border-[2px] text-white px-2'>
                {themesFilter.map((item)=>(
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))}
              </select>
            </p>

            <div className='grid grid-cols-1 h-10 md:grid-cols-2 lg:grid-cols-3 md:col-span-2 lg:col-span-3 gap-5 w-full text-sm font-semibold mt-4 lg:mt-8'>
              <input type='text' placeholder='KeyWord' className='col-span-2 md:col-span-1 lg:col-span-2 rounded bg-transparent border-[2px]' />
              <p className='flex w-full justify-center items-center gap-8 md:gap-4 h-full'>
                <button className='bg-orange-500 rounded h-full w-[50%]'>Search</button>
                <button className='bg-transparent rounded h-full w-[50%] border-[1px] '>Clear</button>
              </p>
            </div>
          </form>
          {/* </Await>
        </Suspense> */}

      </div>
    </div>
  )
}

export default SearchBanner;