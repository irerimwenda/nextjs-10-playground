import {useEffect, useState} from "react";
import {format, parseISO} from "date-fns";

function TopRated() {
    const [TopRated, setMovies] = useState(null)
    const [isLoading, setLoading] = useState(false)


    useEffect( () => {
        setLoading(true)
        fetch('https://api.themoviedb.org/3/tv/top_rated', {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`
            }
        }).then((res) => res.json())
            .then((TopRated) => {
                setMovies(TopRated.results.slice(0, 3))
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!TopRated) return <p>No TopRated data</p>

    return (
        <>
            <div>
                <h1 className="text-lg text-gray-500 font-bold mb-8">Top Rated</h1>

                {TopRated.map(movie => (
                    <div className="flex h-32 mb-8" key={movie.id}>
                        <div className="mr-4 w-1/2">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie" className="h-full w-full rounded-lg object-cover"/>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <div className="mb-auto">
                                <p className="text-sm mb-1">{movie.name}</p>
                                <p className="text-sm text-slate-400">{format(parseISO(movie.first_air_date), 'yyyy')}</p>
                            </div>

                            <div>
                                <p className="text-smtext-slate-400">{movie.vote_average}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full">
                    See More
                </button>
            </div>
        </>
    )
}

export default TopRated;
