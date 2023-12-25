document.getElementById("hamburger").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    animateSkills();
  });
  
  function animateSkills() {
    const skills = document.querySelectorAll(".skill-bar");
  
    skills.forEach(skill => {
      const targetWidth = skill.dataset.percent;
      skill.style.width = `${targetWidth}%`;
    });
  }
  