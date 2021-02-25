import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import db from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Main>
            <SideBar rooms={rooms} />
            <Switch>
              <Route path="/room" component={Chat}></Route>
              <Route path="/" component={Login}></Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  //grid rows first is the header = 30px and the main as auto 'rest of the space'
  grid-template-rows: 38px auto;
`;

const Main = styled.main`
  display: grid;
  //width of the sidebar and the rest
  grid-template-columns: 260px auto;
`;
