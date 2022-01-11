import Link from "next/link";
import { Fragment } from "react";

const DetailsPage = (props) => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ol>
        <li>
          <Link href="/news/nextjs-course">NextJS Course</Link>
        </li>
        <li>
          <Link href="/news/react-course">React Course</Link>
        </li>
      </ol>
    </Fragment>
  );
};

export default DetailsPage;
