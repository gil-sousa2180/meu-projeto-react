import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ToDoList = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 4px;

  ul {
    padding: 0;
    margin-top: 40px;
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
  font-size: 15px;
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
  background: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 60px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`;
