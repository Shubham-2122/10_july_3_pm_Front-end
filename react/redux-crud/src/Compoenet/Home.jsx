import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, readdata } from '../Slice/userSlice'
import { Link } from 'react-router-dom'

function Home() {

    const { users, loading } = useSelector((data) => data.users)

    console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readdata())
    }, [])

    return (
        <div>
            <h1>Hello user data show</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        users && users.map((data,index)=>{
                            console.log(data)
                            return(
                                  <tr key={index} className='text-center'>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <button className='btn btn-info'>View</button>
                                <Link to={`/edit/${data.id}`} className='btn btn-success mx-1'>Edit</Link>
                                <button className='btn btn-danger' onClick={()=>dispatch(deletedata(data?.id))}>Delete</button>
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

export default Home
