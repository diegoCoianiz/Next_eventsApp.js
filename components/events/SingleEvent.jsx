import React, { useRef, useState } from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'


const SingleEvent = ({ eventData }) => {
    const inputEmail = useRef()
    const router = useRouter()
    const [message, setMessage] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        const validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailValue.match(validRegEx)) setMessage("Please introduce a correct email address")

        try {
            const response = await fetch('/api/email_registration', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailValue, eventId })
            })
            if (!response.ok) throw new Error("Error: ", response.status)
            const data = await response.json()
            setMessage(data.message)
            inputEmail.current.value = ""
        } catch (error) { console.error(error) }
    }
    return (
        <div className='single_event'>
            <h1>{eventData.title}</h1>
            <Image src={eventData.image} width={1000} height={450} alt={eventData.id} />
            <h4>{eventData.description}</h4>
            <form onSubmit={onSubmit} className={"email_form"}>
                <label>Get registered for this event!</label>
                <input ref={inputEmail} id={"email"} placeholder={"email"} />
                <button type={'submit'}> Submit </button>
            </form>
            <h5>{message}</h5>
        </div>
    )
}

export default SingleEvent