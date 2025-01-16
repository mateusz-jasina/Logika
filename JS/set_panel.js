const set_panel = (n, array) => {
  const panel = document.querySelector("#control-panel");
  
  panel.style.gridTemplateColumns = "1fr ".repeat( parseInt(n) + 1 );
  panel.style.gridTemplateRows = "1fr ".repeat( parseInt(n) + 1 );
  
  panel.innerHTML = '<div class="control-tag">X</div>';
  for ( let i = 0; i < n; i++ ) {
    const child = document.createElement('div');
    child.classList.add("control-tag");
    child.innerHTML = `<span>A${ i + 1 }</span>`;
    panel.appendChild(child)
  }
  for ( let y = 0; y < n; y++ ) {
    const child = document.createElement('div');
    child.classList.add("control-tag");
    child.innerHTML = `<span>A${ y + 1 }</span>`;
    panel.appendChild(child)
  
    for ( let x = 0; x < n; x++ ) {
      const child = document.createElement('div');
      child.id = `${y}-${x}`;
      child.classList.add("control-element");
      child.addEventListener("click", e => {
        child.classList.toggle("control-element-check");
        let temp = child.id.split('-');
        let x = temp[1];
        let y = temp[0];
        array[y][x] = !array[y][x];
        // add_arrow(nodes[y], nodes[x]);
        reload_display();
      });
      child.innerHTML = `<span>X</span>`;
      panel.appendChild(child);
    }
  }
}

