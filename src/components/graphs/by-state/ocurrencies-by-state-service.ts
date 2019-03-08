import Service from "../shared/service";
const groupedByState = require("../../../../data/agrupado_por_uf");

export default class OcurrenciesByStateService extends Service {
  private groupedByState: any;
  private grouppedByStatedAndHour: any;

  constructor() {
    super();
  }

  fetchDataGrouppedByState() {
    if (!this.groupedByState) {
      this.groupedByState = require("../../../../data/agrupado_por_uf");
    }

    return new Promise(resolve => {
      resolve(this.groupedByState.content);
    });
  }

  filterDataByHour(data: any, filter: any) {
    const regex = new RegExp("^[0-9]*$");
    const initialValue = filter.initialValue.replace(/\D/g, "");
    const finalValue = filter.finalValue.replace(/\D/g, "");

    const obj: any = {};
    data.content.forEach((item: any) => {
      if (
        parseInt(item.hora) >= parseInt(initialValue) ||
        parseInt(item.hora) <= parseInt(finalValue)
      ) {
        let key: string = item.uf;
        let value: string = item.total;
        obj[key] = obj[key] ? obj[key].total + value : { total: value, uf: key };
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
      const data = require("../../../../data/agrupado_por_uf_hora");
      this.grouppedByStatedAndHour = data;
    }

    this.grouppedByStatedAndHour = this.filterDataByHour(this.grouppedByStatedAndHour, filter);
    return new Promise(resolve => {
      resolve(this.grouppedByStatedAndHour.content);
    });
  }
}
