const scrollerTotal = scrollama();

scrollerTotal
  .setup({
    step: ".content-step",
  })
  .onStepEnter((response) => {
    console.log(response.index);
    if (response.element.hasAttribute("datadate")) {
      d3.select("#date-placeholder")
        .transition()
        .duration(500)
        .text(response.element.attributes.datadate.nodeValue);
    }

    if (response.element.hasAttribute("datawiev")) {
      if (response.element.attributes.datawiev.nodeValue == "war") {
        d3.select("#type-placeholder")
          .transition()
          .duration(500)
          .attr("class", "date-type war")
          .text("ВІЙСЬКОВИЙ ВИМІР");

        d3.select("#stiky-header")
          .transition()
          .duration(500)
          .attr("class", "black-back");
      } else {
        d3.select("#type-placeholder")
          .transition()
          .duration(500)
          .attr("class", "date-type")
          .text("ЦИВІЛЬНИЙ ВИМІР");

        d3.select("#stiky-header")
          .transition()
          .duration(500)
          .attr("class", "white-back");
      }
    }
  })
  .onStepExit((response) => {
    // if (response.index == 0 && response.direction == 'up') {
    //     map.flyTo([47.11, 37.57], 12)
    //     d3.select('#mask')
    //         .transition()
    //         .duration(500)
    //         .style('opacity', '0.5')
    // }
  });
