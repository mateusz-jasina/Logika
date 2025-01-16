const reload_display = () => {
    const display = document.getElementById("display");
    display .innerHTML = '';
    set_display(n, nodes);
    calc_arrows(n, nodes, data);
    check_props(n, data);
}