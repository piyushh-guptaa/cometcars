firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("navbarDropdown").innerHTML = "Hi, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}

var database = firebase.database();

var starCountRef = firebase.database().ref('order/' );
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })