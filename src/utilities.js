// function to draw on the screen or web cam canvas


export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        //styling
        // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const color = 'black'
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;
        //draw rectangle
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
}



