import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/cards";


export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/movies")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, []);

    return (
        <div className="text-center my-5">
            <h1>Home Page</h1>
            <h2>Movies</h2>
            <div className="container">
                <div className="row">

                    {movies.map(movie => (
                        <div key={movie.id} className="col d-flex justify-content-center">
                            <Cards id={movie.id} title={movie.title} image={movie.image} />
                        </div>
                    ))}

                </div>
            </div>


        </div>
    );
}