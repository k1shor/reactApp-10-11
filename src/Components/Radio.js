import React from 'react'
import { prices } from './Price'

const Radio = ({passing_handleFilters}) => {

    const handleChange = e =>{
        passing_handleFilters(e.target.value, 'price')
    }

    return (
        <>
            {
                prices.map(price => {
                    return <div class="form-check" key={price._id}>
                        <input class="form-check-input mt-1 me-2" type="radio" value={price._id}
                            // onChange={handleChange}
                    onChange = {e=>handleChange(e)}
                             id={price._id} name='xyz'/>
                        <label class="form-check-label" for={price._id}>
                            {price.name}
                        </label>
                    </div>
                })
            }

        </>
    )
}

export default Radio