export default function Review_form() {
    return (

        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Vote</label>
                <select className="form-select" id="vote">
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
                <textarea className="form-control" id="text" rows="4" placeholder="Write your review here"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>

    )
}