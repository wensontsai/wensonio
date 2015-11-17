var EventEmitter = require('events').EventEmitter;
var d3 = require('d3');
var buckets = 9;

    var margin = { top: 50, right: 0, bottom: 100, left: 30 },
           width = 700 - margin.left - margin.right,
           height = 300 - margin.top - margin.bottom,
           gridSize = Math.floor(width / 24),
           legendElementWidth = gridSize*2,
           buckets = 9,
           colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
           days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
           times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];
           datasets = [data1, data2];

       var svg = d3.select(".chart").append("svg")
           .attr("width", width + margin.left + margin.right)
           .attr("height", height + margin.top + margin.bottom)
           .append("g")
           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

       var dayLabels = svg.selectAll(".dayLabel")
           .data(days)
           .enter().append("text")
             .text(function (d) { return d; })
             .attr("x", 0)
             .attr("y", function (d, i) { return i * gridSize; })
             .style("text-anchor", "end")
             .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
             .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

       var timeLabels = svg.selectAll(".timeLabel")
           .data(times)
           .enter().append("text")
             .text(function(d) { return d; })
             .attr("x", function(d, i) { return i * gridSize; })
             .attr("y", 0)
             .style("text-anchor", "middle")
             .attr("transform", "translate(" + gridSize / 2 + ", -6)")
             .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });


