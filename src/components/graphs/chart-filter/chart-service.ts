import Service from "../shared/service";
const _ = require("lodash");

//TODO: alias
const data = require("../../../../data/agrupado_por_hora");

export default class ChartService extends Service {
  getHours() {
    return new Promise(resolve => {
      const onlyHours = data.content.map((item: any) => item["hora"]);
      resolve(_.sortBy(onlyHours));
    });
  }
}
