let blur = document.querySelector("#blur");
let bigBlur = document.querySelector("#bigBlur");

console.log(blur);
document.addEventListener("mousemove", function (e) {
   // console.log(e);
   blur.style.left = e.x + "px"
   blur.style.top = e.y + "px"
   bigBlur.style.left = e.x - 100 + "px"
   bigBlur.style.top = e.y - 100 + "px"
});


// responsive navbar
let mobile = document.querySelector(".fas");
let mobile_nav = document.querySelector("#navbar");
let check = 0;

mobile.addEventListener("click", function (e) {

   if (check == 0) {
      mobile_nav.style.display = "block";
      mobile.innerHTML = "X"
      check = 1
   } else {
      mobile_nav.style.display = "none";
      mobile.innerHTML = "="
      check = 0
   }
});
// nav hover effect

let navItems = document.querySelectorAll("#navbar ul li a");

// console.log(navItems);
navItems.forEach(item => {
   item.addEventListener("mouseenter", (e) => {
      // console.log(e);
      // e.target.style.border = "1px solid #fff";
      blur.style.transform = "scale(2.3)"
      blur.style.border = "1px solid #fff";
      blur.style.backgroundColor = "transparent";
   });
   item.addEventListener("mouseleave", (e) => {
      blur.style.transform = "scale(1)"
      blur.style.border = "0px solid #fff";
      blur.style.backgroundColor = "#7ef43a";
   });
});

// timeline

let timeline = gsap.timeline();

gsap.to("#navbar", {
   background: "#090909",
   duration: 0.6,
   scrollTrigger: {
      trigger: "#navbar",
      scroller: "body",
      start: "top -10%",
      end: "top -13%",
      scrub: 2,
   }
});

gsap.to("#EAT", {
   background: "#000",
   scrollTrigger: {
      trigger: "#EAT",
      scroller: "body",
      start: "20%",
      end: "40%",
      scrub: 2,
   }
});


gsap.from(".about_us .about_img, .about_text", {
   y: 50,
   stagger: 0.5,
   opacity: 0,
   scrollTrigger: {
      trigger: ".about_us .about_img, .about_text",
      scroller: "body",
      start: "top 95%",
      end: "top 60%",
      scrub: 1,
   }

})
gsap.from(".about_images .about_img2", {
   scale: 0,
   opacity: 0,
   scrollTrigger: {
      trigger: ".about_images .about_img2",
      scroller: "body",
      start: "top 85%",
      end: "top 50%",
      scrub: 2,
   }
})

// qoutation
gsap.from(".page_3 .left, .page_3 .right", {
   x: 50,
   scrollTrigger: {
      trigger: ".page_3 .left, .page_3 .right",
      scroller: "body",
      start: "top 70%",
      end: "50%",
      scrub: 1,
   }
});
gsap.from(".card h1", {
   x: 300,
   opacity: 0,
   scrollTrigger: {
      trigger: ".card h1",
      scroller: "body",
      start: "top 110%",
      end: "30%",
      scrub: 1,
   }
});

gsap.from(".card .cards", {
   y: -80,
   scrollTrigger: {
      trigger: ".card .cards",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
   }
})