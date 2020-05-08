import React, { useState } from 'react';
import Paging from '../components/Paging/Paging.jsx';

const withPaging = PageComponent => {
  function WithPagingHOC(props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const incrementPage = increment => setPage(prevPage => prevPage + increment);

    return (
      <>
        <PageComponent {...props} page={page} setTotalPages={setTotalPages} />
        <Paging page={page} totalPages={totalPages} incrementPage={incrementPage} />
      </>
    );
  }

  WithPagingHOC.displayName = `withPaging(${PageComponent.name})`;

  return WithPagingHOC;
};

export default withPaging;
