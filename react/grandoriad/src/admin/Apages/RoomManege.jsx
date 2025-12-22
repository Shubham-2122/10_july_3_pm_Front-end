import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'

function RoomManege() {

    const [rooms, setrooms] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/rooms")
        setrooms(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    // single get

    const [single, setsingle] = useState({
        id: "",
        name: "",
        guests: "",
        price: "",
        type: "",
        img: ""
    })

    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/rooms/${id}`)
        console.log(res.data)
        setsingle(res.data)
    }

    // card delete
    const deleteCard = async (id) => {
        const res = await axios.delete(`http://localhost:3000/rooms/${id}`)
        console.log(res.data)
        fetchdata()
    }

    // update process model
    const [edit, setedit] = useState(null)
    // data show 
    const [edited, setedited] = useState({
        id: "",
        name: "",
        guests: "",
        price: "",
        type: "",
        img: ""
    })

    // data get and open model
    const getdata = (data) => {
        console.log(data)
        setedit(data)
        setedited(data)
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const SubmitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/rooms/${edited.id}`, edited)
            console.log(res.data)
            setedited({
                id :"",
                name: "",
                guests: "",
                price: "",
                type: "",
                img: ""
            })
            setedit(null)
            fetchdata()
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center mt-3'>Room Manage</h1>
                <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">img</th>
                            <th scope="col">Name</th>
                            <th scope="col">guests</th>
                            <th scope='col'>type</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms && rooms.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr key={index} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.guests}</td>
                                        <td>{data.type}</td>
                                        <td>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-info' onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => getdata(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteCard(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-9 mx-auto">
                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={single.img} alt="Deluxe Ocean Suite" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean">{single.type}</span>

                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header">
                                                <h3>{single.name}</h3>
                                                <div className="room-rating">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <p className="room-description">it. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="room-amenities">
                                                <span><i className="bi bi-people" /> Up to {single.guests} guests</span>
                                                <span><i className="bi bi-wifi" /> Free WiFi</span>
                                                <span><i className="bi bi-tv" /> Smart TV</span>
                                            </div>
                                            <div className="room-footer">
                                                <div className="room-price">
                                                    <span className="price-from">From</span>
                                                    <span className="price-amount">$ {single.price}</span>
                                                    <span className="price-period">/ night</span>
                                                </div>
                                                <a href="room-details.html" className="btn-room-details">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    edit && (
                        <div className="container">
                            <div className="row justify-content-center my-5" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-10">
                                    <div className="contact-form-wrapper">
                                        <h2 className="text-center mb-4">Room Update data</h2>
                                        <form method="post" className="php-email-form">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.name} onChange={getchange} className="form-control" name="name" placeholder="Enter Room Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.type} onChange={getchange} className="form-control" name="type" placeholder="Enter your type" required />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <select className="form-select" value={edited.guests} onChange={getchange} id="" name="guests" required>
                                                            <option value hidden>Choose guests</option>
                                                            <option value={1}>1 guests</option>
                                                            <option value={2}>2 guests</option>
                                                            <option value={3}>3 guests</option>
                                                            <option value={4}>4 guests</option>
                                                            <option value={5}>5 guests</option>
                                                            <option value={6}>6 guests</option>
                                                            <option value={7}>7 guests</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" onChange={getchange} value={edited.price} name="price" placeholder="Enter your Price" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="url" className="form-control" onChange={getchange} value={edited.img} name="img" placeholder="Enter your img" required />
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button type="submit" className="btn btn-primary" onClick={SubmitData}>update Rooms</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button type="submit" className="btn btn-primary" onClick={() => setedit(null)}>cancle Rooms</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default RoomManege
