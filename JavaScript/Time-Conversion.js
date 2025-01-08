//CONVERSOR DE TIEMPO

//Dado un string que contiene la hora en formato de 12 horas, convertirlo en un formato de 24 horas.

s = "12:00:00PM" //El valor de este string cambia para saber si funciona en todos los casos.

function timeConversion(s) {
    // Write your code here
    if(s.includes("12") && s.includes("PM")){
        let replaceHour = s.replace("PM", "");
        return(replaceHour);
    }else if(s.includes("01") && s.includes("PM")){
        let replaceHour = s.replace("01","13").replace("PM","");
        return(replaceHour);
    }else if(s.includes("02") && s.includes("PM")){
        let replaceHour = s.replace("02","14").replace("PM","");
        return(replaceHour);
    }else if(s.includes("03") && s.includes("PM")){
        let replaceHour = s.replace("03","15").replace("PM","");
        return(replaceHour);
    }else if(s.includes("04") && s.includes("PM")){
        let replaceHour = s.replace("04","16").replace("PM","");
        return(replaceHour);
    }else if(s.includes("05") && s.includes("PM")){
        let replaceHour = s.replace("05","17").replace("PM","");
        return(replaceHour);
    }else if(s.includes("06") && s.includes("PM")){
        let replaceHour = s.replace("06","18").replace("PM","");
        return(replaceHour);
    }else if(s.includes("07") && s.includes("PM")){
        let replaceHour = s.replace("07","19").replace("PM","");
        return(replaceHour);
    }else if(s.includes("08") && s.includes("PM")){
        let replaceHour = s.replace("08","20").replace("PM","");
        return(replaceHour);
    }else if(s.includes("09") && s.includes("PM")){
        let replaceHour = s.replace("09","21").replace("PM","");
        return(replaceHour);
    }else if(s.includes("10") && s.includes("PM")){
        let replaceHour = s.replace("10","22").replace("PM","");
        return(replaceHour);
    }else if(s.includes("11") && s.includes("PM")){
        let replaceHour = s.replace("11","23").replace("PM","");
        return(replaceHour);
    }else if(s.includes("12") && s.includes("AM")){
        let replaceHour = s.replace("12","00").replace("AM","");
        return(replaceHour);
    }else{
        let replaceAM = s.replace("AM","");
        return(replaceAM);
    }
}

console.log(timeConversion(s));