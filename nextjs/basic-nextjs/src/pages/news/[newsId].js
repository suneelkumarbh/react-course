// our-domain.com/news/details

import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  const newId = router.query.newId;

  // send request to backend API
  // fetch new from database using newId

  return <h1>News Details Page</h1>;
};

export default DetailsPage;
