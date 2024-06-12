//이걸로 연습해보기

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


