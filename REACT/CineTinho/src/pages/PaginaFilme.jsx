import { useParams } from "react-router-dom";
/*ATUALIZAR O ESTADO*/ 
import { useEffect,useState } from "react";
import { FaStar } from "react-icons/fa";

function PaginaFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])
    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase ='https://api.themoviedb.org/3/movie/' 
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'

    useEffect(() => {

        fetch(`${urlBase}${id}?${apiKey}&Language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))

    },[])

    return(
        <>
        <h1 className="p-4 text-purple-700 font-mono text-2xl">{filme.title}</h1>
        <div className="flex justify-center w-100 h-100 border-spacing-1">
        <img className="flex justify-center itens-center" src={`${urlImg}${filme.backdrop_path}`}/>
        </div>
        <h2 className="p-2  text-purple-700 font-mono text-xl ">Sinopse</h2>
        <p className="text-left p-2">{filme.overview}</p>
        <h2 className="p-2  text-purple-700 font-mono text-xl ">Avaliação:</h2>
        <p className="text-yellow-500 text-xl p-3">
            <FaStar/>  {filme.vote_average}
        </p>
        <h2 className="p-2  text-purple-700 font-mono text-xl ">Duração:</h2>
        <p className="p-2">
            {filme.runtime} min
        </p>
        </>
    )
}

export default PaginaFilmes