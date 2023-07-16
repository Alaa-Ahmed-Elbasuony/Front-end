// import React from "react";
// import {
//   CloseButton,
//   CommentItem,
//   CommentPublisher,
//   Container,
//   Overlay,
// } from "./CommentsStyle";

// function Comments({ postId, comments, onClose }) {
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const handleCommentClick = (commentId) => {
//     // Handle the click event for a specific comment
//     console.log(`Comment clicked: ${commentId}`);
//   };

//   return (
//     <Overlay onClick={handleOverlayClick}>
//       <Container>
//         <CloseButton onClick={onClose}>X</CloseButton>
//         {comments.map((comment) => (
//           <div key={comment.id} onClick={() => handleCommentClick(comment.id)}>
//             <CommentPublisher>{comment.commentedBy}</CommentPublisher>
//             <CommentItem>{comment.text}</CommentItem>
//           </div>
//         ))}
//       </Container>
//     </Overlay>
//   );
// }

// export default Comments;
