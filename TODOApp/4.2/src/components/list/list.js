import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';

import * as actions from '../../actions/actions';
import { getArticles, getArticlesSlug } from '../../actions/actions';

import 'antd/dist/antd.css';
import './list.css';
const { Paragraph } = Typography;
const List = ({ item, getArt, slug }) => {
  // const { id } = useParams();
  let img = item.author.image;
  let date = new Date(item.createdAt);
  const onChangeArt = () => {
    // console.log(id);
    // getArt(slug);
  };

  return (
    <div className="list">
      <div className="list-box">
        <Link to={`/articles/${item.slug}`}>
          <div className="list-box-title" onClick={onChangeArt}>
            <span className="list-box-title">
              <Paragraph ellipsis={{ rows: 1 }}>
                <span>{item.title}</span>
              </Paragraph>
            </span>
          </div>
        </Link>
        <div className="list-box-tag">
          {item.tagList.map((key) => {
            return (
              <span>
                <Paragraph ellipsis={{ rows: 1 }}>{key}</Paragraph>
              </span>
            );
          })}
        </div>
        <div className="list-box-info">
          <Paragraph ellipsis={{ rows: 2 }}>
            <span>{item.description}</span>
          </Paragraph>
        </div>
      </div>
      <div className="list-profile">
        <div className="list-profile-box">
          <div className="list-profile-name">{item.author.username}</div>
          <div className="list-profile-date">{date.toDateString()}</div>
        </div>
        <div className="list-profile-img">
          <img className="list-profile-img" src={img} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slug: state.slug,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArt: (id) => dispatch(getArticlesSlug(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
