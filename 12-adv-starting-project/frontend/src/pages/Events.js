import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const response = useLoaderData();
  const events = response.events;

  // if(response.isError){
  //   return <p>{response.message}</p>
  // }
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //throw {message: 'Couldn\'t fetch data'}
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    return response;
  }
};
