import { useParams } from "react-router-dom";

const EventDetailPage = (props) => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.id}</p>
    </>
  );
};

export default EventDetailPage;
