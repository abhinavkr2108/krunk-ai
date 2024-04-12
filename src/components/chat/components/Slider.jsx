import React, { useState, useEffect } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Colors } from "../../../../constants/Colors";
import PropTypes from "prop-types";

const Slider = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      // Set initial scroll position
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(0, sliderRef.current.scrollLeft - 100);
      setScrollPosition(newPosition);
      sliderRef.current.scrollLeft = newPosition;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const newPosition = Math.min(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
        scrollPosition + 100
      );
      setScrollPosition(newPosition);
      sliderRef.current.scrollLeft = newPosition;
    }
  };

  return (
    <Box position="relative" w="full">
      <Flex align="center" justify="space-between" p={2}>
        <IconButton
          aria-label="Scroll left"
          icon={<FaArrowLeft />}
          onClick={scrollLeft}
          isDisabled={scrollPosition <= 0}
        />
        <Flex
          ref={sliderRef}
          w="full"
          overflowX="auto"
          scrollBehavior="smooth"
          align="center"
          justify="space-between"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onScroll={() => setScrollPosition(sliderRef.current.scrollLeft)}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              mx={2}
              borderColor={Colors.darkBlue}
              borderWidth={"1px"}
              borderRadius={"5px"}
              bgColor={Colors.lightBlue}
              className="py-[5px] px-[10px]"
              whiteSpace="nowrap" // Prevent text from wrapping
              display="inline-block"
            >
              <Text>{item.text}</Text>
            </Box>
          ))}
        </Flex>
        <IconButton
          aria-label="Scroll right"
          icon={<FaArrowRight />}
          onClick={scrollRight}
          isDisabled={
            scrollPosition >=
            sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth
          }
        />
      </Flex>
    </Box>
  );
};
Slider.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Slider;