var data1 = [{"day":1,"hour":1,"value":88},{"day":1,"hour":2,"value":20},{"day":1,"hour":3,"value":44},{"day":1,"hour":4,"value":0},{"day":1,"hour":5,"value":33},{"day":1,"hour":6,"value":2},{"day":1,"hour":7,"value":0},{"day":1,"hour":8,"value":9},{"day":1,"hour":9,"value":25},{"day":1,"hour":10,"value":1},{"day":1,"hour":11,"value":57},{"day":1,"hour":12,"value":61},{"day":1,"hour":13,"value":22},{"day":1,"hour":14,"value":25},{"day":1,"hour":15,"value":7},{"day":1,"hour":16,"value":55},{"day":1,"hour":17,"value":51},{"day":1,"hour":18,"value":4},{"day":1,"hour":19,"value":17},{"day":1,"hour":20,"value":20},{"day":1,"hour":21,"value":4},{"day":1,"hour":22,"value":4},{"day":1,"hour":23,"value":6},{"day":1,"hour":24,"value":12},{"day":2,"hour":1,"value":6},{"day":2,"hour":2,"value":22},{"day":2,"hour":3,"value":0},{"day":2,"hour":4,"value":0},{"day":2,"hour":5,"value":33},{"day":2,"hour":6,"value":5},{"day":2,"hour":7,"value":4},{"day":2,"hour":8,"value":8},{"day":2,"hour":9,"value":28},{"day":2,"hour":10,"value":99},{"day":2,"hour":11,"value":51},{"day":2,"hour":12,"value":66},{"day":2,"hour":13,"value":38},{"day":2,"hour":14,"value":39},{"day":2,"hour":15,"value":60},{"day":2,"hour":16,"value":22},{"day":2,"hour":17,"value":65},{"day":2,"hour":18,"value":50},{"day":2,"hour":19,"value":22},{"day":2,"hour":20,"value":11},{"day":2,"hour":21,"value":12},{"day":2,"hour":22,"value":9},{"day":2,"hour":23,"value":33},{"day":2,"hour":24,"value":13},{"day":3,"hour":1,"value":5},{"day":3,"hour":2,"value":8},{"day":3,"hour":3,"value":44},{"day":3,"hour":4,"value":0},{"day":3,"hour":5,"value":12},{"day":3,"hour":6,"value":2},{"day":3,"hour":7,"value":5},{"day":3,"hour":8,"value":12},{"day":3,"hour":9,"value":34},{"day":3,"hour":10,"value":43},{"day":3,"hour":11,"value":54},{"day":3,"hour":12,"value":44},{"day":3,"hour":13,"value":40},{"day":3,"hour":14,"value":48},{"day":3,"hour":15,"value":54},{"day":3,"hour":16,"value":59},{"day":3,"hour":17,"value":60},{"day":3,"hour":18,"value":51},{"day":3,"hour":19,"value":21},{"day":3,"hour":20,"value":16},{"day":3,"hour":21,"value":9},{"day":3,"hour":22,"value":5},{"day":3,"hour":23,"value":24},{"day":3,"hour":24,"value":7},{"day":4,"hour":1,"value":22},{"day":4,"hour":2,"value":33},{"day":4,"hour":3,"value":102},{"day":4,"hour":4,"value":33},{"day":4,"hour":5,"value":0},{"day":4,"hour":6,"value":2},{"day":4,"hour":7,"value":4},{"day":4,"hour":8,"value":13},{"day":4,"hour":9,"value":26},{"day":4,"hour":10,"value":58},{"day":4,"hour":11,"value":61},{"day":4,"hour":12,"value":59},{"day":4,"hour":13,"value":53},{"day":4,"hour":14,"value":54},{"day":4,"hour":15,"value":64},{"day":4,"hour":16,"value":55},{"day":4,"hour":17,"value":52},{"day":4,"hour":18,"value":53},{"day":4,"hour":19,"value":18},{"day":4,"hour":20,"value":3},{"day":4,"hour":21,"value":9},{"day":4,"hour":22,"value":12},{"day":4,"hour":23,"value":2},{"day":4,"hour":24,"value":8},{"day":5,"hour":1,"value":2},{"day":5,"hour":2,"value":0},{"day":5,"hour":3,"value":8},{"day":5,"hour":4,"value":2},{"day":5,"hour":5,"value":0},{"day":5,"hour":6,"value":2},{"day":5,"hour":7,"value":4},{"day":5,"hour":8,"value":14},{"day":5,"hour":9,"value":31},{"day":5,"hour":10,"value":48},{"day":5,"hour":11,"value":46},{"day":5,"hour":12,"value":50},{"day":5,"hour":13,"value":66},{"day":5,"hour":14,"value":54},{"day":5,"hour":15,"value":56},{"day":5,"hour":16,"value":67},{"day":5,"hour":17,"value":54},{"day":5,"hour":18,"value":23},{"day":5,"hour":19,"value":14},{"day":5,"hour":20,"value":6},{"day":5,"hour":21,"value":8},{"day":5,"hour":22,"value":7},{"day":5,"hour":23,"value":0},{"day":5,"hour":24,"value":84},{"day":6,"hour":1,"value":11},{"day":6,"hour":2,"value":22},{"day":6,"hour":3,"value":33},{"day":6,"hour":4,"value":44},{"day":6,"hour":5,"value":4},{"day":6,"hour":6,"value":0},{"day":6,"hour":7,"value":4},{"day":6,"hour":8,"value":8},{"day":6,"hour":9,"value":8},{"day":6,"hour":10,"value":6},{"day":6,"hour":11,"value":14},{"day":6,"hour":12,"value":12},{"day":6,"hour":13,"value":9},{"day":6,"hour":14,"value":14},{"day":6,"hour":15,"value":0},{"day":6,"hour":16,"value":4},{"day":6,"hour":17,"value":7},{"day":6,"hour":18,"value":6},{"day":6,"hour":19,"value":42},{"day":6,"hour":20,"value":5},{"day":6,"hour":21,"value":77},{"day":6,"hour":22,"value":32},{"day":6,"hour":23,"value":41},{"day":6,"hour":24,"value":0},{"day":7,"hour":1,"value":7},{"day":7,"hour":2,"value":6},{"day":7,"hour":3,"value":11},{"day":7,"hour":4,"value":22},{"day":7,"hour":5,"value":33},{"day":7,"hour":6,"value":44},{"day":7,"hour":7,"value":66},{"day":7,"hour":8,"value":5},{"day":7,"hour":9,"value":33},{"day":7,"hour":10,"value":0},{"day":7,"hour":11,"value":2},{"day":7,"hour":12,"value":2},{"day":7,"hour":13,"value":44},{"day":7,"hour":14,"value":6},{"day":7,"hour":15,"value":0},{"day":7,"hour":16,"value":4},{"day":7,"hour":17,"value":33},{"day":7,"hour":18,"value":2},{"day":7,"hour":19,"value":10},{"day":7,"hour":20,"value":7},{"day":7,"hour":21,"value":0},{"day":7,"hour":22,"value":19},{"day":7,"hour":23,"value":9},{"day":7,"hour":24,"value":4}];

