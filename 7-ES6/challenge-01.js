/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
작은 마을 행정부에서 일하고 있고, 두 마을의 엘리먼트들을 담당하고 있다고 가정.
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
지금은 3개의 공원과 4개의 거리만 있다.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
도시 안에 있는 각 공원의 나무 밀도 (공식: 나무 수/ 공원 넓이)

2. Average age of each town's park (forumla: sum of all ages/number of parks)
각각 도시의 공원 나이 (공식: 전체합계/ 공원 수)

3. The name of the park that has more than 1000 trees
천 그루 이상의 나무를 가지고 있는 공원의 이름

4. Total and average length of the town's streets
도시에 있는 거리의 합계와 평균 길이 값

5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
모든 거리의 크기 분류

All the report data should be printed to the console.
콘솔로 나타낼 것

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Elements {
  constructor(name, buildYear) {
    this.name = name
    this.buildYear = buildYear
  }
}

class Park extends Elements {
  constructor(name, buildYear, area, numTree) {
    super(name, buildYear)
    this.area = area
    this.numTree = numTree
  }

  density(area, numTree) {
    const densityTree = this.numTree / this.area
    console.log(`나무의 밀도는 ${densityTree}% 이다.`)
  }
}


class Street extends Elements {
  constructor(name, buildYear, area, length = 3) {
    super(name, buildYear)
    this.length = length
    this.area = area
  }

  classifyStreet () {
    const classification = new Map()
    classification.set(1, 'tiny')
    classification.set(2, 'small')
    classification.set(3, 'normal')
    classification.set(4, 'big')
    classification.set(5, 'huge')
    console.log(`${this.name}은 ${this.buildYear}에 만들어졌고 ${classification.get(this.length)}를 가지고 있다.`)
  }

}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0)
  return [sum, sum / arr.length]
}


function reportParks(p) {
  console.log('------------PARKS REPORT------------')

  // Density
  p.forEach(el => el.density())

  // Average age
  const age = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(age)
  console.log(`${p.length}의 평균 나이는 ${avgAge}이다.`)

  // Which park has more than 1000 trees
  const i = p.map(el => el.numTree).findIndex(el => el >= 1000)
  console.log(`1000그루 넘게 가지고 있는 공원은 ${p[i].name}이다.`)
}

function reportStreets(s) {
  console.log('-----------STREETS REPORT-----------')

  // Total and average length of the town's streets
  const [totalAge, avgAge] = calc(s.map(el => el.length))
  console.log(`도로의 평균 길이는 ${avgAge}, 총 길이는 ${totalAge}이다.`)

  // Classify sizes
  s.forEach(el => el.classifyStreet())
}

reportParks(allParks);
reportStreets(allStreets);
