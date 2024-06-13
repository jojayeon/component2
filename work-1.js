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
      this._name = vlaue;
    }else {
      throw new Error("에렁~!");
    }
  }
  
  get age() {
    return this._age;
  }
  set age(nage) {
    if(typeof(nage) === "number") {
      this._age = nage;
    }else {
      throw new Error("에렁~!");
    }
    
  }
  
  get job() {
    return this._job;
  }
  set job(vlaue) {
    if(typeof(vlaue) === "string") {    
      this._job = vlaue;
    }else {
      throw new Error("에렁~!");
    }
  }
}

 const component = () => {
  let obj = new BasicData("조자연",26, "학생");

  const decision = () => {
    if (obj instanceof BasicData) {
      
      return `
<html>
  <body>
    <h1>이름: ${obj.name}</h1>
    <h2>나이: ${obj.age}</h2>
    <h3>직업: ${obj.job}</h3>
  </body>
</html>

      `;
    } else {
      console.error('규격 미달');
    }
  };

  return decision();
}
console.log(component());