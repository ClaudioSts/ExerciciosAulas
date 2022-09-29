function diaDaSemanaPorExtensoBilingue(data, lingua) {
    // escreve aqui a função

        let semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
        let week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

        let d = data.getDay()

        if (lingua == "pt") {

            switch (d) {
                case 0:
                    return semana[d]
                case 1:
                    return semana[d]
                case 2:
                    return semana[d]
                case 3:
                    return semana[d]
                case 4:
                    return semana[d]
                case 5:
                    return semana[d]
                case 6:
                    return semana[d]
            }

        } else if (lingua == "en") {

            switch (d) {
                case 0:
                    return week[d]
                case 1:
                    return week[d]
                case 2:
                    return week[d]
                case 3:
                    return week[d]
                case 4:
                    return week[d]
                case 5:
                    return week[d]
                case 6:
                    return week[d]
         
            }
        }
    }


////////////////////////////////////////////////////////////////

function mesPorExtensoBilingue(data, lingua) {
    console.log(data, lingua)
        // escreve aqui a função
    
        let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    
        let m = data.getMonth()
    
        if (lingua == "pt") {
            switch (m) {
                case 0:
                    return mes[m]
                case 1:
                    return mes[m]
                case 2:
                    return mes[m]
                case 3:
                    return mes[m]
                case 4:
                    return mes[m]
                case 5:
                    return mes[m]
                case 6:
                    return mes[m]
                case 7:
                    return mes[m]
                case 8:
                    return mes[m]
                case 9:
                    return mes[m]
                case 10:
                    return mes[m]
                case 11:
                    return mes[m]
                case 12:
                    return mes[m]
                    
            }
    
        } else if (lingua == "en") {
            switch (m) {
                case 0:
                    return month[m]
                case 1:
                    return month[m]
                case 2:
                    return month[m]
                case 3:
                    return month[m]
                case 4:
                    return month[m]
                case 5:
                    return month[m]
                case 6:
                    return month[m]
                case 7:
                    return month[m]
                case 8:
                    return month[m]
                case 9:
                    return month[m]
                case 10:
                    return month[m]
                case 11:
                    return month[m]
                case 12:
                    return month[m]
    
            }
        }
    }