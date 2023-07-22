const Favorites = () => {
    return (
        <div className="px-8 py-12">
            <div className="mb-12">
                <h1 className="text-lg text-gray-500 font-bold mb-8">Popular Movies</h1>

                <div className="flex h-32 mb-8">
                    <div className="mr-4 w-1/2">
                        <img src="../images/woods.jpg" alt="Movie" className="h-full w-full rounded-lg object-cover"/>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-auto">
                            <p className="text-sm mb-1">The Shawshank Redemption</p>
                            <p className="text-sm text-slate-400">1994</p>
                        </div>

                        <div>
                            <p className="text-smtext-slate-400">9.3</p>
                        </div>
                    </div>
                </div>

                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full">
                    See More
                </button>
            </div>

            <div>
                <h1 className="text-lg text-gray-500 font-bold mb-8">Favorites</h1>

                <div className="flex h-32 mb-8">
                    <div className="mr-4 w-1/2">
                        <img src="../images/woods.jpg" alt="Movie" className="h-full w-full rounded-lg object-cover"/>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-auto">
                            <p className="text-sm mb-1">Hobbit</p>
                            <p className="text-sm text-slate-400">1994</p>
                        </div>

                        <div>
                            <p className="text-smtext-slate-400">9.3</p>
                        </div>
                    </div>
                </div>

                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full">
                    See More
                </button>
            </div>

        </div>
    );
}

export default Favorites;
