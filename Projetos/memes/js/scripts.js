function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input");
    imageInput.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result;
            changeMemePicture(uploadImage);
        });
        reader.readAsDataURL(this.files[0]);
    });
}

async function mapImageList() {
    const memesObject = [
        {
            "name": "assustador",
            "path": "./img/assustador.webp"
        },
        {
            "name": "cachorro o grito",
            "path": "./img/cachorro-o-grito.webp"
        },
        {
            "name": "careta",
            "path": "./img/careta.webp"
        },
        {
            "name": "chocada",
            "path": "./img/chocada.webp"
        },
        {
            "name": "chupando limão",
            "path": "./img/chupando-limão.webp"
        },
        {
            "name": "coraçãozinho",
            "path": "./img/coraçãozinho.webp"
        },
        {
            "name": "cozinhando",
            "path": "./img/cozinhando.webp"
        },
        {
            "name": "dentinhos",
            "path": "./img/dentinhos.webp"
        },
        {
            "name": "espanto",
            "path": "./img/espanto.webp"
        },
        {
            "name": "impaciente",
            "path": "./img/impaciente.webp"
        },
        {
            "name": "joinha",
            "path": "./img/joinha.webp"
        },
        {
            "name": "lerigo",
            "path": "./img/lerigo.webp"
        },
        {
            "name": "madruga",
            "path": "./img/madruga.webp"
        },
        {
            "name": "mimimi",
            "path": "./img/mimimi.webp"
        },
        {
            "name": "MonaBean",
            "path": "./img/MonaBean.webp"
        },
        {
            "name": "Monalisa paz",
            "path": "./img/Monalisa-paz.webp"
        },
        {
            "name": "sorisso",
            "path": "./img/sorisso.webp"
        }
    ]
    return memesObject;
}

async function creatGallery(imageList) {
    const memeSelector = document.querySelector("#meme-list");
    imageList.forEach(picture => {
        let newOption = document.createElement("option");
        newOption.text = picture.name.toUpperCase();
        newOption.value = picture.path;
        memeSelector.appendChild(newOption);
    
    });
}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image");
    displayImage.style.backgroundImage = `url('${photo}')`;
}

async function main() {
    const memesImageList = await mapImageList();
    enablePhotoUpload();
    await creatGallery(memesImageList);
    await changeMemePicture(memesImageList[0].path);
}
main();

document.querySelector("#btn-download").onclick = () =>{
    const screenshotPrint = document.querySelector("#screenshot");
    html2canvas(screenshotPrint).then((canvas)=>{
        const base64Image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.setAttribute("href", base64Image);
        anchor.setAttribute("download", "my-meme.png");
        anchor.click();
        anchor.remove();
    });
}