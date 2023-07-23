import {useEffect, useState} from "react";

const BestArtists = () => {
    const [actors, setActors] = useState(null);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.themoviedb.org/3/movie/667538/credits', {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`
            }
        }).then((response) => response.json())
            .then((data) => {
                setActors(data.cast.splice(0, 12))
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!actors) return <p>No actors data</p>

    return (
        <>
            <h1 className="text-xl font-semibold mb-6 mr-auto">Best Artists</h1>

            <div className="grid gap-x-4 gap-y-8 grid-cols-4">
                {actors.map((actor) => (
                    <div className="rounded-xl shadow-lg artist-card h-52" key={actor.id}>
                        <div className="flex flex-col h-full">
                            <div className="mb-auto ml-auto pt-4 pr-4">
                                <button className="bg-slate-500 hover:bg-red-500 text-white py-2 px-3 rounded-lg">
                                    <img src="/icons/plus.svg" alt="Home" width={14} height={18}/>
                                </button>
                            </div>
                            <div className="px-6 py-4">
                                <p className="font-bold text-lg text-white text-center">{actor.name}</p>
                                <p className="text-slate-400 text-center">{actor.character}</p>
                            </div>
                        </div>

                        <style jsx>{`.artist-card {background-image:url('https://image.tmdb.org/t/p/original/${actor.profile_path}'); background-repeat: no-repeat, repeat; background-size: cover}`}</style>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BestArtists
