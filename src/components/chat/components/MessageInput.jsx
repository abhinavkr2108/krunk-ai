import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Colors } from "../../../../constants/Colors";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";

export default function MessageInput() {
  return (
    <Box
      bgColor={Colors.header}
      w={"100%"}
      borderBottomLeftRadius={"20px"}
      borderBottomRightRadius={"20px"}
      p={"8px"}
    >
      <Flex>
        <InputGroup width={"80%"}>
          <Input placeholder="Type your message" bgColor={"white"} />
          <InputRightElement>
            <GoPaperclip size={"20px"} color={Colors.textGray} />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <IconButton
          colorScheme="blue"
          icon={<MdOutlineKeyboardArrowRight />}
          fontSize={"40px"}
          padding={"8px"}
        />
      </Flex>
      <KrunkAIText />
    </Box>
  );
}

function KrunkAIText() {
  return (
    <Box className="flex justify-center items-center">
      <Text fontSize={"13px"} color={Colors.lightGray} mt={"10px"}>
        Powered by{" "}
        <span
          className="font-semibold text-[13px]"
          style={{ color: Colors.darkGray }}
        >
          Krunk.ai
        </span>
      </Text>
      <img src="/klogo.png" alt="klogo" className="w-[28px] h-[28px] mt-2" />
    </Box>
  );
}
