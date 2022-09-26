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
