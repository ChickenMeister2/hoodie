var faqPage = document.getElementById('biggieb');

function showDiv() {
  faqPage.style.display = "flex";
}

function closeDiv() {
  faqPage.style.display = "none";
}

function showOrHide() {
  if (faqPage.style.display === "flex") {
    closeDiv()
  } else {
    showDiv()
  }
}






const span = document.getElementById("mailcpyc");
  span.onclick = function() {
  document.execCommand("copy");
  alert("Mail copied!");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});
