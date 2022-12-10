import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';

import { Header } from '../components/header/header';
import HeaderProfile from '../components/header-profile/headerprofile.js';
import AllLists from '../components/alllists/alllists';
import EditAcc from '../components/editacc/editacc.js';
import { check, auth } from '../actions/actions';
import Article from '../components/article/article.js';
import CreateAcc from '../components/createAcc/createacc';
import LoginAcc from '../components/loginacc/loginacc.js';
import CreateArticle from '../components/createarticle/createarticle.js';
import './app.css';

const App = ({ auth, Auth, check }) => {
  // useEffect(() => {
  //   Auth();
  // }, auth);

  if (localStorage.getItem('auth')) {
    Auth();
  }

  const header = auth ? <HeaderProfile></HeaderProfile> : <Header></Header>;

  // console.log(ticketss);
  return (
    <div className="container">
      {header}

      <Routes>
        <Route path="/" element={<AllLists />}></Route>
        <Route path="/articles" element={<AllLists />}></Route>
        <Route path="/articles/:id" element={<Article />}></Route>
        <Route path="/sign-in" element={<CreateAcc />}></Route>
        <Route path="/sign-up" element={<LoginAcc />}></Route>
        <Route path="/profile" element={<EditAcc />}></Route>
        <Route path="/new-article" element={<CreateArticle />}></Route>
        <Route path="/articles/:id/edit" element={<CreateArticle />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ticketss: state.articles['articles'],
    check: state.check,
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Auth: () => dispatch(auth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
