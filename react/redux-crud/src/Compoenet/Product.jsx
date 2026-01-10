import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readpro } from '../Slice/produSlice'


function Product() {

    const { products, loading } = useSelector((data) => data.products)

    console.log(products)
    console.log(loading)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(readpro())
    },[])
    


    return (
        <div>
            <h1>Hello user data show</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        products && products.map((data,index)=>{
                            console.log(data)
                            return(
                                  <tr key={index} className='text-center'>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>
                                <button className='btn btn-info'>View</button>
                                <button className='btn btn-success mx-1'>Edit</button>
                                <button className='btn btn-danger' >Delete</button>
                            </td>
                        </tr>
                            )
                        })
                      }
                       
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Product
