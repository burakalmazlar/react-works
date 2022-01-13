import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = (props) => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/");
    } else {
      console.error(response);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="Add new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
