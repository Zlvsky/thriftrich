window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "black";
    document.getElementById("logo").style.color = "black";
    document.getElementById("hyperlink1").style.color = "black";
    document.getElementById("hyperlink2").style.color = "black";
    document.getElementById("hyperlink3").style.color = "black";
    document.getElementById("navbar").style.fontSize = "19px";
    document.getElementById("navbar").style.height = "6%";
    document.getElementById("nav-wrap").style.marginTop = "8px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("logo").style.color = "white";
    document.getElementById("hyperlink1").style.color = "white";
    document.getElementById("hyperlink2").style.color = "white";
    document.getElementById("hyperlink3").style.color = "white";
    document.getElementById("navbar").style.fontSize = "19px";
    document.getElementById("navbar").style.height = "12%";
    document.getElementById("nav-wrap").style.marginTop = "30px";
  }
}
