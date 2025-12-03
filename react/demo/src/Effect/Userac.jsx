import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userac() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fectdata()
    },[])

    const fectdata=async()=>{
        const res = await axios.get("https://fakestoreapi.com/users")
        console.log(res.data)
        setuser(res.data)
    }

  return (
    <div>
      <h1>Hello this data</h1>
         <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">phone</th>
                        <th scope="col">address</th>
                    </tr>
                </thead>
                <tbody>      
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name.firstname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.address.city}</td>
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

export default Userac
