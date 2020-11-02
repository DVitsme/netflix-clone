import React from "react";
import slugify from "slugify";
import Link from "next/link";

import Footer from "./index";
import data from "./data.json";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Questions? Call 1-844-505-2993</Footer.Title>
      <Footer.Row>
        {data.map(({ col }, index) => (
          <Footer.Column key={`column${index}`}>
            {col.map(({ title }, index) => (
              <Link
                href={slugify(title, { lower: true })}
                key={`link${index}`}
                passHref
              >
                <Footer.Link>{title}</Footer.Link>
              </Link>
            ))}
          </Footer.Column>
        ))}
      </Footer.Row>
    </Footer>
  );
};

export default FooterContainer;
