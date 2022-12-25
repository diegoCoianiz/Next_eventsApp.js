import SingleEvent from "../../../components/events/SingleEvent"

const EventPage = ({eventData}) => {
    return (
        <SingleEvent eventData={eventData} />
    )
}

export default EventPage

export async function getStaticPaths() {
    const {allEvents} = await import("/data/data.json")
    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {allEvents} = await import ("/data/data.json")
    const categoryId = context.params.id
    const eventData = allEvents.find(event => event.id === categoryId)
    return {
        props: {
            eventData
        }
    }
}