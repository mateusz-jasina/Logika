const add_loop = (circle, radius) => {
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowPath.setAttribute("d", "M 0 0 L 10 3.5 L 0 7 Z");
    arrowPath.setAttribute("fill", "black");
    marker.appendChild(arrowPath);
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "10");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    defs.appendChild(marker);

    const display = document.getElementById("display");

    display.appendChild(defs)

    // Środek dużego koła
    const rect = display.getBoundingClientRect();
    const largeCircleCenterX = rect.width / 2;
    const largeCircleCenterY = rect.height / 2;

    const cx = circle[0];
    const cy = circle[1];

    const ModX = cx < largeCircleCenterX ? 1 : -1;
    const ModY = cy < largeCircleCenterY ? 1 : -1;

    const dx = cx - largeCircleCenterX;
    const dy = cy - largeCircleCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const startX = cx;
    const startY = cy - radius * ModY;

    const X1 = cx;
    const Y1 = cy - radius * 2 * ModY;

    const X2 = cx - radius * 1.1 * ModX;
    const Y2 = cy - radius * 1.1 * ModY;

    const X3 = cx - radius * 2 * ModX;
    const Y3 = cy;

    const endX = cx - radius * ModX;
    const endY = cy;

    // Tworzenie ścieżki strzałki
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = `
        M ${startX},${startY} 
        Q ${X1},${Y1} ${X2},${Y2} 
        C ${X2},${Y2} ${X3},${Y3} ${endX},${endY}`
        ;
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("marker-end", "url(#arrowhead)"); // Dodanie grota strzałki

    // Dodanie ścieżki do SVG
    display.appendChild(path);
};

