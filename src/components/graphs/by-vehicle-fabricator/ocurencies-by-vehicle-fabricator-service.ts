import Service from "../shared/service";

export default class OcurrenciesByVehicleFabricatorService extends Service {
  private grouppedByStatedAndHour: any;

  fetchDataGrouppedByStateAndHour(filter: any) {
    if (!this.grouppedByStatedAndHour) {
      const data = require("../../../../data/agrupado_por_marca_hora");
      this.grouppedByStatedAndHour = data;
    }

    const filteredData = this.filterDataByHour(this.grouppedByStatedAndHour, filter);
    return new Promise(resolve => {
      resolve(filteredData.content);
    });
  }
}
