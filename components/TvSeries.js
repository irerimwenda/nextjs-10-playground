import BestArtists from "./BestArtists";

const TvSeries = () => {
    return (
        <>
            <div className="mb-14">
                <div id="animation-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative overflow-hidden h-96 w-full movie-box relative rounded-lg">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <div className="h-96 w-full movie-box relative rounded-lg">
                                <div className="h-full flex flex-col movie-container rounded-lg px-8 py-5">
                                    <div className="flex items-center mb-auto">
                                        <p className="text-white text-sm">+6 friends are watching</p>
                                    </div>

                                    <div className="text-white">
                                        <h1 className="text-2xl font-semibold uppercase">JUMANJI</h1>
                                        <p className="uppercase text-xs text-gray-300 my-4">Action, Adventure, Comedy</p>
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
                                            Watch
                                        </button>
                                    </div>
                                </div>
                                <style
                                    jsx>{`.movie-box {background-image:url('/images/woods.jpg'); background-size: contain, cover; }`}</style>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="h-96 w-full movie-box relative rounded-lg">
                                <div className="h-full flex flex-col movie-container rounded-lg px-8 py-5">
                                    <div className="flex items-center mb-auto">
                                        <p className="text-white text-sm">+6 friends are watching</p>
                                    </div>

                                    <div className="text-white">
                                        <h1 className="text-2xl font-semibold uppercase">JUMANJI</h1>
                                        <p className="uppercase text-xs text-gray-300 my-4">Action, Adventure, Comedy</p>
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
                                            Watch
                                        </button>
                                    </div>
                                </div>
                                <style jsx>{`.movie-box {background-image:url('/images/woods.jpg'); background-size: contain, cover; }`}</style>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="h-96 w-full movie-box relative rounded-lg">
                                <div className="h-full flex flex-col movie-container rounded-lg px-8 py-5">
                                    <div className="flex items-center mb-auto">
                                        <p className="text-white text-sm">+6 friends are watching</p>
                                    </div>

                                    <div className="text-white">
                                        <h1 className="text-2xl font-semibold uppercase">JUMANJI</h1>
                                        <p className="uppercase text-xs text-gray-300 my-4">Action, Adventure, Comedy</p>
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
                                            Watch
                                        </button>
                                    </div>
                                </div>
                                <style
                                    jsx>{`.movie-box {background-image:url('/images/woods.jpg'); background-size: contain, cover; }`}</style>
                            </div>
                        </div>
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
