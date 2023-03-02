import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Ctr>
      <Navbar />
    </Ctr>
  );
};

export default Home;

const Ctr = styled(Box)`
  background: #f3f3f3;
  
`;
