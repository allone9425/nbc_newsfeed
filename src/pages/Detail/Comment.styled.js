import styled from 'styled-components';

export const CommentBox = styled.div`
  //background-color: lavenderblush;
  width: 338px;
  height: 448px;
  background-color: ${({ theme }) => theme.contentBgColor};
  color: ${({ theme }) => theme.contentTextColor};
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 3px double #ccc;
  @media (max-width: 1280px) {
    width: 100%;
    border-left: none;
    height: 150px;
    margin-top: 10px;
    border-top: 2px solid #a5c7bb;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const CommentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  //border-bottom: 3px solid #a5c7bb;
  margin: 10px 10px;
`;

export const CommentWriteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
export const TitleBox = styled.div`
  display: flex;
  //border-bottom: 2px solid #ccc;
  align-items: center;
  margin: 8px 0 10px;
`;

export const CommentInput = styled.input`
  width: calc(100% - 140px);
  padding: 10px;
  margin: 10px;
  margin-left: 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  outline: none;
  background-color: #fff;

  font-size: 1.1rem;
  border-radius: 5px;
  &::placeholder {
    color: #ccc;
  }
`;

export const CommentBtn = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 20px;
  height: 40px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #a5c7bb;
  }
`;
export const AvatarPic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarFrame = styled.div`
  width: 50px;
  height: 35px;
  position: relative;
  border-radius: 50%;
  margin-left: 20px;
  overflow: hidden;
`;
export const NameDate = styled.div`
  //background-color: lemonchiffon;
  padding: 10px;
  width: 100%;

  margin-left: 20px;
  p {
    &:first-child {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 324px) {
    margin-left: 2px;
  }
`;

export const CommentBundle = styled.li`
  //background-color: darkred;
  display: flex;
  line-height: 1.5rem;
  margin-bottom: 5px;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #a5c7bb;
`;

export const CommentDate = styled.p`
  font-size: 1rem;
`;

export const CommentText = styled.p`
  padding: 10px 20px;
  line-height: 1.5rem;
  font-size: 1.1rem;
`;

export const CommentBg = styled.ul`
  //background-color: darkkhaki;
  //border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #aaa;
  margin: 20px 20px 20px 20px;
`;

export const CommentModifyButton = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const CommentDeleteButton = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 5px 10px;

  border-radius: 3px;
  &:hover {
    background-color: #a5c7bb;
  }
  margin: 0 10px 10px;
`;

export const ModifyDeleteButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  //background-color: red;
`;

export const CommentFinishButton = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 5px 10px;

  border-radius: 3px;
  margin: 0 10px 10px;

  &:hover {
    background-color: #a5c7bb;
  }
`;

export const CommentFinishBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CommentTextarea = styled.textarea`
  resize: none;
  padding: 10px;
  line-height: 1.5rem;
  font-size: 1.1rem;
  margin: 10px;
  outline: none;
  width: 275px;
  border-radius: 10px;
  border: 2px solid #ccc;
  @media (max-width: 1280px) {
    width: calc(100% - 20px);
  }
`;
