import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = (props) => {
  return <EventForm method="POST" />;
};

export default NewEventPage;
