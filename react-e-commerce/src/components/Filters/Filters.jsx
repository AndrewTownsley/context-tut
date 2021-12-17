import React from 'react'

const Filters = () => {
    return (
        <div className='filters'>
            <h2>Filter Results</h2>
            <form action="">
                <label htmlFor="">
                    Price: high to low
                <input type="radio" />
                </label>
                <label htmlFor="">
                    Price: low to high
                <input type="radio" />
                </label>
                <label htmlFor="">
                    Include out of stock
                <input type="checkbox" />
                </label>
                <label htmlFor="">
                    Next Day Delivery
                <input type="checkbox" />
                </label>
                <span>
                    Rating:
                </span>
                <button>Clear Filters</button>
            </form>
        </div>
    )
}

export default Filters