var data2 = [{"day":1,"hour":1,"value":16},{"day":1,"hour":2,"value":20},{"day":1,"hour":3,"value":0},{"day":1,"hour":4,"value":0},{"day":1,"hour":5,"value":0},{"day":1,"hour":6,"value":2},{"day":1,"hour":7,"value":0},{"day":1,"hour":8,"value":9},{"day":1,"hour":9,"value":25},{"day":1,"hour":10,"value":49},{"day":1,"hour":11,"value":57},{"day":1,"hour":12,"value":61},{"day":1,"hour":13,"value":37},{"day":1,"hour":14,"value":66},{"day":1,"hour":15,"value":70},{"day":1,"hour":16,"value":55},{"day":1,"hour":17,"value":51},{"day":1,"hour":18,"value":55},{"day":1,"hour":19,"value":17},{"day":1,"hour":20,"value":20},{"day":1,"hour":21,"value":9},{"day":1,"hour":22,"value":4},{"day":1,"hour":23,"value":0},{"day":1,"hour":24,"value":12},{"day":2,"hour":1,"value":6},{"day":2,"hour":2,"value":2},{"day":2,"hour":3,"value":0},{"day":2,"hour":4,"value":0},{"day":2,"hour":5,"value":0},{"day":2,"hour":6,"value":2},{"day":2,"hour":7,"value":4},{"day":2,"hour":8,"value":11},{"day":2,"hour":9,"value":28},{"day":2,"hour":10,"value":49},{"day":2,"hour":11,"value":51},{"day":2,"hour":12,"value":47},{"day":2,"hour":13,"value":38},{"day":2,"hour":14,"value":65},{"day":2,"hour":15,"value":60},{"day":2,"hour":16,"value":50},{"day":2,"hour":17,"value":65},{"day":2,"hour":18,"value":50},{"day":2,"hour":19,"value":22},{"day":2,"hour":20,"value":11},{"day":2,"hour":21,"value":12},{"day":2,"hour":22,"value":9},{"day":2,"hour":23,"value":0},{"day":2,"hour":24,"value":13},{"day":3,"hour":1,"value":5},{"day":3,"hour":2,"value":8},{"day":3,"hour":3,"value":8},{"day":3,"hour":4,"value":0},{"day":3,"hour":5,"value":0},{"day":3,"hour":6,"value":2},{"day":3,"hour":7,"value":5},{"day":3,"hour":8,"value":12},{"day":3,"hour":9,"value":34},{"day":3,"hour":10,"value":43},{"day":3,"hour":11,"value":54},{"day":3,"hour":12,"value":44},{"day":3,"hour":13,"value":40},{"day":3,"hour":14,"value":48},{"day":3,"hour":15,"value":54},{"day":3,"hour":16,"value":59},{"day":3,"hour":17,"value":60},{"day":3,"hour":18,"value":51},{"day":3,"hour":19,"value":21},{"day":3,"hour":20,"value":16},{"day":3,"hour":21,"value":9},{"day":3,"hour":22,"value":5},{"day":3,"hour":23,"value":4},{"day":3,"hour":24,"value":7},{"day":4,"hour":1,"value":0},{"day":4,"hour":2,"value":0},{"day":4,"hour":3,"value":0},{"day":4,"hour":4,"value":0},{"day":4,"hour":5,"value":0},{"day":4,"hour":6,"value":2},{"day":4,"hour":7,"value":4},{"day":4,"hour":8,"value":13},{"day":4,"hour":9,"value":26},{"day":4,"hour":10,"value":58},{"day":4,"hour":11,"value":61},{"day":4,"hour":12,"value":59},{"day":4,"hour":13,"value":53},{"day":4,"hour":14,"value":54},{"day":4,"hour":15,"value":64},{"day":4,"hour":16,"value":55},{"day":4,"hour":17,"value":52},{"day":4,"hour":18,"value":53},{"day":4,"hour":19,"value":18},{"day":4,"hour":20,"value":3},{"day":4,"hour":21,"value":9},{"day":4,"hour":22,"value":12},{"day":4,"hour":23,"value":2},{"day":4,"hour":24,"value":8},{"day":5,"hour":1,"value":2},{"day":5,"hour":2,"value":0},{"day":5,"hour":3,"value":8},{"day":5,"hour":4,"value":2},{"day":5,"hour":5,"value":0},{"day":5,"hour":6,"value":2},{"day":5,"hour":7,"value":4},{"day":5,"hour":8,"value":14},{"day":5,"hour":9,"value":31},{"day":5,"hour":10,"value":48},{"day":5,"hour":11,"value":46},{"day":5,"hour":12,"value":50},{"day":5,"hour":13,"value":66},{"day":5,"hour":14,"value":54},{"day":5,"hour":15,"value":56},{"day":5,"hour":16,"value":67},{"day":5,"hour":17,"value":54},{"day":5,"hour":18,"value":23},{"day":5,"hour":19,"value":14},{"day":5,"hour":20,"value":6},{"day":5,"hour":21,"value":8},{"day":5,"hour":22,"value":7},{"day":5,"hour":23,"value":0},{"day":5,"hour":24,"value":8},{"day":6,"hour":1,"value":2},{"day":6,"hour":2,"value":0},{"day":6,"hour":3,"value":2},{"day":6,"hour":4,"value":0},{"day":6,"hour":5,"value":0},{"day":6,"hour":6,"value":0},{"day":6,"hour":7,"value":4},{"day":6,"hour":8,"value":8},{"day":6,"hour":9,"value":8},{"day":6,"hour":10,"value":6},{"day":6,"hour":11,"value":14},{"day":6,"hour":12,"value":12},{"day":6,"hour":13,"value":9},{"day":6,"hour":14,"value":14},{"day":6,"hour":15,"value":0},{"day":6,"hour":16,"value":4},{"day":6,"hour":17,"value":7},{"day":6,"hour":18,"value":6},{"day":6,"hour":19,"value":0},{"day":6,"hour":20,"value":0},{"day":6,"hour":21,"value":0},{"day":6,"hour":22,"value":0},{"day":6,"hour":23,"value":0},{"day":6,"hour":24,"value":0},{"day":7,"hour":1,"value":7},{"day":7,"hour":2,"value":6},{"day":7,"hour":3,"value":0},{"day":7,"hour":4,"value":0},{"day":7,"hour":5,"value":0},{"day":7,"hour":6,"value":0},{"day":7,"hour":7,"value":0},{"day":7,"hour":8,"value":0},{"day":7,"hour":9,"value":0},{"day":7,"hour":10,"value":0},{"day":7,"hour":11,"value":2},{"day":7,"hour":12,"value":2},{"day":7,"hour":13,"value":5},{"day":7,"hour":14,"value":6},{"day":7,"hour":15,"value":0},{"day":7,"hour":16,"value":4},{"day":7,"hour":17,"value":0},{"day":7,"hour":18,"value":2},{"day":7,"hour":19,"value":10},{"day":7,"hour":20,"value":7},{"day":7,"hour":21,"value":0},{"day":7,"hour":22,"value":19},{"day":7,"hour":23,"value":9},{"day":7,"hour":24,"value":4}];

