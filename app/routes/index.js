import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  queryParams = {
    id: {
      refreshModel: true,
    },
  };

  model(params) {
    const planet = this.store.peekRecord("planet", params.id || 0);
    const planets = this.store.peekAll("planet");
    return { planet, planets };
  }
}
