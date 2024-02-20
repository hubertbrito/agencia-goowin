function enviarFormulario() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;
  
    // Validação
  
    if(nome == "") {
      alert("Preencha o nome");
      return;
    }
  
    if(email == "") {
      alert("Preencha o e-mail");
      return;
    } 
  
    if(telefone == "") {
      alert("Preencha o telefone");
      return;
    }
  
    if(servico == "") {
      alert("Selecione o serviço");
      return;
    }
  
    // Enviar para o WhatsApp
  
    var url = "https://wa.me/5521970267055?text=" + 
              "Nome: " + nome + 
              "%0aE-mail: " + email +  
              "%0aTelefone: " + telefone +
              "%0aServiço: " + servico;
    
    window.open(url);
  
  }
    