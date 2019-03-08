import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import Service from "../shared/service";
const groupedByState = require("../../../../data/agrupado_por_uf");
export default class OcurrenciesByStateService extends Service {
  fetchDataGrouppedByState() {
    return new Promise(resolve => {
      resolve(groupedByState.content);
    });
  }

  renderChart(data: any) {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = data;

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "uf";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index) {
        return dy ? dy + 25 : 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "total";
    series.dataFields.categoryX = "uf";
    series.name = "Estado";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }
}