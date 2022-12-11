import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { Navigate, useParams } from 'react-router-dom';

import * as actions from '../../actions/actions';
import { getArticles, getArticlesSlug } from '../../actions/actions';
import List from '../list/list';
import './alllist.css';

export const AllLists = ({ tickets, ticketss = [], offset, getArt, slug, page }) => {
  useEffect(() => {
    console.log('use');
    tickets(offset, page);
    // getArt(slug);
    // console.log(ticketss);
  }, []);

  const onChange = (page) => {
    tickets(page * 5 - 5, page);
  };
  console.log(tickets);

  let elements = ticketss.map((item) => {
    return <List item={item} />;
  });

  console.log(page);

  // console.log(articles);
  // return <div>2</div>;
  return (
    <>
      <div>{elements}</div>
      <div className="pagination">
        <Pagination current={page} onChange={onChange} total={50} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ticketss: state.articles['articles'],
    offset: state.offset,
    slug: state.slug,
    page: state.page,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    tickets: (offset, page) => dispatch(getArticles(offset, page)),
    getArt: (id) => dispatch(getArticlesSlug(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllLists);
