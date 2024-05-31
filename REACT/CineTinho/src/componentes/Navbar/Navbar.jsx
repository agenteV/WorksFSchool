import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav className='bg-purple-800 text-white px-4 flex flex-row justify-between items-center'>
            <ul className='flex gap-3'>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="sobre"> Sobre </Link></li>
                <li><Link to ="contato"> Contato </Link></li>
                <form className='flex justify-between flex-row text-black px-5 ' >
                <input type="text" placeholder='Buscar Filme...' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <button type='submit'></button>
            </form>
            </ul>
        </nav>
     );
}

export default Navbar