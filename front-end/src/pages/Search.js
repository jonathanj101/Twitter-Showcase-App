import React from 'react'

const SearchComponent = () => {
    return (
        <div className="bg-dark">
            <div className="input-group mx-auto w-50">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search for a user tweet..." />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary bg-dark text-light" type="button">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent
