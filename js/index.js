function tombolAksi(){
    var x = document.getElementsByClassName("cM");
    var i;
    var y = document.getElementById("ksl");
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function() {
            var b = this.innerHTML;
            if (y.innerHTML == "0") {
                y.innerHTML = b;
            } else {
                y.innerHTML += b;
            }
        });
    }
}

function hapusall() {
    document.getElementById("ksl").innerHTML = "0";
    document.getElementById("Mnb").innerHTML = "Masukan Nilai";
}

function hapuss() {
    var x = document.getElementById("ksl").innerText;
    if (x.length == 1) {
        document.getElementById("ksl").innerHTML = "0";
    } else {
        document.getElementById("ksl").innerHTML = x.substr(0, x.length - 1);
    }
}

window.onload = function() {
    tombolAksi();
}

function aksion(value) {
    var b = document.getElementById("Mnb");
    var y = document.getElementById("ksl").innerHTML;
    b.innerHTML = y + " " + value;
    document.getElementById("ksl").innerHTML = "0";
}

function hitung() {
    var b = document.getElementById("Mnb");
    var y = document.getElementById("ksl").innerHTML;
    b.innerHTML = b.innerText + " " + y;

    var v = b.innerText.split(" ");
    var jumlah;

    var num1 = parseFloat(v[0]);
    var num2 = parseFloat(v[2]);

    if (v[1] == "+") {
        jumlah = num1 + num2;
    } else if (v[1] == "-") {
        jumlah = num1 - num2;
    } else if (v[1] == ":") {
        jumlah = num1 / num2;
    } else if (v[1] == "x") {
        jumlah = num1 * num2;
    }

    document.getElementById("ksl").innerHTML = jumlah;
    document.getElementById("Mnb").innerHTML = "Masukan Nilai";
}

document.querySelector('.mqw button.cM[onclick="aksion(\'.\')"]').addEventListener("click", function() {
    var y = document.getElementById("ksl");
    if (!y.innerHTML.includes(".")) {
        y.innerHTML += ".";
    }
});
