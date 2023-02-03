import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = (props) => {
  return <EventForm />;
};

export async function action({ request, params }) {
  const data = await request.formData();
  const enteredTitle = data.get("title");
  const enteredImage = data.get("image");
  const enteredDate = data.get("date");
  const enteredDescription = data.get("description");

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      description: enteredDescription,
    }),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save data" }, { status: 500 });
  }

  return redirect("/events");
}
export default NewEventPage;
