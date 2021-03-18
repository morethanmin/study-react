import React, { useState } from "react";
import styled from "styled-components";
import { MdAddCircle } from "react-icons/md";

const TodoCreateBlock = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;

  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MdAddCircleStyled = styled(MdAddCircle)`
  display: flex;
  justify-content: center;
  font-size: 80px;
  position: relative;
  top: 5%;
  left: 0%;
  color: #78debe;
  transition: all ease 0.3s;
  transform: ${(props) => (props.toggle ? "rotate(45deg)" : "none")};
`;
const FormStyled = styled.form`
  height: 130px;
  display: flex;
`;

const InputStyled = styled.input`
  width: 100%;
  margin: 20px;
  height: 30px;
`;

export default function TodoCreate() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && (
        <FormStyled>
          <InputStyled placeholder="할 일을 입력 후, Enter를 누르세요." />
        </FormStyled>
      )}
      <TodoCreateBlock>
        <MdAddCircleStyled toggle={toggle} onClick={() => setToggle(!toggle)} />
      </TodoCreateBlock>
    </>
  );
}
