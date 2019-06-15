import React, { useCallback, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../../store/modules/post';
import './TodoPost.scss';

const TodoPost = ({ posts, PostActions }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const onChangePageNumber = useCallback((e) => {
    setPageNumber(e.target.value);
  }, []);

  const onClickFetchPosts = useCallback(() => {
    PostActions.getPosts();
  }, []);

  const onClickFetchPost = useCallback(() => {
    PostActions.getPost(pageNumber);
  }, [pageNumber]);

  const renderPosts = posts.map((post, id) => (
      <div key={id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
  ));

  return (
    <div className="TodoPost">
      <header className="TodoPost__header">
        <h1 className="TodoPost__title">Post list</h1>
        <a className="TodoPost__fetchPosts" onClick={onClickFetchPosts}>Fetch posts</a>
        <a className="TodoPost__fetchPost" onClick={onClickFetchPost}>Fetch post</a>
        <input type="number" max="100" placeholder="1 ~ 100" value={pageNumber} onChange={onChangePageNumber}/>
      </header>
      <div>{renderPosts}</div>
    </div>
  );
};

const mapStateToProps = ({ post }) => ({
  posts: post.posts,
});

const mapDispatchToProps = dispatch => ({
  PostActions: bindActionCreators(postActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPost);
