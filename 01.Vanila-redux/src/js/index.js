import { createStore } from 'redux';

/**
 * 초기 스테이트값 정의
 */
const initialState = {
  headerColor: '#16a085',
  todos: [],
};

/**
 * 액션 타입 정의
 */
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CHANGE_HEADER_COLOR = 'CHANGE_HEADER_COLOR';

/**
 * 액션 생성함수 정의
 */
const addTodo = text => ({
  type: ADD_TODO,
  text,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

const changeHeaderColor = (color) => ({
  type: CHANGE_HEADER_COLOR,
  color,
});

/**
 * 리듀서 함수 정의
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text }],
      };
    case REMOVE_TODO:
      state.todos.splice(action.id, 1);
      return {
        ...state,
      };
    case CHANGE_HEADER_COLOR:
      return {
        ...state,
        headerColor: action.color,
      };
    default:
      return state;
  }
};

/**
 * 스토어 생성
 */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const appTitle = document.querySelector('.app__title');
const appForm = document.querySelector('.app__form');
const todoText = document.querySelector('#todoText');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

/**
 * Element 생성
 */
const makeElement = ({nodeName = '', attrs = {}, args = []}) => {
  const node = document.createElement(nodeName);

  if (attrs) {
    for (const attr in attrs) {
      if (attr === 'styles') {
        for (const style in attrs[attr]) {
          node.style[style] = attrs[attr][style];
        }
      } else {
        node.setAttribute(attr, attrs[attr]);
      }
    }
  }

  args.forEach(arg => {
    let argClone = arg;
    if (typeof argClone === 'string') {
      argClone = document.createTextNode(argClone);
    }
    node.appendChild(argClone);
  });

  return node;
};

todoList.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'BUTTON') {
    console.log(`BUTTON!!! ${e.target.dataset.index}`);
    store.dispatch(removeTodo(e.target.dataset.index));
  }
});

/**
 * 렌더 함수 정의
 */
const render = () => {
  const state = store.getState();

  // 테마 색 설정
  appTitle.style.background = state.headerColor;
  appForm.style.background = state.headerColor;

  // 투두 리스트 렌더
  const todoListElement = state.todos.reduce((p, c, i) => {
    const checkId = `todoItemCheck${i}`;
    const checkInput = makeElement({
      nodeName: 'input',
      attrs: {
        class: 'todo__checkInput',
        id: checkId,
        type: 'checkbox',
      },
    });

    const checkBoxSpan = makeElement({
      nodeName: 'span',
      attrs: {
        class: 'todo__checkBox',
      },
    });

    const contentsSpan = makeElement({
      nodeName: 'span',
      attrs: {
        class: 'todo__contents',
      },
      args: [c.text],
    });
    
    const label = makeElement({
      nodeName: 'label',
      attrs: {
        for: checkId,
      },
      args: [checkBoxSpan, contentsSpan],
    });

    const removeButton = makeElement({
      nodeName: 'button',
      attrs: {
        class: 'todo__remove',
        'data-index': i,
      },
      args: ['REMOVE'],
    });

    const li = makeElement({
      nodeName: 'li',
      attrs: {
        class: 'app__item todo',
      },
      args: [checkInput, label, removeButton],
    });
    
    p.appendChild(li);
    return p;
  }, document.createDocumentFragment());
  todoList.innerHTML = '';
  todoList.appendChild(todoListElement);
};

render();

// 상태 값이 바뀔때마다 render 함수 실행
store.subscribe(render);

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  store.dispatch(addTodo(todoText.value));
  todoText.value = '';
});
