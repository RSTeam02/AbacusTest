class SVGMatObject {

    svgCircle(...property) {
        let led = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        led.setAttribute("id", property[3]);
        led.setAttribute("cx", 20);
        led.setAttribute("transform", `translate(${property[1]} ${property[2]})`);
        led.setAttribute("cy", 20);
        led.setAttribute("r", 20);
        led.setAttribute("fill-opacity", property[0].opacity);
        led.setAttribute("fill", `url(${property[0].color})`);
        document.getElementById("ledDisplay").appendChild(led);
    }

    svgNum(...property) {
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        let numMode;
        txt.setAttribute("cursor", "pointer");
        txt.setAttribute("transform", "translate(5,20)");
        txt.setAttribute("id", property[3]);
        txt.setAttribute("x", property[1] + 10);
        txt.setAttribute("y", property[2] + 35);
        txt.setAttribute("fill-opacity", property[0].opacity);
        txt.setAttribute("fill", `url(${property[0].color})`);
        txt.setAttribute("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");
        txt.setAttribute("font-size", "24px");
        txt.setAttribute("style", "writing-mode: vertical-rl");
        txt.setAttribute("transform", "translate(6,-23)");
        (property[0].opacity === 1)
            ? numMode = document.createTextNode(Math.pow(2, (5 - property[3] % 6)))
            : numMode = document.createTextNode(0);
        txt.appendChild(numMode);
        document.getElementById("ledDisplay").appendChild(txt);
    }

}