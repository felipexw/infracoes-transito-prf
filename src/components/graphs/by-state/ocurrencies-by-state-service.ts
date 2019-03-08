import Service from "../shared/service";
const groupedByState = require("../../../../data/agrupado_por_uf");
export default class OcurrenciesByStateService extends Service {
  fetchDataGrouppedByState() {
    return new Promise(resolve => {
      resolve(groupedByState.content);
    });
  }
}
