import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = (props) => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
