import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지않습니다")) {
      //삭제로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"}></Button>}
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          ></Button>
        }
      ></Header>
      <Editor initData={curDiaryItem} onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default Edit;
