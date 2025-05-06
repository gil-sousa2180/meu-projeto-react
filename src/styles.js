import styled from "styled-components";

import { FcCheckmark, FcFullTrash } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 4px;

  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }

  ul {
    padding: 0;
    margin-top: 40px;
  }

  h2 {
    text-align: center;
    color: rgb(172, 170, 170);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: rgb(15, 15, 15);
      transform: scale(1);
    }
  }
`;

export const Input = styled.input`
  padding: 6px;
  width: 340px;
  height: 20px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  outline: none;
  border-radius: 8px;
  margin-right: 28px;
`;

export const Button = styled.button`
  background: #12dfdf;
  height: 35px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 2px;
  color: #fff;
  border-radius: 8px;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.8s;
  width: 130px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgb(2, 245, 204);
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  background: ${(props) => (props.isFinished ? "#fbd625" : "#E3E3E3")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 60px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
  font-size: 22px;
`;
export const Trash = styled(FcFullTrash)`
  cursor: pointer;
  font-size: 22px;
`;
