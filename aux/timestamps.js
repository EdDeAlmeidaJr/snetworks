module.exports = {
  createDate: function () {
    const dataAtual = new Date()
    const ano = dataAtual.getFullYear()
    const mes = dataAtual.getMonth() + 1
    const dia = dataAtual.getDate()
    const strAno = '' + ano
    const strMes = mes < 10 ? '0' + mes : '' + mes
    const strDia = dia < 10 ? '0' + dia : '' + dia
    return `${strAno}-${strMes}-${strDia}`
  },

  createTime: function () {
    const dataAtual = new Date()
    const horas = dataAtual.getHours()
    const minutos = dataAtual.getMinutes()
    const strHoras = horas < 10 ? '0' + horas : '' + horas
    const strMinutos = minutos < 10 ? '0' + minutos : '' + minutos
    return `${strHoras}-${strMinutos}`
  }
}
