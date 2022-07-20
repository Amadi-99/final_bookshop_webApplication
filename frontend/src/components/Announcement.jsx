import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0080ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>New month,new 50% off sale! Start saving here.</Container>;
};

export default Announcement;