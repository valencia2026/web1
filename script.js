let isEnglish = true;

function toggleLanguage() {
  isEnglish = !isEnglish;

  document.getElementById("langBtn").innerText = isEnglish ? "ES" : "EN";

  if (!isEnglish) {
    document.getElementById("title").innerText = "Desarrollador Web";
    document.getElementById("about").innerText =
      "Desarrollador apasionado por crear experiencias web modernas.";

    document.getElementById("skillsTitle").innerText = "Habilidades";
    document.getElementById("projectsTitle").innerText = "Proyectos";
    document.getElementById("contactTitle").innerText = "Contacto";

    document.getElementById("navHome").innerText = "Inicio";
    document.getElementById("navProjects").innerText = "Proyectos";
    document.getElementById("navAbout").innerText = "Sobre mí";
    document.getElementById("navContact").innerText = "Contacto";

  } else {
    document.getElementById("title").innerText = "Web Developer";
    document.getElementById("about").innerText =
      "Creative Web Developer passionate about modern web experiences.";

    document.getElementById("skillsTitle").innerText = "Skills";
    document.getElementById("projectsTitle").innerText = "Projects";
    document.getElementById("contactTitle").innerText = "Contact";

    document.getElementById("navHome").innerText = "Home";
    document.getElementById("navProjects").innerText = "Projects";
    document.getElementById("navAbout").innerText = "About";
    document.getElementById("navContact").innerText = "Contact";
  }
}