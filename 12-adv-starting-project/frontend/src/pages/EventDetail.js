import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = (props) => {
  const data = useRouteLoaderData();
  return <EventItem event={data.event} />;
};

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch record" }, { status: 500 });
  }
  return response;
}

export default EventDetailPage;
