import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    // <div>{params.id}번 일기입니다</div>;
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로가기"}></Button>
        }
        rightChild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={"수정하기"}
          ></Button>
        }
      ></Header>
      <Viewer emotionId={emotionId} content={content}>
        {" "}
      </Viewer>
    </div>
  );
};

export default Diary;
