AOS.init();

const dataEvento = new Date("Mar 12, 2023 21:00:00");
const timeStamp = dataEvento.getTime()

const contaTempo = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const tempoAteEvento = timeStamp - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteEvento = Math.floor(tempoAteEvento/ diaEmMs)
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs)
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs)
    const segundosAteEvento = Math.floor((tempoAteEvento % minutoEmMs) / 1000)

    // console.log(diasAteEvento)
    // console.log(horasAteEvento)
    // console.log(minutosAteEvento)
    // console.log(segundosAteEvento)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (tempoAteEvento < 0) {
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000)