import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
// import Comments from "../../components/Comments/Comments";
import { BaseURL, Token } from "../../../CONSTANTS";
import { BtnContainer, PageButton } from "../Users/UsersStyle";

function Posts() {
  // const [selectedPostId, setSelectedPostId] = useState(null);
  // const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const handlePreviousPage = () => {
    setPageNum(pageNum - 1);
  };
  const fetchData = () => {
    const link = BaseURL + "medical-blog/v1/posts/page-number/" + pageNum;

    axios
      .get(link, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        setPosts(response.data.objects);
        setIsNextPage(response.data.objects.isNextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // function fetchComments(postId) {
  //   // Make a request to fetch comments for the given postId
  //   // Update the 'comments' state with the fetched comments
  //   const post = posts.find((post) => post.id === postId);
  //   const postComments = post ? post.comments : [];
  //   setComments(postComments === "" ? "No Comments Yet" : postComments);
  // }

  return (
    <>
      {posts.map((post) => (
        <Post
          content={post.content}
          key={post.id}
          upVote={post.ratingCount}
          downVote={post.averageRate - post.ratingCount}
          Dr={post.author.fullName}
          // onClick={() => {
          // setSelectedPostId(post.id);
          // fetchComments(post.id); // Fetch comments for the selected post
          // }}
        />
      ))}

      {/* {selectedPostId && (
        <>
          <Comments
            postId={selectedPostId}
            comments={comments}
            onClose={() => setSelectedPostId(null)}
          />
        </>
      )} */}
      <BtnContainer>
        <PageButton onClick={handlePreviousPage} disabled={pageNum === 1}>
          Previous
        </PageButton>
        <PageButton onClick={handleNextPage} disabled={!isNextPage}>
          Next
        </PageButton>
      </BtnContainer>
    </>
  );
}

export default Posts;
