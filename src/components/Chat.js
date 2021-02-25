import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            <div># clever</div>
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
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
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

const MessageContainer = styled.div``;
