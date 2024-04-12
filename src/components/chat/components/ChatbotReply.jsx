import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Colors } from "../../../../constants/Colors";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function ChatbotReply() {
  return (
    <Box className="flex flex-col gap-1 ml-3">
      <Box
        style={{
          background:
            "linear-gradient(114.92deg, #E6EEFF 34.14%, #FAFCFF 105.26%)",
        }}
        w={"70%"}
        p={"8px"}
        borderRadius={"15px"}
      >
        <Box
          borderRadius={"10px"}
          className="py-[10px] px-[15px]"
          w={"100%"}
          bgColor={"white"}
        >
          <HStack w={"100%"}>
            <Image src="/bag.jpeg" objectFit={"fill"} w={"70px"} h={"50px"} />
            <Box>
              <VStack alignItems={"flex-start"} spacing={"2px"} w={"100%"}>
                <div className="text-[13px] font-medium flex items-center gap-2">
                  Bags on{" "}
                  <span className="text-[13px] font-semibold">Timpu</span>
                  <img
                    src="/badge.png"
                    alt="badge"
                    className="w-[13px] h-[13px]"
                  />
                </div>
                <Box w={"100%"} className="flex justify-between items-center">
                  <Text fontSize={"12px"} color={Colors.textGray}>
                    1123 products
                  </Text>

                  <MdOutlineKeyboardArrowRight />
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Text mt={"10px"}>
          Or set filter and help us choose the best bag for you.
        </Text>
      </Box>
      <Box>
        <Text fontSize={"10px"} className="font-normal">
          4:49 PM
        </Text>
      </Box>
    </Box>
  );
}
