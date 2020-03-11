$("#email1").blur(() => {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test($("#email1").val())) {
    $("#emailHelp").html(" *please enter a valid email");
    $("#emailHelp").fadeIn("100");
    $("#email1").css("border-color", "red");
  } else {
    console.log("test");
    let data = $("#email1").val();

    $.ajax({
      url: "http://localhost:8080/user/emailRegister",
      type: "POST",
      dataType: "json",
      data: {
        email: data
      }
    });
  }
});
/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function() {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

var countDownDate = new Date("March 15, 2020 00:00:00").getTime();
var myfunc = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s ";
  document.getElementById("end").innerHTML = "Remaining";

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);

var mpopup = document.getElementById("mpopupBox");

var mpLink = document.getElementById("mpopupLink");

var close = document.getElementsByClassName("close")[0];

mpLink.onclick = function() {
  mpopup.style.display = "block";
};
close.onclick = function() {
  mpopup.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == mpopup) {
    mpopup.style.display = "none";
  }
};


// Accordion

$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}