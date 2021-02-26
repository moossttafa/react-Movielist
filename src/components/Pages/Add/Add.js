import React, {useState} from 'react';
import { ResultCard} from './ResultCard';

export const Add = () => {
    const [query , setQuery]= useState("");
    const [results , setResults] = useState([]);

    const APP_KEY = "3dbd08f3f828518ec4730332c34af2bc";

     const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);
        fetch (
            `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
        
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          if(!data.errors){
            setResults(data.results);
          } else {
              setResults([]);
          }
        });
    } 
    return (
        <div className="add-page">
             <div className="container">
                 <div className="add-content">
                     <div className="input-wrapper">
                         <input type="text"
                          placeholder="Search For a Movie"
                          value={query} 
                          onChange={onChange} />

                          {results.length > 0 && (
                             <ul className="results">
                             {results.map((movie) => (
                               <li key={movie.id}>
                                 <ResultCard movie={movie} />
                               </li>
                             ))}
                           </ul>
                          )}
                     </div>
                 </div>
             </div> 
        </div>
    )
}
