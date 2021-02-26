import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import db, { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <SideBar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">Select or Create Channel</Route>
                {/* <Route path="/" component={Login}></Route> */}
              </Switch>
            </Main>
          </Container>
        )}
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
  /* grid-template-rows: 38px auto; */
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.main`
  display: grid;
  //width of the sidebar and the rest
  grid-template-columns: 260px auto;
`;
