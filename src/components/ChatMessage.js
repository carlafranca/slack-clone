import React from "react";
import styled from "styled-components";

function ChatMessage({ data }) {
  return (
    <Container>
      <UserAvatar>
        <img src={data.userImage} alt={data.user} />
      </UserAvatar>
      <MessageContent>
        <Name>
          {data.user}
          <span>{new Date(data.timestamp.toDate()).toUTCString()}</span>
          {/* <span>2/23/2012 11:13:55 AM</span> */}
        </Name>
        <Text> {data.text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
  :hover {
    background-color: rgb(83, 39, 83, 0.13);
  }
`;
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    font-size: 13px;
    color: rgb(97, 96, 97);
    margin-left: 8px;
    font-weight: 400;
  }
`;
const Text = styled.div``;
