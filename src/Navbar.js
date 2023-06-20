import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background-color: #251bb1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover{color: #0f0};
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImg = styled.img`
  height: 50px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title className="title">Movie-App</Title>
          <CartContainer className="cartContainer">
            <CartImg
              alt="Cart Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              className="cartIcon"
            />
            <CartCount color="orange" show={false} className="cartCount">
              0
            </CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;
