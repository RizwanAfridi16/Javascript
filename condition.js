
// let doorPassword = 12345678;
// let password = prompt("Please Enter Your Password To Open The Door");
// if(doorPassword==password){
//     document.write("Welcome!")
// }
// else{
//     document.write("Sorry! Your Password Is Incorrect. Try Again!")
// }

// ***********************___________________________________________________________________________**************************

//BRT Fare Project

// let balance = prompt("Enter Your Zu Card Balance.")

// if (balance >= 60) {
//     let passengerTravel = prompt("How Many KM you Travel.")
//     if(passengerTravel > 0 && passengerTravel <=5){
//         document.write("You are out Your New Balace is : " +(balance-15))
//     }
//     else if(passengerTravel > 5 && passengerTravel <=10){
//         document.write("You are out Your New Balace is : " +(balance-20))
//     }
//     else if(passengerTravel > 10 && passengerTravel <=15){
//         document.write("You are out Your New Balace is : " +(balance-25))
//     }
//     else if(passengerTravel > 15 && passengerTravel <=20){
//         document.write("You are out Your New Balace is : " +(balance-30))
//     }
//     else if(passengerTravel > 20 && passengerTravel <=25){
//         document.write("You are out Your New Balace is : " +(balance-35))
//     }
//     else if(passengerTravel > 25 && passengerTravel <=30){
//         document.write("You are out Your New Balace is : " +(balance-40))
//     }
//     else if(passengerTravel > 30 && passengerTravel <=35){
//         document.write("You are out Your New Balace is : " +(balance-45))
//     }
//     else if(passengerTravel > 35 && passengerTravel <=40){
//         document.write("You are out Your New Balace is : " +(balance-50))
//     }
//     else if(passengerTravel > 40){
//         document.write("You are out Your New Balace is : " +(balance-55))
//     }
    
// }
//  else{
//     document.write("Insufficient Balance! Please Recharge Your Card.")
// }

// ***********************___________________________________________________________________________**************************



// let weekend = prompt("Enter the day youwant to go out :")
// let weather = prompt("Enter the Weather : Hot: Cool : Sunny !")

// if ((weekend === "Saturday" || weekend === "Sunday") && weather === "Sunny" ) {
//    document.write("You Can Go Out . Enjoy Your Weekend") 
// } else {
//     document.write("You Can't Go Out . Stay at Home")
// }
const ticketPrice=500;
let homeWork = prompt("Are You Complete Your Home Work: Yes:No  ");
let ticket = prompt("Do You Have Movie Ticket : Yes:No  ");
let money = prompt("How Much Money You Have : ");
if (homeWork === "Yes" && (ticket==="Yes" || money >= ticketPrice)) {
    
    document.write("You can Watch Movie")
} else {
    document.write("You can't Watch Movie")
}
