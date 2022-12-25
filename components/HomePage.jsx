import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ props }) => {
    return (
        <div >
            {
                props.map(event => (
                    <div className="home_body">
                        <Link className="home_image" href={`/events/${event.id}`} key={event.id}>
                            <Image alt={event.title} src={event.image} width={300} height={300} />
                        </Link>
                        <div className="home_content">
                            <h2> {event.title} </h2>
                            <p > {event.description} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}