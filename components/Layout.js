import Sidebar from "./partials/Sidebar";

const Layout = ({children}) => {
    return (
        <div className="flex">
            <div className="w-1/5 h-screen border-r border-gray-300">
                {/*Sidebar*/}
                <Sidebar/>
            </div>

            <main className="container w-3/5 p-12">
                {children}
            </main>

            <div className="w-1/5 h-screen border-l border-gray-300">
                {/*Sections*/}
            </div>
        </div>
    )
}

export default Layout
