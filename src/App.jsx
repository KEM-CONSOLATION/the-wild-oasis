import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;
const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The wild Oasis</Heading>
            <div>
              <Heading type="h2">Check in and Out</Heading>
              <Button onClick={() => alert("Check in")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check out")}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="number of guest" />
              <Input type="number" placeholder="number of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;
