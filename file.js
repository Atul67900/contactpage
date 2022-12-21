
$('#topProducts').mouseover(function(){
    $('#navigateBtn').animate({opacity: 1}, 100);
})


$('#nav').animate({opacity:1}, 1000,(function(){
    
    $('#slidermain').animate({opacity:1}, 1000, (function(){
        $('h1').animate({opacity:1}, 2000, (function(){
            $('#last').animate({opacity:1}, 1000);
        }));
    }));
}));


$('#slogan').mouseover(function(){
    $('#sloganMain').animate({opacity: 1}, 500);
})



// DropDown

let list = document.getElementById("list");
let shop = document.getElementById("shop");

function dropdownShow(){
    list.style.display = "block";
    shop.style.background = "rgb(255, 225, 0)";
}

function dropdownhide(){
    list.style.display = "none";
    shop.style.background = "none";
}


// HAMBURGER

let navbar = document.getElementById("navbar");

function openMenu(){
    // hamburger.style.display = "block"
    navbar.style.width = "60%";
    navbar.style.padding = "0 1rem";
}
function closeMenu(){
    // hamburger.style.display = "none"
    navbar.style.width = "0%";
    navbar.style.padding = "0";
}



var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });



  let links = document.getElementById("links");
  let closeBtn = document.getElementById("closeBtn");
  let expandBtn = document.getElementById("expandBtn");

  function expand(){
      // hamburger.style.display = "block"
      links.style.height = "12rem";
      closeBtn.style.display = "block";
      expandBtn.style.display = "none";
  }
  function hidesocial(){
      // hamburger.style.display = "none"
      links.style.height = "0";
      closeBtn.style.display = "none";
      expandBtn.style.display = "block";
  }


// Product Page


// slider


let slide = document.getElementById("slide");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

let x = 0;
        next.onclick = function(){
            if(x > "-120"){
               x = x - 42;
            slide.style.left = x + "rem"; 
            }
                
        }
        previous.onclick = function(){
            if(x < 0){
               x = x + 42;
            slide.style.left = x + "rem"; 
            }
            
                
        }

        let block1 = document.getElementById("block1");
        let block2 = document.getElementById("block2");
        let block3 = document.getElementById("block3");
        let block4 = document.getElementById("block4");
        
        
        block1.onclick = function(){
            slide.style.left = "0";
            block2.style.border = "none";
            block3.style.border = "none";
            block4.style.border = "none";
            block1.style.border = "0.2rem solid yellow"
        }
        block2.onclick = function(){
            slide.style.left = "-32rem";
            block1.style.border = "none";
            block3.style.border = "none";
            block4.style.border = "none";
            block2.style.border = "0.2rem solid yellow"
        }
        block3.onclick = function(){
            slide.style.left = "-64rem";
            block1.style.border = "none";
            block2.style.border = "none";
            block4.style.border = "none";
            block3.style.border = "0.2rem solid yellow"
        }
        block4.onclick = function(){
            slide.style.left = "-96rem";
            block1.style.border = "none";
            block3.style.border = "none";
            block2.style.border = "none";
            block4.style.border = "0.2rem solid yellow"
        }

// faded funtionality


let faded = document.getElementById("faded");
function show(){
    faded.style.display = "grid";
}
function hide(){
    faded.style.display = "none";
}




let slide2 = document.getElementById("slide2");

let block5 = document.getElementById("block5");
let block6 = document.getElementById("block6");
let block7 = document.getElementById("block7");
let block8 = document.getElementById("block8");


block5.onclick = function(){
    slide2.style.left = "0";
    block6.style.border = "none";
    block7.style.border = "none";
    block8.style.border = "none";
    block5.style.border = "0.2rem solid yellow"
}
block6.onclick = function(){
    slide2.style.left = "-32rem";
    block5.style.border = "none";
    block7.style.border = "none";
    block8.style.border = "none";
    block6.style.border = "0.2rem solid yellow"
}
block7.onclick = function(){
    slide2.style.left = "-64rem";
    block5.style.border = "none";
    block6.style.border = "none";
    block8.style.border = "none";
    block7.style.border = "0.2rem solid yellow"
}
block8.onclick = function(){
    slide2.style.left = "-96rem";
    block5.style.border = "none";
    block7.style.border = "none";
    block6.style.border = "none";
    block8.style.border = "0.2rem solid yellow"
}



$("#share").jsSocials({
    shares: [ {share: "twitter", label: "Twitter"}, {share: "facebook", label: "Facebook"}, {share: "whatsapp", label: "Whatsapp"}],
    text: "Shop now",
    showLabel: true,
});