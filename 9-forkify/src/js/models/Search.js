import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = '07949730046d17073bbe52e679af2a84';
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
