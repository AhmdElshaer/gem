

const SearchResults = ({collectionsSearch}) => {

  return (
    <div className="highlights w-full flex flex-col justify-center items-start px-2 container mx-auto mt-4">
        <p className="text-lg mb-8 font-semibold text-stone-700">
          Explore the glory of Ancient Egypt through an extensive collection dating from Prehistoric times to the Roman Period, each revealing a unique aspect of the ancient Egyptian civilisation.
          </p>

        <div className="grid relative gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-start justify-items-center">
          {collectionsSearch.data.map((item) => (
            <div key={item.id} className="relative aspect-square truncate">
              <img className='w-full h-full rounded-lg object-cover' src={item.thumbnail} alt='collections'/>

              <div className="h-[110%] w-full p-4 absolute bottom-[-20%]  lg:bottom-[-18%] hover:bottom-[0px] ease-in duration-300 text-white flex flex-col gap-4 justify-end items-center bg-gradient-to-b from-transparent via-transparent to-stone-500">
                <p className="font-bold">{item.title}</p>
                <p>{item.period.title}</p>
                <p className="underline underline-offset-3 text-sm">See More Details</p>
              </div>
            </div>
        ))}
        </div>
      </div>
  )
}

export default SearchResults;