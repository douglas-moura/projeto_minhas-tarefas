export const formatarData = (data) => {
    const dataBr = new Date(data).toLocaleString("pt-BR", {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    return dataBr
}