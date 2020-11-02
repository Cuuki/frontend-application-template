import React from 'react';
import style from './App.module.scss';
import {connect} from 'react-redux';
import SignUp from './components/SignUp';
import {AppMainStyled} from './App.styles';

function App() {
  return (
    <>
      <h1 className={style.rock}>
        Lets Rock!{' '}
        <span role="img" aria-label="heavy metal">
          🤘
        </span>
      </h1>
      <AppMainStyled>
        <SignUp />
      </AppMainStyled>
    </>
  );
}

const mapDispatch = dispatch => ({});
const mapState = state => ({});

export default connect(mapState, mapDispatch)(App);
