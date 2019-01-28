console.log("hi there");
d3.json("./data/tasks.json",{credentials: "same-origin"})
.then(function(tasks)
{
  console.log(tasks);
  var divs = d3.select("#tasks")
        .selectAll("div")
        .data(tasks)
        .enter()
        .append("div");

  divs.append('h3')
    .text(function(d){return d.title});
  divs.append("p")
    .text(function(d){return d.desc});
}
,function(err) {console.log("unable to retrieve "+err);}
);
