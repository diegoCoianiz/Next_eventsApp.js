import { EventsPage } from "../../components/events/IndexEventsPage"

const EventsPerCityPage = ({ data }) => {
    return <EventsPage data={data}/>
}

export default EventsPerCityPage

export async function getStaticProps() {
  const {events_categories} = await import("/data/data.json")

  return {
    props: {
      "data": events_categories
    }
  }
}