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
    reader.fileType = e.target.files[0].type;
    reader.onload = function(e) {
        img.src = e.target.result;
        console.log(reader.fileType)
        if (img.src.length > 0 && (reader.fileType === "image/jpeg" || reader.fileType === "image/png")) {
            img.style.display = "block";
            closeBtn.style.display = "block";
            label.style.display = "flex";
        } else {
            alert("Accept images only");
            return rejectFile();
        }
    }
}

//e.preventdefault() - prevents the default behaviour of the browser
// i.e. open the dropped image in a new tab

closeBtn.addEventListener('click', function() {
    img.src = "";
    img.style.display = "none";
    closeBtn.style.display = "none";
    label.style.display = "none";
})

//add active class when item enters dropzone
dropzone.addEventListener('dragenter', function(e) {
    e.preventDefault();
    dropzone.className += " active";
});

//remove active class when item leaves dropzone
dropzone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    dropzone.className = dropzone.className.replace(" active", "");
});

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', handleDrop);
 
function handleDrop(e) {
    e.preventDefault();
    let data = e.dataTransfer;
    let files = data.files;

    const reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    

    reader.onload = function (e) {
        if (files.length > 0 && (files[0].type === "image/jpeg" || files[0].type === "image/png")) {
        
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
        } else {
            alert("Accept images only");
            return rejectFile();
        }
    }
    console.log(files);
}

closeDrop.addEventListener('click', function() {
    rejectFile();
    dropzone.className = dropzone.className.replace(" active", "");
})

function rejectFile() {
    imageDrop.src = "";
    imageDrop.style.display = "none";
    closeDrop.style.display = "none";
    labelDrop.style.display = "none";
}
