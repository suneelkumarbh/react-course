import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
      title="A first meetup"
      address="Some street 4, sector i 9 markaz"
      description="A first meetup description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
        title: "A first meetup",
        address: "Some street 4, sector i 9 markaz",
        description: "A first meetup description",
      },
    },
  };
};
export default MeetupDetailsPage;
