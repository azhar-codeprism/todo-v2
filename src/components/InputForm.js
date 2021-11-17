import { IconButton } from "@chakra-ui/button";
import { Circle, Input } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/layout";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function InputForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const event = {
      title: taskName,
      completed: false,
      id: Math.floor(Math.random() * 100000),
    };
    addTask(event);
    console.log(taskName);
    setTaskName("");
  }
  return (
    <VStack
      alignItems="stretch"
      p="3"
      background="#b22222"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
      margin="0"
      borderBottomRadius="md"
      boxShadow="dark-lg"
      zIndex="1"
      fontFamily="Nunito, sans-serif"
    >
      <form onSubmit={handleSubmit}>
        <HStack w="100%" spacing="-6" pl="2">
          <Input
            _placeholder={{ color: "white", opacity: 0.8 }}
            border="0"
            focusBorderColor="#b22222"
            backgroundColor="#cc6666"
            borderRadius="sm"
            type="text"
            isRequired
            value={taskName}
            textColor="white"
            placeholder="Enter a task"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <Circle size="50px">
            <IconButton
              _focus={{ borderColor: "white" }}
              icon={<AiOutlinePlus />}
              isRound="true"
              type="submit"
              background="white"
              colorScheme="red"
              variant="ghost"
              p="0"
              m="0"
              zIndex="1"
            ></IconButton>
          </Circle>
        </HStack>
      </form>
    </VStack>
  );
}
export default InputForm;
