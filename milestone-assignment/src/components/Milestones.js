import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel,Provider  } from "chakra-ui-carousel";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import "../styles/milestone.css";

const Milestones = () => {
  let originalData = [
    {
      year: 2011,
      id: 1,
      journey: "Our Journey Started",
      heading: "Our Journey Started - 2011",
      description:
        "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
      image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    },
    {
      year: 2012,
      id: 2,
      journey: "Our Journey Started",
      heading: "Our Journey Started - 2012",
      description:
        "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
      image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    },
    {
      year: 2013,
      id: 3,
      journey: "Our Journey Started",
      heading: "Our Journey Started - 2013",
      description:
        "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
      image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    },
    {
      year: 2014,
      id: 4,
      journey: "Our Journey Started",
      heading: "Our Journey Started - 2014",
      description:
        "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
      image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    },
    {
      year: 2015,
      id: 5,
      journey: "Our Journey Started",
      heading: "Our Journey Started - 2015",
      description:
        "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
      image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    },
  ];
  let [active, setactive] = useState(1);
  let [data, setData] = useState(originalData[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let changeData = (data) => {
    setactive(data.id);
    setData(data);
  };

  return (
    <div>
      <Box width={"90%"} margin="auto">
        <Box textAlign={"left"}>
          <Text>
            <span className="blackText">Our</span>
            <span className="blueText">Milestones</span>
          </Text>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box id="milestoneYears">
            {originalData.map((ele, i) => {
              return (
                <Box
                  className={ele.id === active ? "blueText" : "blackText"}
                  key={ele.id}
                  onClick={() => {
                    changeData(ele);
                  }}
                  margin="4% auto"
                  display={"flex"}
                  textAlign="left"
                >
                  <Text
                    borderRight={"4px solid rgb(1,174,238)"}
                    padding="5px 1em"
                  >
                    {ele.year}
                  </Text>
                  <Text
                    borderLeft={"4px solid rgb(1,174,238)"}
                    padding=" 5px 1em"
                  >
                    {ele.journey}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box position={"relative"} display={"flex"}>
            <Box position={"absolute"} left="8%" id="mileStoneHeadingDescDiv">
              <Text id="MileStoneHeading">{data.heading}</Text>
              <Text id="MileStoneDescription">{data.description}</Text>
              <Button onClick={onOpen}>View</Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <Box>
                    
                  </Box>
                </ModalContent>
              </Modal>
            </Box>
            <Image id="milestoneImage" src={data.image} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Milestones;
