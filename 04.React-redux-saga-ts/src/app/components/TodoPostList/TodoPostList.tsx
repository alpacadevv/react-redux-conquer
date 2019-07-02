import React from 'react';
import { connect } from 'react-redux';
import './TodoPostList.scss';
import { RootStateType } from '@/store';

const TodoPostList = () => {
  return (
    <h1>TodoPostList!!</h1>
  );
};

const mapStateToProps = ({post}: RootStateType) => ({
  postList: post.postList,
});

export default connect(mapStateToProps)(TodoPostList);
