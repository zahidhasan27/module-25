//  login button function
document.getElementById("login-button").addEventListener("click",function(e){
    e.preventDefault()
     

     
    const mobileNumber = 123456789
    const  pinNumber = 1234
    const mobileNumberValue = document.getElementById("Mobile-number").value
    const mobileNumberValueConverted =parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

        console.log(mobileNumberValueConverted, pinNumberValueConverted)

        if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
            window.location.href ="./home.html"
        }
        else{
            alert("invalid credentials")
        }

})

    // console.log("login-button click")

// console.log("script connected")
