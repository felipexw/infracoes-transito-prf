import Service from "../shared/service";

const data = require("../../../../data/agrupado_por_municipio_hora");

export default class OccurrencesByCityService extends Service {
  fetchDataGrouppedByStateAndHour() {
    return new Promise(resolve => {
      resolve(data.content);
    });
  }
}
