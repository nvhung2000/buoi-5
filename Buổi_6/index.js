//if else,else if(vô hạn chuỗi else if)
let age = 36;
function myfunction() {
    if (age === 25) { // bằng
        alert('oke');
    } else if (age === 35) { // hoặc bằng
        alert("false else if");
    } else { // nếu không bằng, hoặc bằng
        alert("else false");
    }
}
myfunction();

// swith case
switch (age) {
    case 1:
        alert('ok');
        break;
    case 2:
        alert('false');
        break;
    default:
        alert('óc chó trung chí nguyễn');
}

//biến toàn cục khai báo trên ngoài function , biến cục bộ khai báo trong function
function mefunction() {
    let hello = "hello word";
    alert(hello);
}
mefunction();

//settimeout
function myfunction() {
    setTimeout(function () {
        alert('trung cho');
    }, 6000);//sau 6s
}

//Vòng lặp for để lập nhưng phần tử biết trước, và for each
function myfunction(){
    let arr = [1,2,3,4,5,6,7,8,9,10];

    for(let i = 1; i < arr.length; i++){
        alert(arr[i]);
    }
}