const display = document.getElementById("display");


const set_display = (n, nodes) => {
    for (let i = 0; i < n; i++) {
        const child = document.createElementNS('http://www.w3.org/2000/svg', "g");
        const circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        circle.setAttribute("r", "40");
        circle.setAttribute("fill", "#99BBFF");
        circle.setAttribute("stroke", "#88AAEE");
        circle.setAttribute("stroke-width", "5");
        child.appendChild(circle);
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.innerHTML = `A${i + 1}`;
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("font-size", "20");
        text.setAttribute("fill", "black");
        child.appendChild(text);
        display.appendChild(child);
    }

    arrange_elements(nodes);
}


const arrange_elements = (nodes) => {
    const rect = display.getBoundingClientRect();
    const centerY = rect.height / 2;
    const centerX = rect.width / 2;
    const radius = Math.sqrt(centerX * centerX + centerY * centerY) / 2 - 20;
    const circles = display.querySelectorAll("circle");
    const tags = display.querySelectorAll("text");
    const numElements = circles.length;
    const angleStep = (2 * Math.PI) / numElements;

    for (let i = 0; i < numElements; i++) {
        const angle = i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        nodes.push([x, y])

        circles[i].setAttribute("cx", x);
        circles[i].setAttribute("cy", y);
        tags[i].setAttribute("x", x);
        tags[i].setAttribute("y", y);
    }
}

