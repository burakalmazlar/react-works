import classes from "./MeetupDetail.module.css";
import Image from "next/image";

const MeetupDetail = (props) => {
  const { meetup } = props;

  if (!meetup) {
    return <p>Meetup is empty.</p>;
  }

  const { id, title, image, address, description } = props.meetup;

  return (
    <section className={classes.detail}>
      <img src={image} />
      <h2>{title}</h2>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
