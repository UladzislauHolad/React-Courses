import InputCanvas from './inputCanvas.js';

const maxCropShapeWidth = 40;

class Cropper {
    constructor(containerId, cropShape) {
        this.container = document.getElementById(containerId);
        this.cropShape = cropShape;
    }

    init() {
        this.inputCanvas = new InputCanvas('container');
        this.inputImg = new Image();      
        this.inputCanvas.addImage(this.inputImg);
        
        this.cropShape.configure(
            this.inputCanvas.canvas.width/2, 
            this.inputCanvas.canvas.height/2, 
            maxCropShapeWidth, 
            this.inputCanvas.context);
        this.inputCanvas.addShape(this.cropShape);

        this.inputImg.onload = () => {
            debugger
            this.inputCanvas.redraw();
        }  
    }

    loadImg(src) {
        this.inputImg.src = src;
    }

    crop() {
        const croppedImg = this.inputCanvas.getImage();

        return croppedImg;
    }
}

export default Cropper;