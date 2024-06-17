import { useParams } from "react-router-dom";
/*ATUALIZAR O ESTADO*/ 
import { useEffect,useState } from "react";

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
        <img src={`${urlImg}${filme.backdrop_path}`}/>
        <h1>{filme.title}</h1>
        <p>{filme.overview}</p>
        </>
    )
}

export default PaginaFilmes