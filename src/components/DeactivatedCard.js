import { IconButton, HStack, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineDelete, AiFillCheckCircle } from "react-icons/ai";
function DeactivatedCard({ title, handleDel }) {
  return (
    <HStack
      textColor="#C53030"
      style={{ filter: "brightness(0.75)" }}
      background="white"
      m="1"
      fontWeight="light"
      p="2"
      borderTopRightRadius="sm"
      borderBottomLeftRadius="sm"
      borderTopLeftRadius="lg"
      borderBottomRightRadius="lg"
      boxShadow="lg"
      fontFamily="Nunito, sans-serif"
    >
      <Text> {title} </Text>
      <Spacer />
      <IconButton
        color="#718096"
        onClick={handleDel}
        size="md"
        isRound="true"
        variant="ghost"
        icon={<AiOutlineDelete />}
        backgroundColor="white"
      ></IconButton>
      <IconButton
        color="teal"
        disabled="true"
        size="md"
        isRound="true"
        variant="solid"
        icon={<AiFillCheckCircle />}
        backgroundColor="white"
      ></IconButton>
    </HStack>
  );
}
export default DeactivatedCard;
