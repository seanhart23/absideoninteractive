/*-----------------------------------------------------------*/
/*---------------------- CONFIG OPTIONS ---------------------*/
/*-----------------------------------------------------------*/

var brandName     = "Absideon Interactive",
    pageTitle     = "Absideon Interactive - Components",
    brandColor    = "slategray",
    brandColorSec = "blue",
    brandFC       = "white",
    brandFCSec    = "black";
    

$( document ).ready(function() {

  //******************* SET CONFIG OPTIONS *******************//

  document.title = pageTitle;

  var bgColor = document.getElementsByClassName("bg-color-main");
  var bgColorSec = document.getElementsByClassName("bg-color-sec");
  var fontColor = document.getElementsByClassName("f-color-main");
  var fontColorSec = document.getElementsByClassName("f-color-sec");
  var brandNameText = document.getElementsByClassName("brand-name");

  for(i = 0; i < bgColor.length; i++) {
    bgColor[i].style.backgroundColor = brandColor;
  }

  for(i = 0; i < bgColorSec.length; i++) {
    bgColorSec[i].style.backgroundColor = brandColorSec;
  }

  for(i = 0; i < fontColor.length; i++) {
    fontColor[i].style.color = brandFC;
  }

  for(i = 0; i < fontColorSec.length; i++) {
    fontColorSec[i].style.color = brandFCSec;
  }

  for(i = 0; i < brandNameText.length; i++) {
    $(".brand-name").text(brandName)
  }

//***************** SLIDE UP REVEAL ON SCROLL ****************//

  function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

  window.addEventListener("scroll", reveal);

});

console.log ("Abisdeon JS Loaded")
