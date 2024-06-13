
const component = (food1, food2, food3) => {
  let obj = {
        food1: food1, 
        food2: food2,
        food3: food3,
      };

      return obj
    }

let a = component("오이", "김밥", "양념갈비");

console.log(typeof(a))
console.dir(a.food1);

console.log(component("오이", "김밥", "양념갈비"))

for(let key in a){
  console.log(key);// 키
  console.log(a[key]);// 값
  console.log(a.food1);// 값
}


