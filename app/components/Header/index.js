import { connect } from 'react-redux';
import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError
// } from 'containers/App/selectors';
import reducer from './reducer';
// import saga from './saga';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  // onSubmitForm: (evt) => {
  //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
  //   dispatch(loadRepos());
  // }
});

const mapStateToProps = (store) => ({
  locale: store.locale,
  menu: store.menu,
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'header', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withConnect)(Header);
// export { mapDispatchToProps };