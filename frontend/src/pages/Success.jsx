import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://st4.depositphotos.com/13765670/20631/i/450/depositphotos_206317644-stock-photo-books-gift-green-background-decorated.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #e6ccff;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Success = () => {
  return (
    <Container>
      
      <Wrapper>
      
        <Title></Title>
        <Form>
          <Title>Thank You !</Title>
          <Desc>
          Your Order has been received.
          </Desc>
        <Link to={`/home`}>
        <Button>Exit</Button>
          </Link>
        </Form>
      
      </Wrapper>
      
    </Container>
  );
};

export default  Success;