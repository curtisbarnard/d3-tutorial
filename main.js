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

// set xScale
const xScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([0,svgWidth])

// set yScale
const yScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([0,svgHeight])

// Set x-axis
const x_axis = d3.axisBottom().scale(xScale)
const xAxisTranslate = svgHeight - 20
svg.append('g').attr('transform', 'translate(50, ' + xAxisTranslate + ')').call(x_axis)

// Set y-axis
const y_axis = d3.axisLeft().scale(yScale)
svg.append('g').attr('transform', 'translate(50, 10)').call(y_axis)

// add data to svg
const barChart = svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('y', function(d) {
    return svgHeight - yScale(d)
})
.attr('height', function(d) {
    return yScale(d)
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