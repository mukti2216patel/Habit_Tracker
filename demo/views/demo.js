gsap.from(".title", {
    opacity: 0,  
    y:-20,
    duration: 1.2,  
    ease: "power.out"
});

gsap.from("#loginnavside",
{
    opacity: 0,  
    y:-20,
    duration: 1.2,  
    ease: "power.out"
});
gsap.from(".svgrun",
{    
    opacity: 0,  
    delay:0.7,
    duration: 1.2,  
    ease: "power.out"
});
gsap.from(".formlogin",
{ 
        opacity: 0, 
        delay:0.7, 
        duration: 1.2,  
       ease: "power.out"
});
gsap.from(".svgmap", {
    opacity: 0,
    delay: 1.5,
    duration: 1.2
});

gsap.from(".welcome span", {
    opacity: 0,
    y: 50,
    rotation: 10,
    delay:2,
    duration: 0.7,
    stagger: 0.1,
    ease: "back.out(2)",
});
