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


function handleSubmit() {

const sorcty = document.getElementById('inputGroupSelect01').value;
const dstcty = document.getElementById('inputGroupSelect02').value;
const pikdt = document.getElementById('pickupDate').value;
const drpdt = document.getElementById('dropDate').value;

const start = $('#pickupDate').datepicker('getDate');
const end   = $('#dropDate').datepicker('getDate');
const days   = (end - start)/1000/60/60/24;

sessionStorage.setItem("SOURCRECITY",sorcty);
sessionStorage.setItem ("DESTINATIONCITY",dstcty);
sessionStorage.setItem("PICKUPDATE",pikdt);
sessionStorage.setItem ("DROPDATE",drpdt);
sessionStorage.setItem ("TOTALDAYS",days);

return;
}



function hatchback() {

    const car_type = "Hatchback";
    const rent_per_day = "999";

    sessionStorage.setItem("CARTYPE",car_type);
    sessionStorage.setItem("RENTPERDAY",rent_per_day);
    
    return;
}

function Sedan() {

    const car_type = "Sedan";
    const rent_per_day = 1399;

    sessionStorage.setItem("CARTYPE",car_type);
    sessionStorage.setItem ("RENTPERDAY",rent_per_day);
    
    return;
}

function SUV() {

    const car_type = "SUV";
    const rent_per_day = 2399;

    sessionStorage.setItem("CARTYPE",car_type);
    sessionStorage.setItem ("RENTPERDAY",rent_per_day);
    
    return;
}

