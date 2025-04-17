import { Link } from "react-router-dom";

export default function Cards({ id, title, image }) {
    return (

        <div className="card">
            <Link to={`/${id}`}>
                <img src={`http://localhost:3000/${image}`} alt={title} className="card-img-top" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={`/${id}`} className="btn btn-primary">
                    View Details
                </Link>
            </div>
        </div>
    );
}