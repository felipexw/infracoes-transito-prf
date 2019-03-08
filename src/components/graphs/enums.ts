export enum ACTIONS {
  ACTION_HOURS_CHANGED = "ACTION_HOURS_CHANGED"
}

export class AmchartsBar {
  public valueX: string;
  public valueY: string;
  public data: any;
  public divName: string;
  public seriesName: string;

  constructor(valueX: string, valueY: string, data: any, divName: string, seriesName: string) {
    this.valueX = valueX;
    this.valueY = valueY;
    this.data = data;
    this.divName = divName;
    this.seriesName = seriesName;
  }
}
