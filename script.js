function isValidate(date){
    let day = parseInt(date.substr(0, 2))
    let month = parseInt(date.substr(3,2))
    let year = parseInt(date.substr(6, 4))
    if (year > 9999 || year < 999){
        console.log(`L'année n'est pas valide. Merci de mettre une année comprise entre 1000 et 9999.`)
    } else {
        if (month > 13 || month < 0){
            console.log(`Le mois n'est pas valide. Merci de mettre un mois comprise entre 01 et 12.`)
        } else {
            if (day < 0){
                console.log(`Le jour n'est pas valide. Merci de mettre un jour positif.`)
            } else { 
                if (maxDaysInMonth(date) == true ) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}

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
                return false
            }
        }
    }
    for (let i = 0; i <month30Days.length; i++){
        if (month == month30Days[i]){
            if (day > 30){
                console.log(`Il n'y a que 30 jours dans ce mois, merci d'entrer une date correcte.`)
                return false
            }
        }
    }
    if (month == "02"){
        if (year % 4 == 0) {
            if (year % 100 == 0){
                if (year % 400 == 0){
                    if (day > 29){
                        console.log(`Il n'y a que 29 jours dans ce mois, merci d'entrer une date correcte.`)
                        return false
                    }
                } else {
                    if (day > 28){
                        console.log(`Il n'y a que 28 jours dans ce mois, merci d'entrer une date correcte.`)
                        return false
                    }
                }    
            } else {
                if (day > 29){
                        console.log(`Il n'y a que 29 jours dans ce mois, merci d'entrer une date correcte.`)
                        return false
                }
            } 
        } else {
            if (day > 28){
                    console.log(`Il n'y a que 28 jours dans ce mois, merci d'entrer une date correcte.`)
                    return false
                }
        }
    } return true
}

function isPalindrome(date){
    if (isValidate(date) == true){
        let normalDate = date.replaceAll('/', "")
        let reverseDate = normalDate.split('').reverse().join('')
        if (normalDate == reverseDate){
            console.log(`${date} est un palindrome`)
        } else {
            console.log(`${date} n'est pas un palindrome`)
        }
    }    
}

isPalindrome("12/02/2011")