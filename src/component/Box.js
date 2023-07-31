import React from "react";
const Box = (props) => {
  let result;

  if (props.title === "Computer" && props.result !== "tie" && props.result !== "") {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다. 같을경우에는 유저랑 같은 내용을 써도 되니 그대로 사용
    result = props.result;
  }
  //className box 내용과 + 결과값에 따른 테두리 className의 결과를 내용을 나타내어 효과를 준다
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1> <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};
export default Box;
