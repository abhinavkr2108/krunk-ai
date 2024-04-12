import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { IoFilterOutline } from "react-icons/io5";
import { Colors } from "../../../../constants/Colors";
import { RxCross2 } from "react-icons/rx";

const filterItems = [
  {
    id: 1,
    text: "Strap - Long",
  },
  {
    id: 2,
    text: "Colour",
  },
  {
    id: 3,
    text: "Size",
  },
  {
    id: 4,
    text: "Brand",
  },
  {
    id: 5,
    text: "Material",
  },
];
export default function Filters() {
  return (
    <Box p={"10px"}>
      <Flex>
        <Text fontSize={"13px"} className="font-normal" color={Colors.textGray}>
          Select Filters
        </Text>
        <Spacer />
        <IoFilterOutline size={"20px"} color={Colors.textGray} />
        <Text
          fontSize={"13px"}
          className="font-normal"
          color={Colors.textGray}
          ml={"5px"}
        >
          Filter
        </Text>
      </Flex>
      <FilterItems filterItems={filterItems} />
    </Box>
  );
}

function FilterItems({ filterItems }) {
  return (
    <Flex
      flexWrap="wrap"
      justify="flex-start"
      align="center"
      gap="10px"
      mt={"10px"}
    >
      {filterItems.map((item) => (
        <Box
          key={item.id}
          border={"1px"}
          borderColor={Colors.darkBlue}
          borderRadius={"5px"}
          bgColor={Colors.fiterBg}
          className="py-[2px] px-[10px]"
        >
          <div className="flex gap-1">
            <Text
              color={Colors.darkBlue}
              fontSize={"13px"}
              className="font-normal"
            >
              {item.text}
            </Text>
            <RxCross2 size={"20px"} color={Colors.darkBlue} />
          </div>
        </Box>
      ))}
    </Flex>
  );
}
