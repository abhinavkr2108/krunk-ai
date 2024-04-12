import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Colors } from "../../../../constants/Colors";

export default function ChatHeader() {
  return (
    <Box
      bgColor={Colors.header}
      w={"100%"}
      borderTopLeftRadius={"20px"}
      borderTopRightRadius={"20px"}
      p={"8px"}
    >
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"flex-end"}>
        <Box>
          <HStack alignItems={"flex-start"}>
            <Box
              w={"50px"}
              h={"50px"}
              borderRadius={"50%"}
              backgroundColor={"white"}
              mr={"8px"}
            >
              <Image src="/public/chatbot.png" objectFit={"fill"} />
            </Box>
            <Box>
              <VStack alignItems={"flex-start"} spacing={"0px"}>
                <HStack>
                  <Text
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={Colors.headerText}
                  >
                    Timpu
                  </Text>
                  <img
                    src="/badge.png"
                    alt="badge"
                    className="w-[18px] h-[18px]"
                  />
                </HStack>

                <Text
                  fontSize={"15px"}
                  className="font-medium"
                  color={Colors.headerText}
                >
                  Chat Assistant
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Box
              w={"8px"}
              h={"8px"}
              borderRadius={"50%"}
              backgroundColor={Colors.online}
              mr={"2px"}
            ></Box>
            <Text>Online</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
