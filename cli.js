const chalk = require('chalk')
const pegaArquivo = require('./index')
const validaURLs = require('./http-validacao')
const caminho = process.argv
async function processaArquivo(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    if(caminho[3] === "validar"){
        console.log(chalk.magenta('links validados'), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('lista de links'), resultado)        
    }
}

processaArquivo(caminho)
