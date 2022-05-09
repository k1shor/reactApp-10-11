import React, { useState, useEffect } from 'react'
import { getAllCategories } from './category/categoryApi'

const Categories = ({passing_handleFilters}) => {
    const [categories, setCategories] = useState([])
    // to display categories

    const [checked, setChecked] = useState([])
    // to store only checked categories

    const handleToggle = c => {
        const currentCategoryId = checked.indexOf(c)
        // to check whether it is already there or not, which one is checked
        
        const newCheckedCategoryId = [...checked]
        // to get previous 

        // line 12 gives index if present, -1 if not present
        if(currentCategoryId === -1){
            // if not present add to the array of checked
            newCheckedCategoryId.push(c)
        }
        else{
            // if already present, remove from array using splice method
            newCheckedCategoryId.splice(currentCategoryId,1)
        }

        // store newly changed checked array 
        setChecked(newCheckedCategoryId)

        // calling the function of deals page, passing newly changed checked array into filters
        passing_handleFilters(newCheckedCategoryId, 'category')
    }


    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
            categories.map((category,i) => {
              return <div key={i} class="form-check">
                    
                    <input class="form-check-input mt-1 me-2" type="checkbox" 
                    onChange={()=>handleToggle(category._id)}
                    value={category._id} id={category._id} />

                    <label class="form-check-label" for={category._id}>
                        {category.category_name}
                    </label>
                </div>
            })
            }


        </>
    )
}

export default Categories