import Service from "../shared/service";

const grouppedByNationality = require("");

export default class OcurrenciesByCarNationalityService extends Service {
  constructor() {
    super();
  }

  fetchDataGrouppedByNationality() {
    return new Promise(resolve => {
      resolve(grouppedByNationality.content);
    });
  }
}
