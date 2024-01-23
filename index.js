
var arr=[document.getElementById("DV"),document.getElementById("VG"),document.getElementById("SD"),
document.getElementById("PO"),document.getElementById("MO"),document.getElementById("CE"),document.getElementById("GN"),document.getElementById("MT")]


var artistNames=["eonardo da Vinci","incent van Gogh",'Salvador Dalí',
'Pablo Picasso',"Michelangelo","Paul Cézanne","Paul Gauguin","Claude Monet"]

var contenair=document.getElementById("container")
var singleItem=document.getElementById("singleItem")

var navBarContenair=document.getElementById('navBar').children[0]
for(let i=0;i<artistNames.length;i++){
    
    var artist = document.createElement("h2");
    artist.textContent=artistNames[i]
    navBarContenair.appendChild(artist)
    artist.onclick=function(){
         contenair.style.display='none'
         singleItem.appendChild(arr[i])
         arr[i-1].style.display="none"
    }
    
    
}






