import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const DetailsPage = (props) => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <Fragment>
      <h1>Details Page of {newsId}</h1>
      <Link href="/news">Back to news page</Link>
    </Fragment>
  );
};

export default DetailsPage;
