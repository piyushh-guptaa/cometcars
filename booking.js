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

window.addEventListener('load',()=>{

const sorcty = sessionStorage.getItem('SOURCRECITY');
const dstcty = sessionStorage.getItem('DESTINATIONCITY');
const pikdt = sessionStorage.getItem('PICKUPDATE');
const drpdt = sessionStorage.getItem('DROPDATE');
const diff_days = sessionStorage.getItem('TOTALDAYS');
const diff_dys = sessionStorage.getItem('TOTALDAYS');
const car_type = sessionStorage.getItem('CARTYPE');
const car_rent_per_day = sessionStorage.getItem('RENTPERDAY');


document.getElementById('inputGroupSelect01').innerHTML = sorcty;
document.getElementById('inputGroupSelect02').innerHTML = dstcty;
document.getElementById('pickupDate').innerHTML = pikdt;
document.getElementById('dropDate').innerHTML = drpdt;
document.getElementById('totalDays').innerHTML = diff_days;
document.getElementById('total_Days').innerHTML = diff_dys;
document.getElementById('carType').innerHTML = car_type;
document.getElementById('disp_rpd').innerHTML = "₹ "+car_rent_per_day;


const total_cost = diff_days * car_rent_per_day;

var gst_calc = total_cost*0.18;
gst_calc=Math.round(gst_calc);

const total_amount = total_cost+gst_calc ;

const half_amount = total_amount/2;


document.getElementById('calc_cost').innerHTML = "₹ "+total_cost;
document.getElementById('calc_gst').innerHTML = "₹ "+gst_calc;
document.getElementById('disp_total_ammount').innerHTML ="₹ "+ total_amount;
document.getElementById('calc_50%').innerHTML = "₹ "+half_amount;

$('#inputGroupSelect01, #inputGroupSelect02, #dropDate, #pickupDate').bind('change', function() {
    if(allFilled()) $('#register').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
        else{$('#register').prop("disabled", true);}
      });
    return filled;
}
})




const database = firebase.database();

button1.addEventListener('click', (e) =>{
    
    e.preventDefault();
            
    const StartCity = document.getElementById('inputGroupSelect01').innerHTML;
    const EndCity = document.getElementById('inputGroupSelect02').innerHTML;
    const TotalDays = document.getElementById('totalDays').innerHTML;
    const CarType = document.getElementById('carType').innerHTML;
    const StartDate = document.getElementById('pickupDate').innerHTML;
    const EndDate = document.getElementById('dropDate').innerHTML;

    const Name = document.getElementById('validationDefault01');
    const ContactNo = document.getElementById('validationDefault02');
    const AadharCardNo = document.getElementById('validationDefault03');
    const City = document.getElementById('validationDefault04');
    const State = document.getElementById('validationDefault05');
    const Pin = document.getElementById('validationDefault06');
    const TotalAmount = document.getElementById('disp_total_ammount').innerHTML;


    database.ref('order/'+AadharCardNo.value).set({
 
        Name: Name.value,
        Contact_No: ContactNo.value,
        Aadhar_Card_No: AadharCardNo.value,
        City: City.value,
        State: State.value,
        Pin: Pin.value,
        Total_Amount: TotalAmount,

        Origin_City: StartCity,
        Drop_City: EndCity,
        Days: TotalDays,
        Car_Type: CarType,
        Start_Date: StartDate,
        End_Date: EndDate
    
    })
    
    //$('#myModal').modal(options);
    $("#myModal").modal();
})

