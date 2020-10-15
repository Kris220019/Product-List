const massDeleteButton = document.getElementById("massDeleteButton");
const massEditOption = document.getElementById("massEditOption");

var els = document.querySelectorAll(".form-check-input");

els.forEach(function (item) {
  massEditOption.addEventListener("click", function () {
    if (item.checked) {
      item.parentNode.parentNode.parentNode.removeChild(
        item.parentNode.parentNode
      );
      item.checked = false;
    }
  });
});
