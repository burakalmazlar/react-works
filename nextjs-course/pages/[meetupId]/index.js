import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

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

const MeetupDetailPage = (props) => {
  const router = useRouter();

  const meetup = DUMMY_DATA.find((m) => m.id === router.query.meetupId);

  return <MeetupDetail meetup={meetup} />;
};

export default MeetupDetailPage;