var ANIMATION_DURATION = 400;
var TOOLTIP_WIDTH = 30;
var TOOLTIP_HEIGHT = 30;

var ns = {};

ns.create = function(el, props, state) {

               

  var dispatcher = new EventEmitter();
  this.update(el, state, dispatcher);

  return dispatcher;
};

ns.update = function(el, state, dispatcher) {
  var scales = this._scales(el, state.domain);
  var prevScales = this._scales(el, state.prevDomain);
  this._drawPoints(el, scales, state.data, prevScales, dispatcher);
  this._drawTooltips(el, scales, state.tooltips, prevScales);
};

ns._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

ns.heatmapChart = function(data) {

        function(data) {
          var buckets = 9;
          var colorScale = d3.scale.quantile()
              .domain([0, buckets - 1, d3.max(data, function (d) { return d.value; })])
              .range(colors);

          var cards = svg.selectAll(".hour")
              .data(data, function(d) {return d.day+':'+d.hour;});

          cards.append("title");

          cards.enter().append("rect")
              .attr("x", function(d) { return (d.hour - 1) * gridSize; })
              .attr("y", function(d) { return (d.day - 1) * gridSize; })
              .attr("rx", 4)
              .attr("ry", 4)
              .attr("class", "hour bordered")
              .attr("width", gridSize)
              .attr("height", gridSize)
              .style("fill", colors[0]);

          cards.transition().duration(1000)
              .style("fill", function(d) { return colorScale(d.value); });

          cards.select("title").text(function(d) { return d.value; });
          
          cards.exit().remove();

          var legend = svg.selectAll(".legend")
              .data([0].concat(colorScale.quantiles()), function(d) { return d; });

          legend.enter().append("g")
              .attr("class", "legend");

          legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });

          legend.append("text")
            .attr("class", "mono")
            .text(function(d) { return "≥ " + Math.round(d); })
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height + gridSize);

          legend.exit().remove();

        });
};

