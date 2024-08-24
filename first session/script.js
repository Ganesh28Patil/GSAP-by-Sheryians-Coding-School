gsap.to("#box1",{
    x: 800,
    duration:2,
    delay:1
})
gsap.from("#box2",{
    x:800,    
    duration:2,
    delay:1,
})

// gsap.to("#box2",{
//     x:300,
//     y:300,
//     duration:2,
//     delay:1,
// })

// gsap.to('#box3',{
//     x:1200,
//     duration:1,
//     delay:2,
//     rotate:360,
//     // backgroundColor:"blue",    
// })
gsap.from('#box3',{
    x:1200,
    duration:2,
    delay:2,
    rotate:360,
    // backgroundColor:"blue",    
})

gsap.from('h1',{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.3
})

gsap.to("#yoyo",{
    x:900,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true
})

gsap.to("#red",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,    
})
gsap.to("#green",{
    x:1000,
    duration:2,
    delay:3,
    rotate:360,    
})
gsap.to("#blue",{
    x:800,
    duration:2,
    delay:5,
    rotate:360,    
})