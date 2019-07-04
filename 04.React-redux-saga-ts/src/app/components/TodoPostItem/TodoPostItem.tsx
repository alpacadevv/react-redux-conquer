import React, { memo } from 'react';
import classNames from 'classnames';
import './TodoPostItem.scss';

interface Props {
  className: string;
  title: string;
  body: string;
}

const TodoPostItem: React.SFC<Props> = memo(props => {
  const { className, title, body } = props;

  return (
    <li className={classNames(className, 'TodoPostItem')}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
});

export default TodoPostItem;
