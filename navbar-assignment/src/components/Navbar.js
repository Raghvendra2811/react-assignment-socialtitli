import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import "../styles/navbar.css";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const showDiv = (id) => {
    let div = document.getElementById(`${id}`);
    div.style.display === "block"
      ? (div.style.display = "none")
      : (div.style.display = "block");
  };

  let showHamburger = () => {
    let hamburgerDiv = document.getElementById("hamburger");
    hamburgerDiv.style.width === "25rem"
      ? (hamburgerDiv.style.width = "0px")
      : (hamburgerDiv.style.width = "25rem");
  };
  return (
    <div>
      <Box >
        <Box id="topMenu">
          <Box
            width="90%"
            padding={"10px"}
            display={"flex"}
            justifyContent="flex-end"
            color={"white"}
          >
            <Box>
              <Text>Request A Demo</Text>
            </Box>
            <Box>
              <Text>Connect</Text>
            </Box>
            <Box>
              <AiFillLinkedin />
            </Box>
            <Box>
              <AiFillFacebook />
            </Box>
          </Box>
        </Box>
        <Box boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <Box padding={"10px"} width={"85%"} margin="auto" id="navbarOuterDiv">
            <Box>
              <Image src="https://ci-front.netlify.app/assets/img/logo-core-integra.png" />
            </Box>
            <Box id="bootomMenuOuterDiv" display={"flex"} justifyContent="space-between">
              <Box>
                <Text
                  onClick={() => {
                    showDiv("servicesDiv");
                  }}
                >
                  Services<i class="fa-solid fa-caret-down"></i>
                </Text>
              </Box>
              <Box>
                <Text>Technology</Text>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    showDiv("lifeAt");
                  }}
                >
                  Life At Coreintegra<i class="fa-solid fa-caret-down"></i>
                </Text>
              </Box>
              <Box>
                <Text>About Us</Text>
              </Box>
              <Box><Text>Careers</Text></Box>
              <Box>
                <Button>Login</Button>
              </Box>
              <Box>
                <Image
                  onClick={showHamburger}
                  src="https://ci-front.netlify.app/assets/img/icons/home-icon/menu-icon.png"
                />
              </Box>
            </Box>
          </Box>
          <Box id="navbarDropDownDiv" position={"relative"}>
            <Box
              position={"absolute"}
              top="0%"
              left={"30%"}
              display={"none"}
              id="servicesDiv"
            >
              <Text className="navbarDropDown">Labour Law Compliance</Text>
              <Text className="navbarDropDown">Staffing Solutions</Text>
              <Text className="navbarDropDown">Talent Acquisition</Text>
              <Text className="navbarDropDown">Compliance Advisory</Text>
              <Text className="navbarDropDown">Payroll Processing</Text>
            </Box>
            <Box
              position={"absolute"}
              top="0%"
              left={"52%"}
              id="lifeAt"
              display={"none"}
            >
              <Text className="navbarDropDown">Quarterly Newsletters</Text>
              <Text className="navbarDropDown">Employee Testimonials</Text>
              <Text className="navbarDropDown">Rewards & Recognition</Text>
              <Text className="navbarDropDown">Gallery</Text>
            </Box>
          </Box>
          <Box id="hamburger">
            <Box width={"85%"} margin="auto">
              <Box display={"flex"} justifyContent="space-between">
                <Image src="https://ci-front.netlify.app/assets/img/logo-core-integra.png" />
                <Box margin="auto 25px" padding={"12px"} borderRadius="50%" backgroundColor={"rgb(224,224,224)"} display="flex" justifyContent={"flex-end"} ><ImCross  onClick={showHamburger} /></Box>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    showDiv("hamburgerService");
                  }}
                  className="hamburgerBoldText"
                >
                  Services{" "}<i class="fa-solid fa-caret-down"></i>
                </Text>
                <Box id="hamburgerService" display="none">
                  <Text className="hamburgerLightText">
                    {" "}
                    Labour Law Compliance
                  </Text>
                  <Text className="hamburgerLightText">Staffing Solutions</Text>
                  <Text className="hamburgerLightText">Talent Acquisition</Text>
                  <Text className="hamburgerLightText">
                    Compliance Advisory
                  </Text>
                  <Text className="hamburgerLightText">Payroll Processing</Text>
                </Box>
              </Box>
              <Box>
                <Text className="hamburgerBoldText">Technology</Text>
              </Box>
              <Box>
                <Text className="hamburgerBoldText">Life At Coreintegra </Text>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    showDiv("hamburgerLifeAt");
                  }}
                  className="hamburgerBoldText"
                >
                  Why Coreintegra{" "}<i class="fa-solid fa-caret-down"></i>
                </Text>
                <Box id="hamburgerLifeAt" display={"none"}>
                  <Text className="hamburgerLightText">
                    Labour Law Compliance
                  </Text>
                  <Text className="hamburgerLightText">Staffing Solutions</Text>
                  <Text className="hamburgerLightText">Talent Acquisition</Text>
                  <Text className="hamburgerLightText">
                    Compliance Advisory
                  </Text>
                  <Text className="hamburgerLightText">Payroll Processing</Text>
                </Box>
              </Box>
              <Box>
                <Text className="hamburgerBoldText">About Us </Text>
              </Box>
              <Box>
                <Text
                  onClick={() => {
                    showDiv("hamburgerInvestor");
                  }}
                  className="hamburgerBoldText"
                >
                  Investor Relations<i class="fa-solid fa-caret-down"></i>
                </Text>
                <Box id="hamburgerInvestor" display={"none"}>
                  <Text className="hamburgerLightText">
                    {" "}
                    Labour Law Compliance
                  </Text>
                  <Text className="hamburgerLightText">Staffing Solutions</Text>
                  <Text className="hamburgerLightText">Talent Acquisition</Text>
                  <Text className="hamburgerLightText">
                    Compliance Advisory
                  </Text>
                  <Text className="hamburgerLightText">Payroll Processing</Text>
                </Box>
              </Box>
              <Box>
                <Text className="hamburgerLightText">Careers </Text>
              </Box>
              <Box>
                <Text className="hamburgerLightText">Contact </Text>
              </Box>
              <Box display={"flex"} marginTop="2rem" justifyContent="flex-start">
                <AiFillFacebook color="gray" fontSize={"2em"} margin="5%" />
                <AiFillLinkedin color="gray" margin="2rem" fontSize={"2em"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
