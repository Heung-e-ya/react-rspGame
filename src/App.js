import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
// 1. 박스 두개 만들기 (타이틀, 사진정보, 승패결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패에 따라 박스의 색깔을 구분한다 (이기면 - 초록, 지면 - 빨강, 비기면 - 검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.devmina.com/storage/2021/08/ATLAS-SCISSOR-133MM.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIKulGJ1RrY9oVxkhqVIIQ7rQqkFCQeuqkA&usqp=CAU",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 어레이로 만들어주는 함수
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
