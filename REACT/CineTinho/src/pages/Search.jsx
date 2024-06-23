import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search() {
    const [searchParams] = useSearchParams();
    const [filme, setFilme] = useState;
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      };
    
      useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
      }, [query]);

    return ( <>

    <h1>Search</h1>
    
    </> );
}

export default Search;