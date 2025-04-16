import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovie(data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [id]);


    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 d-flex p-2">
                <div>
                    <img src={`http://localhost:3000/${movie.image}`} className='Detail_image' alt={movie.title || "Movie Image"} />
                </div>
                <div className="container-fluid p-3 border border-dark">
                    <div>
                        <h1 className="display-5 fw-bold">{movie.title}</h1>
                        <p className="col-md-8 fs-4">{movie.abstract}</p>
                        <ul className="list-unstyled">
                            <li><strong>Director:</strong> {movie.director}</li>
                            <li><strong>Genre:</strong> {movie.genre}</li>
                            <li><strong>Release Year:</strong> {movie.release_year}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <h2>Reviews</h2>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <ul>
                        {movie.reviews.map(review => (
                            <li key={review.id}>
                                <p><strong>{review.name}</strong> (Rating: {review.vote}/5)</p>
                                <p>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available for this movie.</p>
                )}
            </div>
        </>
    );
}