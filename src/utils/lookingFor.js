//capturar un dato desde el input y almacenarlo en  el localstorage//
localStorage.setItem("seguro", "no");

const lookingFor = () => {
   // console.log("Hice click")
    let texto = document.getElementById("inputIndex").value;
    localStorage.setItem("puente", texto);
    console.log(texto);
    localStorage.setItem("seguro", "si");
    document.getElementById("inputIndex").value = "";
    
}
export default lookingFor;
