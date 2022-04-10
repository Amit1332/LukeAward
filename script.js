let circle=document.querySelector(".cursor")
let blcircle=document.querySelector(".blcircle")
let wheelcir=document.querySelector(".rowheel")
let arrow=document.querySelector(".arrow")
let wheel=document.querySelector(".wheel")

// window.addEventListener("mousemove",function(dets){
// circle.style.top=dets.pageY+"px"
// circle.style.left=dets.pageX+"px"

// })
window.addEventListener("mousemove",function(dets){
    circle.style.top=`${dets.clientY}px`
    circle.style.left=`${dets.clientX}px`
    // function dfg(){
    //     circle.style.top=`${dets.clientY}px`
    //     circle.style.left=`${dets.clientX}px`
    //     window.requestAnimationFrame(dfg)

    // }
    // window.requestAnimationFrame(dfg)

    })


// TEXT MUSEMOOVE
document.querySelectorAll(".txt").forEach(element => {
    element.addEventListener("mousemove",function(){
        circle.style.height="100px"
        circle.style.width="100px"
        circle.style.backgroundColor="white"
        circle.style.mixBlendMode="difference"

    })
    element.addEventListener("mouseleave",function(){
        circle.style.height="30px"
        circle.style.width="30px"
        circle.style.backgroundColor="transparent"     
        circle.style.mixBlendMode="initial"



    })
});



// IMAGE MOUSEMOVE EFFECT
let body=document.querySelector(".main")
document.querySelectorAll(".imgEffect").forEach(element => {
    element.addEventListener("mousemove",function(dets){
        wheelcir.style.top=`${dets.clientY}px`
        wheelcir.style.left=`${dets.clientX}px`
        wheelcir.style.display="block"
         circle.style.display="none"
         wheelcir.style.backgroundColor="white"
         wheelcir.style.mixBlendMode="difference"
         body.style.backgroundColor=dets.target.dataset.color
        // function abcd(){
        //   wheelcir.style.top=`${dets.clientY}px`
        //  wheelcir.style.left=`${dets.clientX}px`
        //  window.requestAnimationFrame(abcd)

        // }
        //  window.requestAnimationFrame(abcd)


    })
    element.addEventListener("mouseleave",function(){
        
        wheelcir.style.display="none"
        circle.style.display="initial"
        body.style.backgroundColor="white"
        
    })
});


// BLACK CIRCLE

blcircle.addEventListener("mousemove",function(dets){
    blcircle.style.transform=`translate(${dets.clientX*.22}px,${dets.clientY*.099}px)`
})
blcircle.addEventListener("mouseleave",function(dets){
    blcircle.style.transform=`translate(0,0)`
})

// ICON MENU
let cancel=document.querySelector(".cancel")
let menutxt=document.querySelector(".menutxt")

document.querySelector(".nav .menu").addEventListener("click",function(){
    menu.style.transform="rotate(180deg)"
    menu.style.backgroundColor="white"
    menutxt.style.display="block"
    gsap.to(".nav span",{
        width:"300px"
    })
    setTimeout(() => {
        menu.style.display="none"
        cancel.style.display="block"
    menu.style.transform="rotate(0deg)"
    cancel.style.backgroundColor="white"
    

    }, 500);
    
})

let menu=document.querySelector(".menu")
document.querySelector(".nav .cancel").addEventListener("click",function(){
cancel.style.transform="rotate(180deg)"
menu.style.backgroundColor="white"

gsap.to(".nav span",{
    width:"80px"
})

setTimeout(() => {
    menu.style.display="block"
    cancel.style.display="none"
    cancel.style.transform="rotate(0deg)"
    menutxt.style.display="none"

}, 500);


})

// GSAP

// gsap.to(".heading h1",{
//     y:0,
//     stagger:0.1,
    
// })



// HEADING ANIMATION
// $('.heading h1').textillate({
//     in:{
//         effect:"fadeInUp"
//     },
//     loop:true,
//     out:{
//         effect:"fadeOutRight"
//     }
// })
$('.heading h1').textillate({ in: { effect: 'fadeInUp' } });
$('.blocka h1').textillate({ in: { effect: 'fadeInUp', } });


// START LOADER
gsap.to(".start",{
    height:0,
    duration:2,
    delay:1
    
})






























// document.querySelector(".insider").addEventListener("mousemove",function(){
//     document.querySelector(".cursor").style.height="100px"
    
//     document.querySelector(".cursor").style.width="100px"
//     document.querySelector(".cursor").style.backgroundColor="rgba(105, 103, 103, 0.304)"
    

// })
// document.querySelector(".insider").addEventListener("mouseleave",function(){
//     document.querySelector(".cursor").style.height="30px"
//     document.querySelector(".cursor").style.width="30px"
//     document.querySelector(".cursor").style.backgroundColor="rgba(105, 103, 103, 0.304)"
    

// })



