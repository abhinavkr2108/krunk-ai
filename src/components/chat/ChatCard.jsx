import { Box, Card } from "@chakra-ui/react";
import ChatHeader from "./components/ChatHeader";
import ChatbotMsg from "./components/ChatbotMsg";
import UserMsg from "./components/UserMsg";
import PopularTags from "./components/PopularTags";
import ChatbotReply from "./components/ChatbotReply";
import Filters from "./components/Filters";
import MessageInput from "./components/MessageInput";

export default function ChatCard() {
  return (
    <Card bgColor={"white"} borderRadius={"20px"} boxShadow={"lg"} w={"30%"}>
      <Box w={"100%"} h={"100%"} p={"4px"}>
        <ChatHeader />
        <ChatbotMsg />
        <UserMsg />
        <PopularTags />
        <ChatbotReply />
        <Filters />
        <MessageInput />
      </Box>
    </Card>
  );
}
