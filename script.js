function math(){
    let c = parseInt(document.getElementById("c").value);
    let i = parseInt(document.getElementById("i").value);
    let g = parseInt(document.getElementById("g").value);
    let x = parseInt(document.getElementById("x").value);
    let m = parseInt(document.getElementById("m").value);
    return c + i + g + (x - m);
    };

    document.getElementById("keisan_button").onclick = function(){
        let y = math();
        document.getElementById("y").textContent = y;
        };