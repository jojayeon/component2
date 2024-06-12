const component = (age, job) => {
  let obj = {
    name : "조자연",
    age : age,
    job : job
  };
  
  let innerFunc = () => {
    if(obj.age >= 20) {
      return "여름엔 맥주지!!!!"
    } else {
      return "여름엔 오구르트지!!!!"
    }
  }
  let auotherFunc = () => {
    if(obj.job === "ㅇㅇ") {
      return "상태가 메롱이군"
    }else {
      return "상태가 좋군"
    }
  }
  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${auotherFunc()}</h3>
  `;
}

console.log(component());