ns.heatmapChart(datasets[0]);

ns._drawPoints = function(el, scales, data, prevScales, dispatcher) {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.id; });

  point.enter().append('circle')
      .attr('class', 'd3-point')
      .attr('cx', function(d) {
        if (prevScales) {
          return prevScales.x(d.x);
        }
        return scales.x(d.x);
      })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('cx', function(d) { return scales.x(d.x); });

  point.attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); })
      .on('mouseover', function(d) {
        dispatcher.emit('point:mouseover', d);
      })
      .on('mouseout', function(d) {
        dispatcher.emit('point:mouseout', d);
      })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('cx', function(d) { return scales.x(d.x); });

  if (prevScales) {
    point.exit()
      .transition()
        .duration(ANIMATION_DURATION)
        .attr('cx', function(d) { return scales.x(d.x); })
        .remove();
  }
  else {
    point.exit()
        .remove();
  }
};

ns._drawTooltips = function(el, scales, tooltips, prevScales) {
  var g = d3.select(el).selectAll('.d3-tooltips');

  var tooltipRect = g.selectAll('.d3-tooltip-rect')
    .data(tooltips, function(d) { return d.id; });

  tooltipRect.enter().append('rect')
      .attr('class', 'd3-tooltip-rect')
      .attr('width', TOOLTIP_WIDTH)
      .attr('height', TOOLTIP_HEIGHT)
      .attr('x', function(d) {
        if (prevScales) {
          return prevScales.x(d.x) - TOOLTIP_WIDTH/2;
        }
        return scales.x(d.x) - TOOLTIP_WIDTH/2;
      })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; });

  tooltipRect.attr('y', function(d) { return scales.y(d.y) - scales.z(d.z)/2 - TOOLTIP_HEIGHT; })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; });

  if (prevScales) {
    tooltipRect.exit()
      .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', function(d) { return scales.x(d.x) - TOOLTIP_WIDTH/2; })
        .remove();
  }
  else {
    tooltipRect.exit()
        .remove();
  }

  var tooltipText = g.selectAll('.d3-tooltip-text')
    .data(tooltips, function(d) { return d.id; });

  tooltipText.enter().append('text')
      .attr('class', 'd3-tooltip-text')
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(function(d) { return d.z; })
      .attr('x', function(d) {
        if (prevScales) {
          return prevScales.x(d.x);
        }
        return scales.x(d.x);
      })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('x', function(d) { return scales.x(d.x); });

  tooltipText.attr('y', function(d) { return scales.y(d.y) - scales.z(d.z)/2 - TOOLTIP_HEIGHT/2; })
    .transition()
      .duration(ANIMATION_DURATION)
      .attr('x', function(d) { return scales.x(d.x); });

  if (prevScales) {
    tooltipText.exit()
      .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', function(d) { return scales.x(d.x); })
        .remove();
  }
  else {
    tooltipText.exit()
        .remove();
  }
};

ns.destroy = function(el) {

};

module.exports = ns;
