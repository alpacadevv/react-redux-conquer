import React, { useState, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStateType } from '../stores';
import { getPost, getPosts } from '../stores/post/actions';
import { PostDataParams } from '../stores/post/types';

interface StateProps {
  posts: PostDataParams[];
}

interface DispatchProps {
  getPost(postId: number): void;
  getPosts(): void;
}

type Props = StateProps & DispatchProps;

const TodoPost: React.FC<Props> = ({ posts, getPost, getPosts }) => {
  const [pageNumber, setPageNumber] = useState(1);
  
  const onChangePageNumber = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setPageNumber(parseInt(e.currentTarget.value));
  }, []);

  const onClickFetchPostList = (): void => {
    getPosts();
  };

  const onClickFetchPost = (): void => {
    getPost(pageNumber);
  };

  const renderPostList = posts.map((post: PostDataParams, id) => (
    <div key={id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ));
  
  return (
    <div>
      <header>
        <h1>Post list</h1>
        <button onClick={onClickFetchPostList}>Fetch post list</button>
        <button onClick={onClickFetchPost}>Fetch post</button>
        <input type="number" max="100" value={pageNumber} onChange={onChangePageNumber} />
      </header>
      <div>{renderPostList}</div>
    </div>
  );
};

const mapStateToProps = ({ post }: RootStateType): StateProps => ({
  posts: post.posts,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getPost,
      getPosts,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPost);
