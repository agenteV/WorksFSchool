import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
    <>
    <header className="bg-purple-800 flex justify-between items-center  text-white p-4">
        <span className="text-2xl  ">CineMania</span>
        <Navbar/>
    </header>
    </> 
    
    );
}

export default Header;