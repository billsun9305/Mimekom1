var href = location.href.split('?')
var data_id = href[1] - 1

var content = document.getElementById("Content")
// create content
var node = document.createElement("div")
node.setAttribute("id", data[data_id].Title)
node.setAttribute("class", "block")
// add title
var title = document.createElement("p")
title.setAttribute("class", "lg-title block-title")
title.innerHTML = data[data_id].Title
node.appendChild(title)
// add date
var date = document.createElement("p")
date.setAttribute("class", "xl-text block-date")
date.innerHTML = "發布日期：" + data[data_id].Date
node.appendChild(date)
// add texts
var texts = document.createElement("p")
texts.setAttribute("class", "lg-text")
texts.innerHTML = data[data_id].Content
node.appendChild(texts)

content.appendChild(node)