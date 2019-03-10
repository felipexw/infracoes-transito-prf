import Service from "../shared/service";

export default class OcurrenciesByVehicleFabricatorService extends Service {
  private grouppedByStatedAndHour: any;

  constructor() {
    super();
  }

  filterDataByHour(data: any, filter: any) {
    const regex = /\D/g;
    const initialValue =
      typeof filter.initialValue === "string"
        ? filter.initialValue.replace(regex, "")
        : filter.initialValue;
    const finalValue =
      typeof filter.finalValue === "string"
        ? filter.finalValue.replace(regex, "")
        : filter.finalValue;

    const obj: any = {};

    const hours: any = {};
    //TODO: separar em outra função.
    data.content.forEach((item: any) => {
      const key = item.marca;
      if (!obj[key]) {
        obj[key] = {
          marca: item.marca,
          total: 0
        };
      } else {
        if (
          parseInt(item.hora) >= parseInt(initialValue) &&
          parseInt(item.hora) <= parseInt(finalValue)
        ) {
          let key = item.marca.trim();
          let value = item.total;
          obj[key].total += value;
          hours[item.hora] = 1;
        }
      }
    });

    const keys = Object.keys(obj);
    const newOne: any = [];
    keys.forEach(key => {
      const value = obj[key];
      newOne.push(value);
    });

    return { content: newOne };
  }

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
