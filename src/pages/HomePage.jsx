import { useState, useEffect } from "react";

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
        <div>
            <h1>Home Page</h1>
            <h2>Movies</h2>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                </div>
            </div>


        </div>
    );
}