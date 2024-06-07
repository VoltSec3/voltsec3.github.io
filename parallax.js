document.addEventListener("mousemove", function(e) {
    const content = document.querySelector(".content");
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20; // Adjust the division value for intensity
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20; // Adjust the division value for intensity
    content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(50px)`; // Add translateZ for 3D effect
});
