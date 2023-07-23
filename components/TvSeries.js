import BestArtists from "./BestArtists";
import {useEffect, useState} from "react";

function TvSeries() {
    const [TvSeries, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
         fetch('https://api.themoviedb.org/3/discover/tv', {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`
            }
        }).then((res) => res.json())
            .then((TvSeries) => {
                setData(TvSeries.results.slice(0, 4))
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!TvSeries) return <p>No movies data</p>

    return (
        <>
            <div className="mb-14">
                <div id="animation-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative overflow-hidden h-96 w-full movie-box relative rounded-lg">

                        {TvSeries.map((series) => (
                            <div className="hidden duration-700 ease-in-out" data-carousel-item key={series.id}>
                                <div className="h-96 w-full movie-box relative rounded-lg">
                                    <div className="h-full flex flex-col movie-container rounded-lg px-8 py-5">
                                        <div className="flex items-center mb-auto">
                                            <p className="text-white text-sm">+6 friends are watching</p>
                                        </div>

                                        <div className="text-white">
                                            <h1 className="text-2xl font-semibold uppercase">{series.name}</h1>
                                            <p className="uppercase text-xs text-gray-300 my-4">Action, Adventure, Comedy</p>
                                            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
                                                Watch
                                            </button>
                                        </div>
                                    </div>

                                    <style
                                        jsx>{`.movie-box {background-image:url('https://image.tmdb.org/t/p/original/${series.poster_path}'); background-size: 100%, 100%; background-repeat:no-repeat;}`}</style>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-8 cursor-pointer group focus:outline-none active:outline-none"
                            data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <img src="/icons/arrow-left.svg" alt="Home" width={24} height={24} className="w-4 h-4 text-white"/>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-8 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <img src="/icons/arrow-right.svg" alt="Home" width={24} height={24} className="w-4 h-4 text-white"/>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <BestArtists/>
            </div>
        </>
    )
}

export default TvSeries
