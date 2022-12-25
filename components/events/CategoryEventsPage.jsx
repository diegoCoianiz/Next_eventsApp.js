import React from 'react'
import Image from "next/image"
import Link from "next/link"

export const CategoryEventsPage = ({ data, pageName }) => {
    return (
        <>
            <h1>Events in {pageName}</h1>
            <div className='category_container'>
                {data.map((event, id) => (
                    <div className='categoryEvent_card' key={id}>
                        <Link href={`${event.city}/${event.id}`}>
                        <h2>event {event.title}</h2>
                            <Image width={300} height={300} alt={event.title} src={event.image} />
                        </Link>
                        <h5>{event.description}</h5>
                        <br />
                    </div>
                ))}
            </div>
        </>
    )
}
