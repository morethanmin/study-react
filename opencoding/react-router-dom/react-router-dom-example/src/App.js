import { Route, Switch, Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
//switch 가 있으면 children 컴포넌트중에서 일치하는게 나오는 그순간 하나만 출력함
//switch 가 없으면 일치하는 모든 컴포넌트를 출력한다.

//link는 리프레시없이 해당 컴포넌트를 보여주면서 라우트를 표시한다면,
//navlink는 해당하는 컴포넌트를 active 클래슬ㄹ 부여한다.

const Appbox = styled.div`
  .active {
    background-color: tomato;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
};

const contents = [
  {
    id: 1,
    title: "HTML",
    desc: "HTML is ...",
  },
  {
    id: 2,
    title: "JS",
    desc: "JS is ...",
  },
  {
    id: 3,
    title: "React",
    desc: "React is ...",
  },
];

const Topic = () => {
  const id = useParams().topic_id;
  const content = contents.filter((content) => content.id === parseInt(id))[0];
  if (!content) return <div>not find</div>;
  return (
    <div>
      {" "}
      <h3>{content.title}</h3>
      {content.desc}{" "}
    </div>
  );
};

const Topics = () => {
  const Lists = contents.map((content) => (
    <li key={content.id}>
      <NavLink to={`/topics/${content.id}`}>{content.title}</NavLink>
    </li>
  ));
  const Routes = contents.map((content) => (
    <Route key={content.id} path={`/topics/${content.id}`}>
      {content.desc}
    </Route>
  ));
  return (
    <div>
      <h2>Topics</h2>
      <ul>{Lists}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>{Routes}</Switch> */}
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
};

function App() {
  return (
    <Appbox>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">Not found</Route>
      </Switch>
    </Appbox>
  );
}

export default App;
