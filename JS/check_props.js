const check_props = (n, data) => {
    const zwrotna = document.getElementById("zwrotna").style;
    const przeciwzwrotna = document.getElementById("przeciwzwrotna").style;
    const symetryczna = document.getElementById("symetryczna").style;
    const przeciwsymetryczna = document.getElementById("przeciwsymetryczna").style;
    const antysymetryczna = document.getElementById("antysymetryczna").style;
    const przechodnia = document.getElementById("przechodnia").style;
    const spojna = document.getElementById("spojna").style;

    is_zwrotna(n, data) ? zwrotna.color = "red" : zwrotna.color = "black";
    is_przeciwzwrotna(n, data) ? przeciwzwrotna.color = "red" : przeciwzwrotna.color = "black";
    is_symetryczna(n, data) ? symetryczna.color = "red" :symetryczna.color = "black";
    is_przeciwsymetryczna(n, data) ? przeciwsymetryczna.color = "red" : przeciwsymetryczna.color = "black";
    is_antysymetryczna(n, data) ? antysymetryczna.color = "red" : antysymetryczna.color = "black";
}