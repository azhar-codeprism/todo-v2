import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import Card from "./components/Card";
import { VStack, Spacer, Divider } from "@chakra-ui/react";
import DeactivatedCard from "./components/DeactivatedCard";

function App() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {}, []);

  function addTask(taskData) {
    setAllTasks([...allTasks, taskData]);
  }

  function deleteHandler(id) {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  }

  function completeHandler(id) {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }
  return (
    <VStack spacing="-5">
      <InputForm addTask={addTask} />
      <VStack
        margin="0"
        background="rgba(182, 169, 143, 0.9)"
        borderBottomRadius="lg"
        p="4"
        paddingTop="7vh"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
        boxShadow="2xl"
      >
        {allTasks.map((task) => {
          return task.completed === false ? (
            <div key={task.id}>
              <Card
                task={task}
                deleteHandler={() => deleteHandler(task.id)}
                completeHandler={() => completeHandler(task.id)}
              />
            </div>
          ) : (
            ""
          );
        })}
        <Spacer display="flex" justifyContent="center">
          <Divider width="60%" border="1px" borderRadius="60px" />
        </Spacer>

        {allTasks.map((task) => {
          return task.completed === true ? (
            <div key={task.id}>
              <DeactivatedCard
                title={task.title}
                handleDel={() => deleteHandler(task.id)}
              />
            </div>
          ) : (
            ""
          );
        })}
      </VStack>
    </VStack>
  );
}

export default App;
