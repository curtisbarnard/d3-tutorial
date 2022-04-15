const dataset = [10, 20, 30, 40, 290, 50, 60, 70, 80]

// bar styling and size
const svgWidth = 500
const svgHeight = 500
const barPadding = 10
const barWidth = (svgWidth/dataset.length)

// set svg width & height on DOM
const svg = d3.select('svg')
.attr('width', svgWidth)
.attr('height', svgHeight)

// add data to svg
const barChart = svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('y', function(d) {
    return svgHeight - d
})
.attr('height', function(d) {
    return d
})
.attr('width', barWidth - barPadding)
.attr('transform', function(d,i) {
    const translate = [barWidth * i, 0]
    return 'translate(' + translate + ')'
})

// add labels to bar chart
const text = svg.selectAll('text')
.data(dataset)
.enter()
.append('text')
.text(function(d) {
    return d
})
.attr('y', function(d) {
    return svgHeight - d - 2
})
.attr('x', function(d, i) {
    return barWidth * i
})
.attr('fill', '#000000')