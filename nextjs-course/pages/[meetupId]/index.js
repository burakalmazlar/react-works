import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  return <MeetupDetail meetup={props.meetup} />;
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb://user:pass@localhost:27017/database"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupsResult = await meetupsCollection.find({}, { _id: 1 }).toArray();

  const meetupsPaths = meetupsResult.map((m) => ({
    params: { meetupId: m._id.toString() },
  }));

  client.close();

  return {
    fallback: true,
    paths: meetupsPaths,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb://user:pass@localhost:27017/database"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupResult = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  const meetup = { ...meetupResult, _id: meetupResult._id.toString() };

  client.close();

  return { props: { meetup }, revalidate: 10 };
};

export default MeetupDetailPage;
