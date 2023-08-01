
alert("Iltimos kamerangizni holatini korishni hohlasangiz kameraga ruxsat bering !")

const video = document.querySelector('#mywebcam');
const btn_stream = document.querySelector(".btn-stream");
const text = document.querySelector(".text")

btn_stream.addEventListener("click", ()=> {
    
    btn_stream.style.display = "none"

    text.innerHTML = "Ekraningiz hajimi " + window.screen.width + "x" + window.screen.height

    window.navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })
    .catch( () => {
        alert('Siz kameraga ruxsat bermadingiz ! ');
    });
})