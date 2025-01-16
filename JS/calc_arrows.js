const calc_arrows = (n, nodes, data) => {
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (data[y][x]) {
                add_arrow(nodes[y], nodes[x]);
            }
            
        }
        
    }
}