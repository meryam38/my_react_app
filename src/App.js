import {useState,useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
const URL_API ='http://www.omdbapi.com?apikey=6252de5c';

const App = () =>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState(''); 
const searchMovies=async(title)=>{
const response=await fetch(`${URL_API}&s=${title}`);
const data =await response.json()  ;
setMovies (data.Search);
    
} 

    useEffect (()=> {
searchMovies('batman');
    },[]) ;
    return(
    <div className='app'>
        <h1> Movie land</h1>   
        <div className='search'>
            
        <input 
        placeholder='search for a movie 📽️'
        value= {searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        
        /> 
          <img 
          src={searchIcon}
          alt='search'
        onClick={()=>searchMovies(searchTerm)}
          
          />  


        </div>

    {

        movies?.length >0 ?(
         < div className='container'>
  
{movies.map((movie)=> (
    <MovieCard  movie ={movie}/>
)
 
)}  
    
    
     </div>  
        ):
        (
        <div  className='empty'>
            <h2>no movie found</h2> 

        </div>


        )
    }


    </div>
    
    

    );
}
export default  App;