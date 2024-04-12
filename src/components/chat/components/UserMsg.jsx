import { Box, Text } from "@chakra-ui/react";
import { Colors } from "../../../../constants/Colors";

export default function UserMsg() {
  return (
    <Box className="flex flex-col items-end mr-3">
      <Box
        borderRadius={"15px"}
        backgroundColor={Colors.userMsg}
        pl={"15px"}
        pr={"15px"}
        pt={"10px"}
        pb={"10px"}
        w={"213px"}
      >
        <Text>I am looking for a hand bag, with long strap .</Text>
      </Box>
      <Box>
        <Text fontSize={"10px"} className="font-normal">
          4:46 PM
        </Text>
      </Box>
    </Box>
  );
}
