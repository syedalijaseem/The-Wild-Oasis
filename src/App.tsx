import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
// @ts-ignore
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>

        <Button onClick={() => alert("Check In")}>Check In</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
};

export default App;
