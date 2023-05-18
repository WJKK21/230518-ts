var a = 'ga'; //가위
var b = 'bo'; //보
var c = 'ju'; //바위
function gambambo(na, you) {
    console.log('ds');
    // if (na === 'ga') {
    //   if (na + you === 'gabo'){
    //     return console.log(true)
    //   } else if (na + you === 'gaju') {
    //     return console.log(false)
    //   } else {
    //     return console.log('비김')
    //   }
    // }/*  else if (na === 'bo') {
    //   if (na + you === 'boju'){
    //     return console.log(true)
    //   } else if (na + you === 'boga') {
    //     return console.log(false)
    //   } else {
    //     return console.log('비김')
    //   }
    // } else if (na === 'ju') {
    //   if (na + you === 'juga'){
    //     return console.log(true)
    //   } else if (na + you === 'jubo') {
    //     return console.log(false)
    //   } else {
    //     return console.log('비김')
    //   }
    // } */
}
console.log(gambambo(a, b));
//ga bo ju 가위는 보한테 이기고 주먹한테 진다 
// 보는 가위한테 지고 주먹한테 이긴다 
// 주먹은 가위한테 이기고 보한테 진다
/* *
 * 내용에 대해 적어 놓는 방식
 * 생각을 풀어 놓는다
 * 객체로 담을수도 있다
 * 이미 알고 있다고 보여도 적어두는 행위
 * 위의 규칙은 변하지 않는다
 * 하지만 구성하는 코드는 다 다를 수 있다
 * 이것이 설계 결과는 중요하지 않다
 * 무조건 적어준다
 * 1 목적 2 기준 정의
 * 1번째 매개 변수가 가위인 경우 2번째 매개변수가 바위인 경우 리턴 false 반대는 ture
 *
 */
