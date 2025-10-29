const frm = document.querySelector("form")

async function getData(url) {
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/" + url)
    const data = await resposta.json();
    return data
}
function carregarSelect(select, url) {
    getData(url).then((ls) => {
        // console.table(ls)
        for (const i of ls) {
            const option = document.createElement("option")
            option.value = i.id
            option.innerText = i.nome
            option.innerText += i.sigla != undefined ? `(${i.sigla})` : ""
            select.appendChild(option)
        }
    })
}

carregarSelect(frm.inRegiao, "regioes")
carregarSelect(frm.inEstado, "estados")

frm.inEstado.addEventListener("change",() => {
    const uf = frm.inEstado.value
    frm.inMunicipio.innerHTML = `<option value="">Selecione</option>`
    carregarSelect(frm.inMunicipio, `estados/${uf}/municipios`)
})

frm.inRegiao.addEventListener("change",() => {
    const regiao = frm.inRegiao.value
    frm.inEstado.innerHTML = `<option value="">Selecione</option>`
    frm.inMunicipio.innerHTML = ""
    if(regiao == "") {
        carregarSelect(frm.inEstado, `estados`)
    }else{
        carregarSelect(frm.inEstado, `regioes/${regiao}/estados`)
    }
    
})