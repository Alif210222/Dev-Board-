function getInnerTextById (id){
    const value = document.getElementById(id).innerText;
    const convertvalue = parseInt(value);
    return convertvalue;  
}
