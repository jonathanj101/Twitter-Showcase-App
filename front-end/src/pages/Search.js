import React, { useState } from 'react'

const SearchComponent = ({ getUserText }) => {
    // console.log(props)
    const [text, getText] = useState('')

    function clearState() {
        getText("")
    }

    function getValueInput(e) {
        const { value } = e.target
        console.log(value)
        getText(value)
    }

    return (
        <div className="bg-dark">
            <div className="input-group mx-auto w-50">
                <input
                    className="form-control"
                    type="text"
                    value={text}
                    onChange={getValueInput}
                    placeholder="Search for a user tweet..." />
                <div className="input-group-append">
                    <button
                        onClick={() => {
                            getUserText(text)
                            clearState()
                        }}
                        className="btn btn-outline-secondary bg-primary text-light" type="button">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent
