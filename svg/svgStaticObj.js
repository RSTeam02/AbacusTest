class SVGStaticObj {
    
    svgTitle(text) {
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.setAttribute("fill-opacity", .7);
        txt.setAttribute("fill", "black");
        txt.setAttribute("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");
        txt.setAttribute("font-size", "24px");
        txt.textContent = text;
        document.getElementById("svgTitle").appendChild(txt);
    }
  
}
