import React from 'react';
import { connect } from 'react-redux';
import './TodoPostList.scss';
import { RootStateType } from '@/store';
import { PostType } from '@/services/post/types';
import TodoPostItem from '../TodoPostItem';

interface TodoPostListStateProps {
  postList: PostType[];
}

type Props = TodoPostListStateProps;

const TodoPostList: React.SFC<Props> = props => {
  const { postList } = props;

  const postListElement: React.ReactElement[] = postList.map((post, index) => (
    <TodoPostItem
      className="TodoPostList__item"
      key={`TodoPostItem${index}`}
      title={post.title}
      body={post.body}
    />
  ));

  return (
    <ul className="TodoPostList">{postListElement}</ul>
  );
};

const mapStateToProps = ({ post }: RootStateType) => ({
  postList: post.postList,
});

export default connect(mapStateToProps)(TodoPostList);
