import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = (props) => {
  const data = useRouteLoaderData("event-detail");
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

export async function action({ params, request }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete record" }, { status: 500 });
  }

  return redirect("/events");
}

export default EventDetailPage;
