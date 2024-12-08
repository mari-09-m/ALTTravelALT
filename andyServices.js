$(document).ready(function () {
  // REAAD MORE BUTTONS
  $(".toggle-text").on("click", function () {
    const button = $(this);
    const extraText = button.closest(".card-body").find(".extra-text");
    if (extraText.is(":visible")) {
      extraText.slideUp();
      button.text("Read More");
    } else {
      extraText.slideDown();
      button.text("Read Less");
    }
  });

  // SCROLL IN ONE ANIMATE
  function revealCards() {
    $(".card").each(function (index) {
      const card = $(this);
      const cardOffset = card.offset().top;
      const scrollPosition = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scrollPosition + windowHeight > cardOffset) {
        setTimeout(() => {
          card.addClass("show");
        }, index * 200);
      }
    });
  }
  $(window).on("scroll", revealCards);
  revealCards();

  // Form Validation
  const forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          $("#formModal").modal("show");
          form.reset();
          form.classList.remove("was-validated");
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  $("#formModal").on("hidden.bs.modal", function () {
    window.location.href = "index.html";
  });
});

// Scroll Animation for Form, Image, and Divider
function revealElements() {
  const windowHeight = $(window).height();
  const scrollPosition = $(window).scrollTop();

  if ($(".form-container").offset().top < scrollPosition + windowHeight - 100) {
    $(".form-container").addClass("slide-in");
  }

  if (
    $(".image-container").offset().top <
    scrollPosition + windowHeight - 100
  ) {
    $(".image-container").addClass("slide-in");
  }

  if ($(".divider").offset().top < scrollPosition + windowHeight - 100) {
    $(".divider").addClass("slide-in");
  }
}

$(window).on("scroll", revealElements);
revealElements();
