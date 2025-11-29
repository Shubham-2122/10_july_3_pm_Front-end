import React, { useState } from 'react'

function FormData() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    return (
        <div>
            <form action="">
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter your name' /> <br />
                <input type="text" value={surname} onChange={(e) => setsurname(e.target.value)} placeholder='Enter your surname' /> <br />
                <input type="tel" value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Enter your Phone' /> <br />
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' /> <br />
                <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Enter your Password' /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormData
