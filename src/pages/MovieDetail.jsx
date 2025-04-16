import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

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

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 d-flex">
                <div>
                    <img src={`http://localhost:3000/${movie?.image}`} alt="" />
                </div>
                <div className="container-fluid py-5">
                    <div>
                        <h1 className="display-5 fw-bold">{movie?.title}</h1>
                        <p className="col-md-8 fs-4">{movie?.abstract}</p>
                        <ul className='list-unstyled'>
                            <li>{movie?.director}</li>
                            <li>{movie?.genre}</li>
                            <li>{movie?.release_year}</li>
                        </ul>
                    </div>

                </div>

            </div>

        </>
    )
}