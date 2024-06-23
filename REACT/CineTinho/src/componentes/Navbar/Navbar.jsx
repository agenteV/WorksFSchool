import {Link, useNavigate} from 'react-router-dom'
import { BiCameraHome, BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';

function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDeFault();
        
        if(!search) return
        navigate(`/search?q=${search}`);
        setSearch("");

    };


    return ( 
        <nav className='bg-purple-800 text-white px-4 flex flex-row justify-between items-center'>
            <ul className='flex gap-3'>
                <li><Link to ="/" className='font-mono'> Home </Link></li>
                <li><Link to ="filmes" className='font-mono'> Filmes </Link></li>
                <li><Link to ="sobre" className='font-mono'> Sobre </Link></li>
                <li><Link to ="contato" className='font-mono'> Contato </Link></li>
                <form onSubmit={handleSubmit} className='flex justify-between flex-row text-black px-5 ' >
                <input type="text" placeholder='Buscar Filme...' onChange={(e) => setSearch(e.target.value)} value={search} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <button type='submit'> </button>
            </form>
            </ul>
        </nav>
     );
}

export default Navbar