let attachment = document.querySelector('#attachment');
let img = document.querySelector('#image');
let closeBtn = document.querySelector('.close-btn');
let label = document.querySelector('.label');

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

