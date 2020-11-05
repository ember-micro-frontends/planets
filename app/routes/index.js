import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  async model(params) {
    let response = await fetch("https://swapi.dev/api/planets/");
    const _planets = await response.json();
    _planets.results.forEach((p,index) => p.id = ++index); 
    const planets = _planets.results;
    return {  planets };
  }
}
