let a = 'ga'; // 가위
let b = 'bo'; // 보
let c = 'ju'; // 바위

let meCount = 0; // 승리한 게임 횟수
let justCount = 0; // 게임 횟수

const gambambo = function () {
  let na = '';
  let you = '';

  for (let i = 0; i < 10; i++) {
    let rdn = () => {
      let ac = [a = 'ga', b = 'bo', c = 'ju'];
      let num = Math.floor(Math.random() * 3); // 0, 1, 2 사이의 난수 생성
      return ac[num];
    };

    na += rdn();
    you += rdn();
    justCount++

    if (na !== you) {

      if (na === 'ga') {
        if (na + you === 'gabo') {
          meCount++
          console.log('이김');
        }
        else{
          console.log('짐');
        }
      }
      
      if (na === 'bo') {
        if (na + you === 'boju') {
          meCount++
          console.log('이김');
        }
        else{
          console.log('짐');
        }
      }

      if (na === 'ju') {
        if (na + you === 'juga') {
          meCount++
          console.log('이김');
        }
        else {
          console.log('짐');
        }
      }
    }
    else {
      console.log('셈셈');
    }
  }
  
  // 게임 종료 후 승률 계산
  let huakreul = (meCount / justCount )* 100;
  console.log(`게임 횟수: ${justCount}`);
  console.log(`승리 횟수: ${meCount}`);
  console.log(`승률: ${huakreul}`);
};

gambambo();
