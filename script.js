function isValidate(date){

}

let date = 23/12/2022

//Vérification de la validité de la date selon le mois
function maxDaysInMonth(date){
    let day = date.substr(0, 2)
    let month = date.substr(3,2)
    let year = date.substr(6, 4)
    let month31Days = ["01", "03", "05", "07", "08", "10", "12"]
    let month30Days = ["04", "06", "09", "11"]
    for (let i = 0; i < month31Days.length; i++){
        if (month == month31Days[i]){
            if (day > 31){
                console.log(`Il n'y a que 31 jours dans ce mois, merci d'entrer une date correcte.`)
            }
        }
    }
    for (let i = 0; i <month30Days.length; i++){
        if (month == month30Days[i]){
            if (day > 30){
                console.log(`Il n'y a que 30 jours dans ce mois, merci d'entrer une date correcte.`)
            }
        }
    }
    if (month == "02"){
        if (year % 4 == 0) {
            if (year % 100 == 0){
                if (year % 400 == 0){
                    if (day > 29){
                        console.log(`Il n'y a que 29 jours dans ce mois, merci d'entrer une date correcte.`)
                    }
                } else {
                    if (day > 28){
                        console.log(`Il n'y a que 28 jours dans ce mois, merci d'entrer une date correcte.`)
                    }
                }    
            } else {
                if (day > 29){
                        console.log(`Il n'y a que 29 jours dans ce mois, merci d'entrer une date correcte.`)
                }
            } 
        } else {
            if (day > 28){
                    console.log(`Il n'y a que 28 jours dans ce mois, merci d'entrer une date correcte.`)
                }
        }
    }
}

maxDaysInMonth("29/02/2024")