import { useState, useEffect } from "react"
export default function Review_form({ movieId }) {

    const initialFormdata = {
        name: "",
        vote: 1,
        text: "",
    };
    const [formData, setFormData] = useState(initialFormdata);

    function handleSubmit(e) {
        e.preventDefault();
        //fetch
        fetch(`http://localhost:3000/movies/${movieId}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Data Successfully submitted", data);
                setFormData(initialFormdata);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Vote</label>
                <select className="form-select"
                    id="vote"
                    value={formData.vote}
                    onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}>

                    <option value="">Select a rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Review</label>
                <textarea className="form-control"
                    id="text"
                    rows="4"
                    placeholder="Write your review here"
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
            </div>
            <button type="submit"
                className="btn btn-primary">
                Submit Review</button>
        </form>

    )

}