//함수 선언
function car(c, w, e, q, b) {
  //더하고 나누고 곱하고 빼는 함수
  return c + (w / e) * q - b; //값을 반환한다.
}
//함수 가져옴
var queen = car(33, 132, 12, 1.1, 555); //함수 선언에 쓸 값을 넣어 줌, 변수 선언
console.log(queen); //출력
