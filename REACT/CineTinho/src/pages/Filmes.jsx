import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase ='https://api.themoviedb.org/3/movie/' 
    const urlImg = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {

        fetch(`${urlBase}popular?${apiKey}&Language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))

    },[])
   
    return ( 
    <>
    <div className=" h-36"> 

    <h1 className="text-3xl font-extralight text-purple-700 tracking-widest text-left font-mono p-4 ">Filmes Lançamentos</h1>
    <p className="font-mono font-medium text-left p-4">Prepare a pipoca e o coração, a maratona vai começar!</p>
        <div className="listaFilmes grid grid-cols-4 gap-9 ">
        {
            filmes.map(filme => (
                <>
                <div className="card-filme text-center  " key={filme.id}>
                    <img className="w-auto p-3 " src={`${urlImg}${filme.poster_path}`} />
                    <h1 className="font-mono text-purple-700 text-lg">{filme.title}</h1>
                    <button className="shadow-lg">
                    <Link className="text-purple-200 hover:text-purple-500" to={`${filme.id}`} >SABER MAIS</Link>
                    </button>
                    
                </div>
                 
                </>
               
            ))
        }

        </div>
        

    </div>

        
    
    </> );
}

export default Filmes;