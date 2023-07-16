import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Content,
  Publisher,
} from "./PostStyle";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
  return (
    <Container>
      <Card
      // onClick={props.onClick}
      >
        <Content>{props.content}</Content>
        <Publisher>Posted by Dr. {props.Dr}</Publisher>
        <ButtonGroup>
          {/* <Button>
            <FontAwesomeIcon icon={faEye} /> Comments
          </Button> */}
          <Button>
            {props.upVote} &nbsp;
            <FontAwesomeIcon className="blue" icon={faThumbsUp} />
          </Button>
          <Button>
            {props.downVote} &nbsp;
            <FontAwesomeIcon className="blue" icon={faThumbsDown} />
          </Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default Post;
