  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('show');
    });
  });

  document.getElementById("whatsappForm").addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    var whatsappNumber = "919420041663"; // 👈 इथे तुमचा WhatsApp नंबर टाका

    var url = "https://wa.me/" + whatsappNumber + "?text=" 
        + "नाव: " + name + "%0a"
        + "लोकेशन: " + location + "%0a"
        + "मोबाईल: " + mobile + "%0a"
        + "मेसेज: " + message;

    window.open(url, "_blank").focus();
  });
