function addUp () {
    const msj = document.getElementById("msj");
    console.log(msj);
    setTimeout(() => {
        msj.classList.remove("none");
        msj.classList.add("show")
    }, 3000);
}

addUp()