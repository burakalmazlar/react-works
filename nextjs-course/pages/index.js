import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_DATA = [
  {
    id: "1",
    title: "Barcelona Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Barcelona._View_from_Tibidabo.jpg",
    address: "Barcelona / Spain",
    description: "Meetup in Barcelona",
  },
  {
    id: "2",
    title: "Paris Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    address: "Paris / France",
    description: "Meetup in Paris",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

export const getStaticProps = async () => {
  return { props: { meetups: DUMMY_DATA } };
};

export default HomePage;
