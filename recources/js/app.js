function checkIt(){

    if(document.formularz.tekst.value == "" || document.formularz.tekst1.value == "")
    {
        alert("Uzupełnij pola formularza");
    }
    return false;

}