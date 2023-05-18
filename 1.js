
function diffFinder (targetArray, compareArray, originalArray) {

  let duplicatedElement = null
  let replaceELement = null

  targetArray.forEach((element, index) => {
    if (compareArray.includes(element) === ture) {
      duplicatedElement = element;
      replaceELement = originalArray[index]
      targetArray[index] = replaceELement;
    }
  });

  return {
    duplicatedElement: duplicatedElement,
    replaceELement: replaceELement
  }
}

const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기']
const digimon = ['코로몬', ' 테일몬', '가브몬', '꼬부기']
const digimonOriginalData = ['코로몬', '테일몬', '가브몬', '어니몬']

console.log(diffFinder(digimon, pokemon, digimonOriginalData))