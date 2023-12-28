gsap.from(".para1, .para2",{
    x: -350,
    duration: 2,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".para1, .para2",
        scroller: "body"       
    }
});

gsap.from(".abtcontent",{
    x:350,
    duration: 2.5,
    opacity: 0,
    scrollTrigger:{
        trigger: ".abtcontent",
        scroller: "body"       
    }
})