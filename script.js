function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


//firebase
var firebaseConfig = {
  apiKey: "AIzaSyAFZQjYij3OU84f1HaRIzHFP1G4IkDbg9A",
    authDomain: "mayuri-f91b6.firebaseapp.com",
    projectId: "mayuri-f91b6",
    storageBucket: "mayuri-f91b6.appspot.com",
    messagingSenderId: "443572318924",
    appId: "1:443572318924:web:22280b672894a8f18a8869",
    measurementId: "G-Q1VL3QE9D3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var storage = firebase.storage();

var storageRef = storage.ref();

const clothesCollection = document.getElementById("clothes-collection")
function appendClothes(urlList) {
  if (!clothesCollection || !urlList) {
    return
  }
  var innerElements = ``
  for (let i = 0; i < urlList.length; i++) {
    const {url, name} = urlList[i];
    const name1=name.slice(0,-4)
    innerElements +=  `
    <a class="imgbox w3-half" >
      <img src="${url}" style="width:100%" >
      <div class="text">${name1}</div>
    </a>
    `
    
  }
  clothesCollection.innerHTML = innerElements
}

copy=()=>{
  var text = 9841575497;
navigator.clipboard.writeText(text).then(function() {

}, function(err) {
console.error('Async: Could not copy text: ', err);
});
}