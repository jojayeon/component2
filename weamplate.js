

const container = () => {
  let today = new Date();
  let td = today.getHours();
  
  // console.log(typeof(td))
  // console.log(td)
  
  const tagComponent = (tagName, textNode) => {
    return `<${tagName}>${textNode}</${tagName}>`;
  }

  let day = () => {
    if(td < 12) {
      return "오전이야 메인 있쥬"
    }else { 
      return "오후니까 메인 없음"
    }
  }
  
  return `
  ${tagComponent('header', '헤더부분')}
  ${tagComponent('main', day())}
  ${tagComponent('footer', '푸터부분')}
  `;
}

console.log(container());







// let today = new Date();
// let tod = today.splice()
// let tod1 = today.slice("t")
// let tod = today.split("t")
// console.log(today);
// console.log(tod);
// console.log(tod1);
// console.log(typeof(today));
// console.log(today.getHours());// 시
// console.log(today.getMinutes());// 분


// 2024-06-12T03:25:51.
//           t 03 = 이게 12시임 영국 기준이라 그런듯
 

//오늘은 6.12(날짜)or(오전 오후로 구분해도 좋음) 아니라면 메인부분 빼기 
// 맞으면 오늘은 잘살고 있습니다.

//1. 날짜 구하기
//2. 함수에 적용
//오전이 아니라면 a
//오후이면 b