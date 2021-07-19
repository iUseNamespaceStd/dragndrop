let attachment = document.querySelector('#attachment');
let fileUpload = document.querySelector('#uploaded');
let fileData;

function getInputFile(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(e) {
        fileData = e.target.result;
        fileUpload.src = fileData;
    }
    console.log(e.target.files[0])

    // if (fileUpload.src.length != 0) {
    //     fileUpload.style.display = "block";
    // } else {
    //     fileUpload.style.display = "none";
    // }
}
