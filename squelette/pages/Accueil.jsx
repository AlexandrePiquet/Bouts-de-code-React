import { useState } from "react";

import { Layout } from "../components/Layout";
import { Pagination } from "../components/Pagination";

export const Accueil = () => {
  // state (état, données)
  const [page, setPage] = useState(1);

  // components
  const handleClick = (i) => {
    if (page + i <= pageMax && page + i >= 1) {
      setPage(page + i);
    }
  };

  // mapping

  return (
    <>
      <Layout>
        <h1>Accueil</h1>

        <Pagination
          handleClick={handleClick}
          setPage={setPage}
          page={page}
          pageMax={pageMax}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni,
          illo vero odio neque nemo, minus eveniet tenetur cum culpa voluptas
          repellendus, cupiditate voluptatibus earum! Delectus dolor nobis
          doloremque quam.
        </p>

        <Pagination
          handleClick={handleClick}
          setPage={setPage}
          page={page}
          pageMax={pageMax}
        />
      </Layout>
    </>
  );
};
