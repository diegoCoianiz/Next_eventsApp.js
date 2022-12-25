import { CategoryEventsPage } from "../../../components/events/CategoryEventsPage"

const EventsCategoryPage = ({ data, pageName }) => (
    <CategoryEventsPage data={data} pageName={pageName} />
)


export default EventsCategoryPage

export async function getStaticPaths() {

    const { events_categories } = await import("/data/data.json")
    const allPaths = events_categories.map(event => {
        return {
            params: {
                cat: event.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    let pageName = context?.params.cat
    const { allEvents } = await import("/data/data.json")
    const data = allEvents.filter(event => event.city === pageName)
    return {
        props: {
            data,
            pageName
        }
    }
}