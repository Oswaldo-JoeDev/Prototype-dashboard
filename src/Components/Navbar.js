import styled from "@emotion/styled";
import { Login, Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Container } from "@mui/material";

const Navbar = () => {
  return (
    <CtrBar>
      <Container>
        <Box className="container">
          <Box className="menu">
            <Menu />
            <p>Home</p>
          </Box>
          <Box>
            <Button className="sing-in">
              <Login />
              Sing in
            </Button>
          </Box>
        </Box>
      </Container>
    </CtrBar>
  );
};

export default Navbar;

const CtrBar = styled(AppBar)`
  background: #ff6501;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
  }
  .menu {
    display: flex;
    gap: 15px;
  }
  .sing-in {
    color: #fff;
    text-transform: none;
    gap:10px;
    font-weight: 600;
  }
`;
