function lesData(){
    
    // henter verdier fra DOM
    let h1 = document.getElementById("h1").textContent;
    console.log(h1);
    
    let farge = document.getElementById("farge").value;
    console.log(farge)

    let fornavn = document.getElementById("fnavn").value;
    let etternavn = document.getElementById("enavn").value
    
    // skriver nye verdier til DOM
    document.getElementById("utskrift").innerHTML = "de utleste verdiene er " + h1 + " " + farge + " " +fornavn + " " + etternavn;
}


