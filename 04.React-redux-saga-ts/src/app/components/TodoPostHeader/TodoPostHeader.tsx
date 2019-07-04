import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoPostHeader.scss';
import { getPostRequest, getPostListRequest } from '@/services/post/actions';
import { RootStateType } from '@/store';

type Props = ReturnType<typeof mapDispatchToProps>;

const TodoPostHeader: React.SFC<Props> = props => {
  const { getPostRequest, getPostListRequest } = props;
  const [pageNumber, setPageNumber] = useState(1);

  const onGetPostListRequest = useCallback((): void => {
    getPostListRequest();
  }, []);

  const onGetPostRequest = useCallback((): void => {
    getPostRequest(pageNumber);
  }, [pageNumber]);

  const onChangePageNumber = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
    setPageNumber(parseInt(e.currentTarget.value));
  }, []);

  return (
    <div className="TodoPostHeader">
      <h1 className="TodoPostHeader__title">Post list</h1>
      <a className="TodoPostHeader__fetchPostList" onClick={onGetPostListRequest}>Fetch post list</a>
      <a className="TodoPostHeader__fetchPost" onClick={onGetPostRequest}>Fetch post</a>
      <input type="number" min="1" max="100" placeholder="1 ~ 100" value={pageNumber} onChange={onChangePageNumber}/>
    </div>
  );
};

const mapStateToProps = ({}: RootStateType) => {};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { getPostRequest, getPostListRequest },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPostHeader);
