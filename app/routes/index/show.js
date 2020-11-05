import Route from '@ember/routing/route';

export default class IndexShowRoute extends Route {
  async model(params) {
    let response = await fetch(`https://swapi.dev/api/planets/${params.id}`);
    const planet = await response.json();
    return { planet };
  }

}
