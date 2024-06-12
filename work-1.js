//1. 생성자 함수 setter로 규격만들기
//2. 생성자 함수로 객체 생성하기
//3. 생성자 함수 출러르 검사한기
//instanceof
// 4. true -> 문자열 html 리턴
// 5. throw new error()


class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get name() {
    return this._name;
  }
  set name(vlaue) {
    if(typeof(vlaue) === "string") {    
      
    }else {

    }
  }
  
  get age() {
    return this._age;
  }
  set age(nage) {
    if(typeof(nage) === "number") {
      
    }else {

    }
    
  }
  
  get job() {
    return this._job;
  }
  set job(vlaue) {
    if(typeof(vlaue) === "string") {    
      
    }else {
      throw new ;
    }
  }
}


 const component = () => {
  let obj = new basicData("조자연",26, "학생");

  const decision = () => {};

  return `<html></html>`;
}
