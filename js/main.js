// variables
let days=document.querySelector(".days");
let hours=document.querySelector(".hours");
let minutes=document.querySelector(".minutess");
let seconds=document.querySelector(".seconds");
let sideNavBar=$(".side-nav-bar").outerWidth(true);
let res=100;
let count=0;
// start loading page

$(document).ready(()=>{
    $(".sk-circle").fadeOut(1000 , ()=>{
        $(".loading-page").fadeOut(1000 , ()=>{
            $("body").css("overflow","auto")
        })
    })

})
//end loading page


// -----------------------------------------------

// start up btn
let offsetOfDetails=$(".details").offset().top;
let offsetOfDurations=$(".duration").offset().top;

$(window).scroll(()=>{
    let windowScroll=$(window).scrollTop();
    if(windowScroll>offsetOfDetails){
        $(".btnUp").fadeIn(500)
    }
    else{
        $(".btnUp").fadeOut(500)
    }
})

$(".btnUp").click(()=>{
    $("html,body").animate({scrollTop:"0"},1000);
})

// end up btn

// start linking sections with links

$(".links li a").click((e)=>{
let targetedSection=$(e.target).attr("href");
let offsetOfTargeted=$(targetedSection).offset().top;
$("html,body").animate({scrollTop:offsetOfTargeted},2000)
})

// end linking sections with links

// start jquery for side nav bar
$(".side-nav-bar").css({"left":-sideNavBar});
$(".side-nav-icon").click(()=>{
    
    $(".side-nav-bar").animate({left:0},1000)
    })

$(".close-icon i").click(()=>{
   
    $(".side-nav-bar").animate({left:-sideNavBar},1000)
    })


    // start color theme

    let colors=$(".color-container span");

    colors.click((e)=>{
        $("h1,h2,h3,h4,h5,h6").css({"color":$(e.target).css("background-color")})
    })

    // end color theme


// end jquery for side nav bar
//---------------------------------------------
// start jquery for detail

$(".details-text h3").eq(1).next().slideUp();
$(".details-text h3").eq(2).next().slideUp();
$(".details-text h3").eq(3).next().slideUp();
$(".details-text h3").click((e)=>{
    $(e.target).next().slideToggle(1000)
})

// end jquery for detail
//-----------------------------------------------------
// start jquery for duration\
$(".days").css({"font-weight":"bold","color":"#fff","font-size":"16px"})
$(".hours").css({"font-weight":"bold","color":"#fff","font-size":"16px"})
$(".minutes").css({"font-weight":"bold","color":"#fff","font-size":"16px"})
$(".seconds").css({"font-weight":"bold","color":"#fff","font-size":"16px"})


let eventDate=new Date("31 August 2023").getTime();
let actualTime;
let d,hr,min,sec;
function calcTime (){
let diff;
 setInterval(()=>{
 actualTime=new Date().getTime();
let diff=eventDate-actualTime;
diff/=1000;
d=Math.floor(diff/(60*60*24))
hr=Math.floor(diff/(60*60))
min=Math.floor(diff/60)
sec=Math.floor(diff)
console.log(d)
$(".days").text(`${d}days`)
$(".hours").text(`${hr}hr`)
$(".minutes").text(`${min}min`)
$(".seconds").text(`${sec}sec`)
},1000)
}

calcTime()


// end jquery for duration


// --------------------------
$(".counter").html(`${res} character remaining`)
$(".comment").keydown((e)=>{
  count=  e.target.value.split("").length;
    res=100-count;
    res<=0 ? $(".counter").html(`you have reached the desired num of characters`) : $(".counter").html(`${res} character remaining`) ;
    
})