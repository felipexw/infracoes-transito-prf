import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import { AmchartsBar } from "../enums";
export default class Service {
  private valueX: string;

  constructor(valueX: string) {
    this.valueX = valueX;
  }
  static build(valueX: string) {
    return new this(valueX);
  }

  getObjectFromArray(args: any): any {
    const array = args.data.content;
    const obj: any = {};

    array.forEach((item: any) => {
      const key = item[this.valueX].trim();
      if (!obj[key]) {
        obj[key] = {
          total: 0
        };
        obj[key][this.valueX] = item[this.valueX];
      } else {
        if (
          parseInt(item.hora) >= parseInt(args.initialValue) &&
          parseInt(item.hora) <= parseInt(args.finalValue)
        ) {
          let key = item[this.valueX].trim();
          let value = item.total;
          obj[key].total += value;
        }
      }
    });

    return obj;
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

    const obj: any = this.getObjectFromArray({
      data: data,
      initialValue: initialValue,
      finalValue: finalValue
    });

    const keys = Object.keys(obj);
    const newOne: any = [];
    keys.forEach(key => {
      const value = obj[key];
      newOne.push(value);
    });

    return { content: newOne };
  }

  renderBarChart(configOptions: AmchartsBar) {
    let chart = am4core.create(configOptions.divName, am4charts.XYChart);

    // Add data
    chart.data = configOptions.data;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = configOptions.valueX;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", (dy, target) => {
      if (target.dataItem && target.dataItem.index) {
        return dy ? dy + 25 : 25;
      }
      return dy;
    });
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = configOptions.valueY;
    series.dataFields.categoryX = configOptions.valueX;
    series.name = configOptions.seriesName;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }
}
