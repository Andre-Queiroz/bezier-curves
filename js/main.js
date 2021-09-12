window.addEventListener('load', fractal());

function fractal() {
    const sketch = new Sketch('#canvas', '2d');
    const fractal = new Fractal(sketch);

    sketch.setup();

    var p0 = new point(0,0);
    var p1 = new point(0, sketch.getCanvasHeight());
    var p2 = new point(sketch.getCanvasWidth(), sketch.getCanvasHeight());
    var p3 = new point(sketch.getCanvasWidth(), 0);

    
    fractal.bezier(p0, p1, p2, 'purple');
    fractal.bezier(p1, p2, p3, 'purple');
    fractal.bezier(p2, p3, p0, 'purple');
    fractal.bezier(p3, p0, p1, 'purple');
}