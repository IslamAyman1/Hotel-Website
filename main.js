
function search(event) {
    event.preventDefault()
    var x = document.getElementById("inputtt").value;
    var xx = document.getElementById("inputtt2").value
    var y = document.getElementById("inputtt3").value;
    var z = document.getElementById("inputtt4").value;
    var items = document.querySelectorAll(".hotelName");
    var items2 = document.querySelectorAll(".hotelPrice");
    var items3 = document.querySelectorAll(".tourName");
    var items4 = document.querySelectorAll(".packageName");
    var count = 0;
    var count1 =0;
    var count2 =0;

    for (var i = 0; i < items.length; i++) {
         if(x==""){
            items[i].parentElement.parentElement.style.display = "block";
            count++
            document.getElementById("hotelll").innerHTML=count
            document.getElementById("hotelll").style.backgroundColor="turquoise"
  
         }else if (items[i].innerHTML.toLowerCase().indexOf(x.toLowerCase()) > -1 && items2[i].innerHTML == xx) {
            items[i].parentElement.parentElement.style.display = "block";
            items[i].nextElementSibling.style.display = "none";
            items[i].nextElementSibling.nextElementSibling.style.display = "none";
            items[i].parentElement.parentElement.innerHTML += "<i class='fas fa-concierge-bell'></i>";
            count++
            document.getElementById("hotelll").innerHTML=count
            document.getElementById("hotelll").style.backgroundColor="turquoise"

         }
        else {
            items[i].parentElement.parentElement.style.display = "none";
        }
    }
    for (var n = 0; n < items3.length; n++) {
        if (items3[n].innerHTML.toLowerCase().indexOf(y.toLowerCase()) > -1) {
            items3[n].parentElement.parentElement.parentElement.style.display = "block";
            items3[n].parentElement.parentElement.innerHTML += "<i class='fas fa-plane-departure'></i>";
            count1++
            document.getElementById("tourrr").innerHTML=count1
            document.getElementById("tourrr").style.backgroundColor="turquoise"
        }
        else {
            items3[n].parentElement.parentElement.parentElement.style.display = "none";
        }
    }
    for (var j = 0; j < items4.length; j++) {
        if (items4[j].innerHTML.toLowerCase().indexOf(z.toLowerCase()) > -1) {
            items4[j].parentElement.parentElement.parentElement.style.display = "block";
            items4[j].parentElement.parentElement.parentElement.innerHTML += "<i class='fas fa-hand-holding-heart'></i>";

            count2++
            document.getElementById("packegg").innerHTML=count2
            document.getElementById("packegg").style.backgroundColor="turquoise"

        }
        else {
            items4[j].parentElement.parentElement.parentElement.style.display = "none";
        }
    }
}
var xx = document.getElementById("inputtt2")
xx.addEventListener("change", function () {
    document.getElementById("outputRange").innerHTML = xx.value
})
console.log(x)