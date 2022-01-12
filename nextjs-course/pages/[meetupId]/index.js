import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const MeetupDetailPage = (props) => {
  const router = useRouter();

  return <MeetupDetail meetup={props.meetup} />;
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [{ params: { meetupId: "1" } }, { params: { meetupId: "2" } }],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const DUMMY_DATA = [
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

  const meetup = DUMMY_DATA.find((m) => m.id === meetupId);

  return { props: { meetup }, revalidate: 10 };
};

export default MeetupDetailPage;
