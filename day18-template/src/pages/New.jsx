import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새일기쓰기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로가기"}></Button>
        }
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default New;
