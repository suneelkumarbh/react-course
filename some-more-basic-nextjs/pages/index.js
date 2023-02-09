// our-domain/

import MeetingList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meeting 1",
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    address: "Some address 5, 3455, some city",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "Meeting 2",
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    address: "Some address 54, 3455, some city",
    description: "This is the second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetingList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
};
export default HomePage;
