import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
    <>
    <header className="flex justify-between bg-primary-digolinha text-white p-4">
        <span>Olá amantes de cinema!</span>
        <h1>Bem-vindos ao CineTinho!</h1>
        <Navbar/>
    </header>
    </> 
    
    );
}

export default Header;