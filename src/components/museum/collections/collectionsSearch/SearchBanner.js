import { Suspense, } from 'react';
import { Await } from 'react-router-dom';
// import { Await } from 'react-router-dom';


const SearchBanner = ({catFilter, ThemesFilter, PeriodsFilter, MatFilter, ProvFilter, galFilter}) => {
  // const [categoriesFilter, setCategoriesFilter] = useState([]);
  // const [themesFilter, setThemesFilter] = useState([]);
  // const [periodsFilter, setPeriodsFilter] = useState([]);
  // const [galleriesFilter, setGalleriesFilter] = useState([]);
  // const [materialsFilter, setMaterialsFilter] = useState([]);
  // const [provsFilter, setProvsFilter] = useState([]);

  // useEffect(()=>{
  //   setCategoriesFilter(CategoryFilter);
  //   // const ThemesFilter = () => {
  //   //   return Filter('themes')
  //   // }
  //   // setThemesFilter(ThemesFilter);

  //   // const PeriodsFilter = () => {
  //   //   return Filter('periods')
  //   // }
  //   // setPeriodsFilter(PeriodsFilter)

  //   // const GalleriesFilter = () => {
  //   //   return Filter('galleries')
  //   // }
  //   // setGalleriesFilter(GalleriesFilter);

  //   // const MaterialsFilter = () => {
  //   //   return Filter('materials')
  //   // }
  //   // setMaterialsFilter(MaterialsFilter);
  //   // const ProvsFilter = () => {
  //   //   return Filter('provenances')
  //   // }
  //   // setProvsFilter(ProvsFilter);
  // },[])
  // console.log(categoriesFilter.length);
  console.log(catFilter.length, 'aa');

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
                <select id='category' name='category' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300'>Select</option>
                  {catFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='bg-stone-500 text-sm text-white'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={PeriodsFilter}>
                <label className='' htmlFor='Period' >Period</label>
                <select id='Period' name='Period' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300'>Select</option>
                  {PeriodsFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='bg-stone-500 text-sm text-white'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={MatFilter}>
                <label className='' htmlFor='Material' >Material</label>
                <select id='Material' name='Material' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300'>Select</option>
                  {MatFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='bg-stone-500 text-sm text-white'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={ProvFilter}>
                <label className='' htmlFor='Provenance' >Provenance</label>
                <select id='Provenance' name='Provenance' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300'>Select</option>
                  {ProvFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='bg-stone-500 text-sm text-white'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={galFilter}>
                <label className='' htmlFor='category' >Gallery</label>
                <select id='Gallery' name='Gallery' className='rounded text-stone-500 text-sm bg-transparent border-[2px]'>
                  <option className='bg-stone-300'>Select</option>
                  {galFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='text-sm text-white bg-stone-500'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>

            <p className='flex flex-col gap-3 w-full '>
              <Suspense fallback={<div className='text-center text-white font-bold'>Loading...</div>}>
                <Await resolve={ThemesFilter}>
                <label className='' htmlFor='Theme' >Theme</label>
                <select id='Theme' name='Theme' className='rounded text-stone-500 text-sm bg-transparent border-[2px] '>
                  <option className='bg-stone-300 text-stone-500'>Select</option>
                  {ThemesFilter.map((item)=>(
                    <option key={item.id} value={item.title} className='text-sm text-white bg-stone-500'>{item.title}</option>
                  ))}
                </select>
                </Await>
              </Suspense>
            </p>
            

            <div className='grid grid-cols-1 h-10 md:grid-cols-2 lg:grid-cols-3 md:col-span-2 lg:col-span-3 gap-5 w-full text-sm font-semibold mt-4 lg:mt-8'>
              <input type='text' placeholder='KeyWord' className='col-span-2 md:col-span-1 lg:col-span-2 text-stone-500 text-sm rounded bg-transparent border-[2px]' />
              <p className='flex w-full justify-center items-center gap-5 md:gap-4 h-[40px]'>
                <button className='bg-orange-500 rounded h-full w-[50%]'>Search</button>
                <button className='bg-transparent rounded h-full w-[50%] border-[1px] '>Clear</button>
              </p>
            </div>
          </form>

      </div>
    </div>
  )
}

export default SearchBanner;