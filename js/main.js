// $(window).scroll(function(){
//     let homeHight = $("#home").height();
//     let windowScroll = $(window).scrollTop();
//     if(windowScroll > homeHight){
//         $(".navbar").addClass("bg-danger");
//     }else{
//           $(".navbar").removeClass("bg-danger");
//     }
// })


///////////////////////////////////////////////////////////////////////////////


$("#navToggle").click(function(){
    let nav = $(".navbarFixed");

    if(nav.hasClass( "ulIn" )){
        nav.removeClass("ulIn");
        nav.addClass("ulOut");
        $(this).removeClass("navIn")
        $(this).addClass("navOut")

        
    }else {
       
        nav.removeClass("ulOut");
        nav.addClass("ulIn");
        $(this).removeClass("navOut")
        $(this).addClass("navIn")

    }
});
$("#xmark").click(function(){
    let nav = $(".navbarFixed");

    if(nav.hasClass( "ulIn" )){
        nav.removeClass("ulIn");
        nav.addClass("ulOut");
        $("#navToggle").removeClass("navIn")
        $("#navToggle").addClass("navOut")

        
    }else {
       
        nav.removeClass("ulOut");
        nav.addClass("ulIn");
        $("#navToggle").removeClass("navOut")
        $("#navToggle").addClass("navIn")

    }
})

// $(".singerName").click(function(){
//     let that =  $(this);
//     let singerContents = $(".singerContent");

//     if(that.next($(singerContents)).not().hasClass("d-none")){
//         $(singerContents).animate().addClass("d-none")
//         that.next($(singerContents)).removeClass("d-none")
//     }else{
//         that.next($(singerContents)).addClass("d-none")
//     }
// })

$(".singerName").click(function(){
        let that =  $(this);
        let singerContents = $(".singerContent");

        if(that.next($(singerContents)).hasClass("close")){
            $(singerContents).addClass("close")
            that.next($(singerContents)).removeClass("close")
            that.next($(singerContents)).addClass("open")
            

        }else{
            
            that.next($(singerContents)).removeClass("open")
            that.next($(singerContents)).addClass("close")
        }

        
    })
$("#textCounter").keyup(function(e){
    let that = $(this)
    let c = that.val().length
    if(c <= 100){
        $("#counter").text(100 - c + " ")
        
    }else{
       if(e.key != "Backspace"){
        that.val(that.val().substr(0, 100));
       }
    }
})

let countDown = new Date("jul 14, 2022 23:59:59").getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();

    let dateDiff = countDown - dateNow
    let days = Math.floor(dateDiff / 1000 / 60 / 60/ 24);
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 *24))/(1000*60*60));
    let minutes =  Math.floor((dateDiff % (1000 * 60 * 60))/(1000*60));
    let seconds =  Math.floor((dateDiff % (1000 * 60 ))/(1000));

   $(".day").text(days)
   $(".hour").text(hours)
   $(".minute").text(minutes)
   $(".second").text(seconds)

       if(dateDiff < 0){
        clearInterval(counter);
       }
},1000)


$("#navLinks li a").click(function(){
    let href = $(this).attr("href");
    
    $("html,body").animate({
        scrollTop : $(href).offset().top
    },2000)
})

