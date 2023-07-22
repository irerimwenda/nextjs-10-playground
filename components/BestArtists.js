const BestArtists = () => {
    return (
        <>
            <h1 className="text-xl font-semibold mb-6 mr-auto">Best Artists</h1>

            <div className="grid gap-2 grid-cols-4">
                <div className="rounded-xl shadow-lg artist-card h-52">
                    <div className="flex flex-col h-full">
                        <div className="mb-auto ml-auto pt-4 pr-4">
                            <button className="bg-slate-500 hover:bg-red-500 text-white py-2 px-3 rounded-lg">
                                <img src="/icons/plus.svg" alt="Home" width={14} height={18}/>
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            <p className="font-bold text-lg text-white text-center">Jamie Foxx</p>
                            <p className="text-slate-400 text-center">+ 12 Movies</p>
                        </div>
                    </div>

                    <style jsx>{`.artist-card {background-image:url('/images/woods.jpg'); background-repeat: no-repeat, repeat;}`}</style>
                </div>
            </div>
        </>
    )
}

export default BestArtists
