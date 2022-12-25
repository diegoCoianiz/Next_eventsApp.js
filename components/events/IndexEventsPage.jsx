import React from 'react'
import Image from "next/image"
import Link from "next/link"

export const EventsPage = ({ data }) => {
    return (
        <div className="events_perCity">
            {data.map(event => (
                <div key={event.id}>
                    <Link className='events_perCity_card' href={`events/${event.id}`}>
                        <Image src={event.image} alt={event.title} width={400} height={250} />
                        <h2>{event.title} </h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}
