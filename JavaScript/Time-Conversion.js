//CONVERSOR DE TIEMPO

//Dado un string que contiene la hora en formato de 12 horas, convertirlo en un formato de 24 horas.

s = "07:05:45AM" //El valor de este string cambia para saber si funciona en todos los casos.

function timeConversion(s) {
    let hour = s.slice(0,2); //"Corta" la parte que contiene la hora
    let meridiem = s.slice(-2); //"Corta" la parte que contiene PM o AM
    
    if(hour === "12" && meridiem === "PM"){
        let replaceHour = s.replace("PM","");
        return replaceHour;
    }else if(hour === "01" && meridiem === "PM"){
        let replaceHour = s.replace("01","13").replace("PM","");
        return replaceHour;
    }else if(hour === "02" && meridiem === "PM"){
        let replaceHour = s.replace("02","14").replace("PM","");
        return replaceHour;
    }else if(hour === "03" && meridiem === "PM"){
        let replaceHour = s.replace("03","15").replace("PM","");
        return replaceHour;
    }else if(hour === "04" && meridiem === "PM"){
        let replaceHour = s.replace("04","16").replace("PM","");
        return replaceHour;
    }else if(hour === "05" && meridiem === "PM"){
        let replaceHour = s.replace("05","17").replace("PM","");
        return replaceHour;
    }else if(hour === "06" && meridiem === "PM"){
        let replaceHour = s.replace("06","18").replace("PM","");
        return replaceHour;
    }else if(hour === "07" && meridiem === "PM"){
        let replaceHour = s.replace("07","19").replace("PM","");
        return replaceHour;
    }else if(hour === "08" && meridiem === "PM"){
        let replaceHour = s.replace("08","20").replace("PM","");
        return replaceHour;
    }else if(hour === "09" && meridiem === "PM"){
        let replaceHour = s.replace("09","21").replace("PM","");
        return replaceHour;
    }else if(hour === "10" && meridiem === "PM"){
        let replaceHour = s.replace("10","22").replace("PM","");
        return replaceHour;
    }else if(hour === "11" && meridiem === "PM"){
        let replaceHour = s.replace("11","23").replace("PM","");
        return replaceHour;
    }else if(hour === "12" && meridiem === "AM"){
        let replaceHour = s.replace("12","00").replace("AM","");
        return replaceHour;
    }else{
        let replaceHour = s.replace("AM","");
        return replaceHour;
    }
    
   
}

console.log(timeConversion(s));