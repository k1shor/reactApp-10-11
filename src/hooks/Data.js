import React, { useState, useEffect } from 'react'

const Data = () => {

    const [data, setData] = useState(100)
    const [value, setValue] = useState(100)

    // useEffect(()=>{},[stateVariable])

    useEffect(()=>{
        window.alert("value updated")
    },[data,value])



    // const [variablename, setvariable] = useState(initial value)
    return (
        <>
            <div className='text-center'>
                <h1>{data}</h1>
                <button className='btn btn-primary me-5' onClick={() => setData(data + 1)}>Click to increase</button>

                <button className='btn btn-primary' onClick={() => setData(data - 1)}>Click to decrease</button>

                <h1>{value}</h1>
                { value <100 && value>0 && <button className='btn btn-success me-5' onClick={() => setValue(value + 20)}>Increase</button>}


                {value > 0 && <button className='btn btn-success' onClick={() => {
                    setData(data + 1)
                    setValue(value - 20)
                }
                }> Decrease </button>}

            </div>
        </>
    )
}

export default Data
