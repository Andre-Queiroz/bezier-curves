window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var p0 = new point(canvas.width - canvas.width, canvas.height - canvas.height);
    var p1 = new point(canvas.width - canvas.width, canvas.height);
    var p2 = new point(canvas.width, canvas.height);
    var p3 = new point(canvas.width, canvas.height - canvas.height);
  
    drawBezierStrings(p0, p1, p2, 'purple', ctx);
    drawBezierStrings(p1, p2, p3, 'purple', ctx);
    drawBezierStrings(p2, p3, p0, 'purple', ctx);
    drawBezierStrings(p3, p0, p1, 'purple', ctx);
});