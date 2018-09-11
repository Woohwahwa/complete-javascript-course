/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
작은 마을 행정부에서 일하고 있고, 두 마을의 엘리먼트들을 담당하고 있다고 가정.
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
지금은 3개의 공원과 4개의 거리만 있다.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
도시 안에 있는 각 공원의 나무 밀도 (공식: 나무/ 공원 넓이)

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


const allParks =
[
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

}

function reportParks(p) {
  console.log('------------PARKS REPORT------------')

  // Density

  // Average age

  // Which park has more than 1000 trees

}

function reportStreets(s) {
  console.log('-----------STREETS REPORT-----------')

  // Total and average length of the town's streets

  // Classify sizes

}

reportParks(allParks);
reportStreets(allStreets);
