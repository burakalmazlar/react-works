import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const { meetup } = props;

  if (!meetup) {
    return <p>Meetup is empty.</p>;
  }

  const { id, title, image, address, description } = props.meetup;

  console.log(classes);
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
