function btn(){
kieli();
sex();
req();

}
function kieli(){
    if (document.getElementById('kieli').checked || document.getElementById('kieli2').checked){
    }else{
        alert('Valitse kieli!')
        event.preventDefault()
    }
}
function sex(){
    if (document.getElementById('mies').checked || document.getElementById('nainen').checked){

    }else{
        alert('Valitse sukupuoli!')
        event.preventDefault()
    }
}
function req(){
    document.getElementById('id').required = true;
    document.getElementById('salasana').required = true;
    document.getElementById('nimi').required = true;
    document.getElementById('osoite').required = true;
    document.getElementById('postinro').required = true;
    document.getElementById('email').required = true;
    document.getElementById('maa').required = true;
}
