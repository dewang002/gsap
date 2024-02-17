let tl = gsap.timeline();
tl.from("nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
});
tl.from(".menu-icon",{
  y:-50,
  opacity:0,

})
tl.from("#page1 h1", {
  x: "-100",
  opacity: 0,
  duration: 0.5,
});

tl.from(".imgpart img", {
  opacity: 0,
  y: 100,
  duration: 1,
});
tl.to("#img2", {
  rotate: -10,
  duration: 0.3,
});
tl.to("#img3", {
  rotate: -20,
  duration: 0.2,
});

gsap.to("#page2 img",{
    width:"800px",
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:4,
        pin:true
    }
})
gsap.to("#page3 h1",{
  transform:`translateX(-55%)`,
  duration:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    // markers:true,
    start:"top 0",
    end:"top -100%",
    scrub:4,
    pin:true
  }

})



