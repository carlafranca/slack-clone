import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButton>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
      {/* <IconsContainer>
        <EditorIcons></EditorIcons>
      </IconsContainer> */}
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
    }
    input:focus {
      outline: none;
    }
  }
`;
const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;
