import { Box, Text } from "@chakra-ui/react";

export default function ChatbotMsg() {
  return (
    <Box className="flex flex-col gap-1 ml-3">
      <Box
        marginTop={"40px"}
        className="bg-gradient-to-r from-blue-50 to-white"
        w={"70%"}
        p={"8px"}
        borderRadius={"15px"}
      >
        <Text>
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </Text>
      </Box>
      <Box>
        <Text fontSize={"10px"} className="font-normal">
          4:45 PM
        </Text>
      </Box>
    </Box>
  );
}
