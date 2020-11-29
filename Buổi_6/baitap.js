abc = () => {
let a = document.getElementById('input1').value;
let b = document.getElementById('input2').value = a;
    if (a.length > 10) {
        alert('bạn viết thừa kí tự');
    } else if (a.length < 3) {
        alert('bạn viết quá ít kí tự');
    } else {
        alert('oke');
    }
};