export const definirGenero = (v) => {
    switch (v) {
        case null:
            return "Não informado"
            break
        case 0:
            return "Feminino"
            break
        case 1:
            return "Masculino"
            break
    
        default:
            return "Não informado"
            break
    }
}