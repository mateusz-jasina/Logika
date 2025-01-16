// const n = prompt("Ile elementów ma mieć relacja?");
const n = 3;
let nodes = [];

let data = []
for ( let y = 0; y < n; y++){
  data.push([]);
  for ( let x = 0; x < n; x++){
    data[y].push(false);
  }
}

set_panel(n, data);
set_display(n, nodes);
