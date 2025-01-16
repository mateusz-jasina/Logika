const add_arrow = (circleA, circleB) => {
    const display = document.getElementById("display");
    const radius = 50;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "10");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");

    const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowPath.setAttribute("d", "M 0 0 L 10 3.5 L 0 7 Z");
    arrowPath.setAttribute("fill", "black");
    marker.appendChild(arrowPath);
    defs.appendChild(marker);
    display.appendChild(defs);

    if (circleA == circleB) {
        add_loop(circleA, radius);
    } else {

        const offset = 10;

        const x1 = circleA[0];
        const y1 = circleA[1];
        const x2 = circleB[0];
        const y2 = circleB[1];

        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Oblicz jednostkowy wektor prostopadły
        const perpDx = -(dy / distance); // Wektor x prostopadły
        const perpDy = dx / distance;   // Wektor y prostopadły

        const startX = x1 + (dx / distance) * radius + perpDx * offset;
        const startY = y1 + (dy / distance) * radius + perpDy * offset;
        const endX = x2 - (dx / distance) * radius + perpDx * offset;
        const endY = y2 - (dy / distance) * radius + perpDy * offset;

        const arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrow.setAttribute("x1", startX);
        arrow.setAttribute("y1", startY);
        arrow.setAttribute("x2", endX);
        arrow.setAttribute("y2", endY);
        arrow.setAttribute("stroke", "black");
        arrow.setAttribute("stroke-width", "2");
        arrow.setAttribute("marker-end", "url(#arrowhead)");


        display.appendChild(arrow);
    }
}