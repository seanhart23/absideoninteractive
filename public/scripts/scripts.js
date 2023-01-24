$( document ).ready(function() {

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

    function submitForm() {
        document.getElementById("contact").submit()
    }
    
    document.getElementById('send').onclick = function() {
        $('#contactModal').modal('hide');
        $('#thanksModal').modal('show');
        setTimeout(submitForm, 3000); 
    }
    
})
