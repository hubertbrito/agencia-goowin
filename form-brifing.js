function enviarEmail() {
  

    var link = "mailto:seu-email@exemplo.com"
             + "?subject=" + encodeURIComponent("Formulário de Contato")
             + "&body=" + encodeURIComponent("Tipo de Site: " + siteType + "\n\n" + "Cores: " + siteColor + "\n\n" + "Funcionalidades: " + getSelectedOptions(siteFunctionality) + "\n\n" + "Conteúdo: " + getSelectedOptions(siteContent) + "\n\n" + "Requisitos Técnicos: " + getSelectedOptions(siteRequirements) + "\n\n" + "Prazo: " + siteDeadline);

    window.location.href = link;

    document.getElementById("mensagem-envio").innerHTML = "Muito obrigado por preencher o formulário! Retornaremos em breve.";
}
