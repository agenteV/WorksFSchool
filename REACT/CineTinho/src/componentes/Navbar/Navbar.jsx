import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav className='bg-purple-800 text-white px-4 flex flex-row justify-between items-center'>
            <ul className='flex gap-3'>
                <li><Link to ="filmes"> Cartaz </Link></li>
                <li><Link to ="sobre"> Favoritos </Link></li>
                <li><Link to ="contato"> Categorias </Link></li>
                <form className='flex justify-between flex-row text-black px-5' >
                <input type="text" placeholder='Buscar Filme...' />
                <button type='submit'></button>
            </form>
            </ul>
        </nav>
     );
}

export default Navbar