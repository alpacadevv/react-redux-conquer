import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoPostHeader.scss';
import { getPostRequest, getPostListRequest } from '@/services/post/actions';
import { RootStateType } from '@/store';

const TodoPostHeader = () => {
  return (
    <h1>TodoPostHEader!!</h1>
  );
};

const mapStateToProps = ({}: RootStateType) => {

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { getPostRequest, getPostListRequest },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPostHeader);
