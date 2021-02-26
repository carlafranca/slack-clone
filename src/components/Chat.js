import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };
  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        user: user.name,
        userImage: user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png",
        timestamp: firebase.firestore.Timestamp.now(),
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            <div># {channel && channel.name}</div>
            <StarIcon>
              <StarBorderIcon />
            </StarIcon>
          </ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage key={index} data={data} />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgb(83, 39, 83, 0.13);
`;
const Channel = styled.div``;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const StarIcon = styled.div`
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: 3px;
  .MuiSvgIcon-root {
    width: 18px;
  }
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
