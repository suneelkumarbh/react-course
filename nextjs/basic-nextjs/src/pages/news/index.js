// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/new1">News 1</Link>
        </li>
        <li>
          <Link href="/news/new2">News 2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
