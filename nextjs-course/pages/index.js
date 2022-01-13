import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

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
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   return { props: { meetups: DUMMY_DATA } };
// };

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb://user:pass@localhost:27017/database"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupsResult = await meetupsCollection.find().toArray();

  const meetups = meetupsResult.map((m) => ({
    ...m,
    _id: m._id.toString(),
  }));

  client.close();

  return { props: { meetups }, revalidate: 10 };
};

export default HomePage;
