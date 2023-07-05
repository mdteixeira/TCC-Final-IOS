function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_k7rym4w";
    const templateID = "template_yp8n0o9";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Sua mensagem foi enviada com sucesso, aguarde nosso contato!!")
  
      }) 
      .catch(err=>console.log(err));
  
  }
  