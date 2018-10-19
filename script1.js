function chaos() {
    let s11 = document.querySelector("#s11").value;
    let s12 = document.querySelector("#s12").value; 
    let s13 = document.querySelector("#s13").value; 
    let s21 = document.querySelector("#s21").value; 
    let s22 = document.querySelector("#s22").value; 
    let s23 = document.querySelector("#s23").value; 
    let s31 = document.querySelector("#s31").value; 
    let s32 = document.querySelector("#s32").value; 
    let s33 = document.querySelector("#s33").value; 
    
    let determinant = s11 * (s21*s32 - s12*s22) - s13 * (s23*s31 - s31*s11) + s21 * (s22*s31 - s13*s33);
    document.querySelector("#result").innerHTML = determinant.toString();
}
document.querySelector("#determinant").onclick = function() {
    chaos();
};