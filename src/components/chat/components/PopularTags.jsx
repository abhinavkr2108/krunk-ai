import { Box, Text } from "@chakra-ui/react";
import { Colors } from "../../../../constants/Colors";
import Slider from "./Slider";

export default function PopularTags() {
  const items = [
    {
      id: 1,
      text: "Clutch",
    },
    {
      id: 2,
      text: "Fabric Lining",
    },
    {
      id: 3,
      text: "Baggit",
    },
    {
      id: 4,
      text: "Multi Compartment",
    },
  ];
  return (
    <Box className="p-[10px] flex flex-col gap-1">
      <Box>
        <Text color={Colors.textGray} fontSize={"13px"} className="font-normal">
          Popular tags for handbag
        </Text>
      </Box>
      <Box>
        <Slider items={items} />
      </Box>
    </Box>
  );
}
