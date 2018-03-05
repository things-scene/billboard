import locales from './locales'

var templates = [{
  type: 'billboard',
  description: 'Things Scene Billboard Chart Component',
  icon: '',
  group: 'chartAndGauge',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  model: {
    type: 'billboard',
    top: 100,
    left: 100,
    width: 600,
    height: 400,
    fontSize: 10,
    fillStyle: '#00ff00',
    fontColor: '#FF0000',
    strokeStyle: '#000',
    lineWidth: 1,
    data: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 250, 150, 120, 300, 200, 30]
    ],
    config: `
{
  type: "line"
}`
  }
}];

module.exports = {
  templates,
  locales
};
