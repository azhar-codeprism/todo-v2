import { IconButton, HStack, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineCheckCircle } from "react-icons/ai";

function Card({ task, deleteHandler, completeHandler }) {
  return (
    <HStack
      textColor="#b22222"
      background="white"
      m="1"
      fontWeight="light"
      p="2"
      borderTopRightRadius="sm"
      borderBottomLeftRadius="sm"
      borderTopLeftRadius="lg"
      borderBottomRightRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      fontFamily="Nunito, sans-serif"
    >
      <Text> {task.title} </Text>
      <Spacer />
      <IconButton
        icon={<AiOutlineDelete />}
        color="#718096"
        size="md"
        variant="ghost"
        isRound="true"
        onClick={deleteHandler}
        backgroundColor="white"
      ></IconButton>
      <IconButton
        colorScheme="green"
        size="md"
        isRound="true"
        variant="ghost"
        icon={<AiOutlineCheckCircle />}
        onClick={completeHandler}
        backgroundColor="white"
      ></IconButton>
    </HStack>
  );
}
export default Card;
