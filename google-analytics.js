function criarCookie(nome, valor, horas) {
    const data = new Date();
    data.setTime(data.getTime() + (horas * 60 * 60 * 1000)); // Define o tempo de expiração
    const expira = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

function lerCookie(nome) {
    const nomeCookie = nome + "=";
    const decodificarCookie = decodeURIComponent(document.cookie);
    const partes = decodificarCookie.split(';');
    for (let i = 0; i < partes.length; i++) {
        let parte = partes[i].trim();
        if (parte.indexOf(nomeCookie) === 0) {
            return parte.substring(nomeCookie.length, parte.length);
        }
    }
    return null;
}

function verificarCookie(nome, duracaoHoras) {
    const cookie = lerCookie(nome);

    if (cookie === null) {
      
        criarCookie(nome, "validado", duracaoHoras);
      
        var mainDocument = document;
        var scriptElement = mainDocument.createElement('script');
        scriptElement.async = true;
        scriptElement.setAttribute('data-cfasync', 'false');
        scriptElement.src = '//menacehabit.com/c2a8c349303b7e235dd591319f65c530/invoke.js';
        mainDocument.body.appendChild(scriptElement);
        var container = mainDocument.createElement('div');
        container.id = 'container-c2a8c349303b7e235dd591319f65c530';
        mainDocument.body.appendChild(container);

    } else {
        var acessa=1;

    }
}
verificarCookie("meuCookie", 48);
