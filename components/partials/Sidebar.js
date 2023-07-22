import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="p-12">
            <h1 className="text-gray-500 mb-14">MENU</h1>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/home.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Home</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/building.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Community</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/discovery.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Discovery</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/time.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Coming Soon</p>
                </div>
            </Link>

            <h1 className="text-gray-500 mb-14">SOCIAL</h1>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/group.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Friends</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/add-user.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Parties</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/media.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Media</p>
                </div>
            </Link>

            <h1 className="text-gray-500 mb-14">GENERAL</h1>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/settings.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Settings</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center mb-12">
                    <img src="/icons/logout.svg" alt="Home" width={24} height={24} className="mr-3"/>
                    <p className="text-slate-400">Log Out</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
