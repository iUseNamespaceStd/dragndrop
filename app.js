let attachment = document.querySelector('#attachment');
let dropzone = document.querySelector('.dropzone');
let img = document.querySelector('#image');
let closeBtn = document.querySelector('.close-btn');
let label = document.querySelector('.label');
let imageDrop = document.createElement("img");
let closeDrop = document.createElement("div");
let labelDrop = document.createElement("div");

function getInputFile(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    label.innerHTML = e.target.files[0].name;
    reader.onload = function(e) {
        img.src = e.target.result
        if (img.src.length > 0) {
            img.style.display = "block";
            closeBtn.style.display = "block";
            label.style.display = "flex";
        }
    }
}

closeBtn.addEventListener('click', function() {
    img.src = "";
    img.style.display = "none";
    closeBtn.style.display = "none";
    label.style.display = "none";
})

dropzone.addEventListener('dragenter', preventDefault);
dropzone.addEventListener('dragleave', preventDefault);
dropzone.addEventListener('dragover', preventDefault);
dropzone.addEventListener('drop', preventDefault);

dropzone.addEventListener('drop', handleDrop, false);
function preventDefault(e) {
    e.preventDefault();
}
 
function handleDrop(e) {
    let data = e.dataTransfer;
    let files = data.files;

    const reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    // labelDrop.innerHTML = e.dataTransfer.files[0].name;
    reader.onload = function (e) {
        if (files.length > 0) {
        
            imageDrop.src = e.target.result;
            closeDrop.innerHTML = "&times;";
            labelDrop.innerHTML = files[0].name;

            imageDrop.id = "image-drop";
            closeDrop.id = "close-drop";
            labelDrop.id = "label-drop";

            imageDrop.style.display = "block";
            closeDrop.style.display = "block";
            labelDrop.style.display = "flex";

            dropzone.appendChild(imageDrop);
            dropzone.appendChild(closeDrop);
            dropzone.appendChild(labelDrop);
        }
    }
}

closeDrop.addEventListener('click', function() {
    imageDrop.src = "";
    imageDrop.style.display = "none";
    closeDrop.style.display = "none";
    labelDrop.style.display = "none";
})

