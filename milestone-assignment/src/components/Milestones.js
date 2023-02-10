import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {Modal,ModalOverlay,ModalContent,useDisclosure,ModalCloseButton,} from "@chakra-ui/react";
import "../styles/milestone.css";

let originalData = [
  {
    year: 2011,
    id: 1,
    journey: "Our Journey Started",
    heading: "Our Journey Started - 2011",
    description:
      "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
    image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    carouselData:["1","2","3","4","5"]

  },
  {
    year: 2012,
    id: 2,
    journey: "Our Journey Started",
    heading: "Our Journey Started - 2012",
    description:
      "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
    image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    carouselData:["1","2","3","4","5"]
  },
  {
    year: 2013,
    id: 3,
    journey: "Our Journey Started",
    heading: "Our Journey Started - 2013",
    description:
      "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
    image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    carouselData:["1","2","3","4","5"]
  },
  {
    year: 2014,
    id: 4,
    journey: "Our Journey Started",
    heading: "Our Journey Started - 2014",
    description:
      "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
    image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    carouselData:["1","2","3","4","5"]
  },
  {
    year: 2015,
    id: 5,
    journey: "Our Journey Started",
    heading: "Our Journey Started - 2015",
    description:
      "Coreintegra was incorporated in 2009 but was lying dormant. It got revived in June 2011 Initiated the aggregator model for last-mile recruitment",
    image: "https://ci-front.netlify.app/assets/img/milestones.jpg",
    carouselData:["1","2","3","4","5"]
  },
];

const Milestones = () => {
  let [active, setactive] = useState(1);
  let [data, setData] = useState(originalData[0]);
  let [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [modalCarouselData, setModalCarouselData] =useState(originalData[0].carouselData)



  let carousleData=["1","2","3","4","5"]
  let changeData = (data) => {
    setactive(data.id);
    setData(data);
    setModalCarouselData(data.carouselData)
  };

  const carouselInfiniteScroll = () => {
    if (currentIndex === carousleData.length - 1) {
      return setCurrentIndex(0);
    }

    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    // clean up function

    return () => clearInterval(interval);
  });

  return (
    <div>
      <Box width={"90%"} margin="auto">
        <Box textAlign={"left"} width={"90%"} margin={"auto"} marginTop={"2rem"}>
          <Text  fontSize={"2rem"} fontWeight={"600"}>
            <span className="blackText">Our</span>
            <span className="blueText">Milestones</span>
          </Text>
        </Box>
        <Box width={"90%"} display={"flex"} justifyContent={"space-between"}>
          <Box id="milestoneYears">
            {originalData.map((ele, i) => {
              return (
                <Box
                  className={ele.id === active ? "blueText" : "blackText"}
                  // marginBottom="30px"
                  fontSize={"1.7rem"}
                  fontWeight={"500"}
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
                    padding="10px 1em"
                  >
                    {ele.year}
                  </Text>
                  <Text
                    borderLeft={"4px solid rgb(1,174,238)"}
                    padding=" 10px 1em"
                    // marginBottom={"1.5rem"}
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
              <Button id="openModalButton" onClick={onOpen}>View</Button>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent position={"relative"}>
                  <ModalCloseButton fontSize={"1rem"} backgroundColor={"black"} padding={"8px"} borderRadius={"50%"} color={"white"} position={"absolute"} right={"-10%"} top={"-8%"} />
                  <Box>
                   <div className="carousel-container ">
                   {modalCarouselData.map((item, index) => {
                      return (
                        <div
                          className="carousel-item"
                          style={{
                            transform: `translate(-${currentIndex * 100}%)`,
                          }}
                          key={index}
                        >
                          {item}
                        </div>
                      );
                    })}
                   </div>
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
