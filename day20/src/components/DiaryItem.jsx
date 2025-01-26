import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지않습니다")) {
      //삭제로직
      onDelete(id);
      nav("/", { replace: true });
    }
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"}></Button>
        <Button
          onClick={onClickDelete}
          text={"삭제하기"}
          type={"NEGATIVE"}
        ></Button>
      </div>
    </div>
  );
};

export default DiaryItem;
