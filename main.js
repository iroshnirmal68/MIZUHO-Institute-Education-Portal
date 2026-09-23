const pages = {
  "index.html":"Home","about.html":"About","programs.html":"Programs",
  "admissions.html":"Admissions","student-portal.html":"Student Portal","contact.html":"Contact"
};
const current = location.pathname.split("/").pop() || "index.html";

document.addEventListener("DOMContentLoaded",()=>{
  const header = document.querySelector("#site-header");
  if(header) header.innerHTML = `
    <header class="site-header"><div class="container nav">
      <a class="logo" href="index.html">
        <span class="logo-mark"><i></i><i></i><i></i><i></i></span>
        <span>MIZUHO Institute<small>Learn · Grow · Build Your Future</small></span>
      </a>
      <button class="menu-btn" id="menuBtn" aria-label="Open menu">☰</button>
      <nav class="nav-links" id="navLinks">${Object.entries(pages).map(([file,name]) =>
        `<a class="${current===file?'active':''}" href="${file}">${name}</a>`).join("")}</nav>
      <div class="actions"><a class="btn btn-primary" href="admissions.html">Sign Up</a><a class="btn btn-outline" href="student-portal.html">Login</a></div>
    </div></header>`;
  const footer = document.querySelector("#site-footer");
  if(footer) footer.innerHTML = `
    <footer class="footer"><div class="container">
      <div class="footer-grid">
        <div><a class="logo" href="index.html"><span class="logo-mark"><i></i><i></i><i></i><i></i></span><span style="color:#fff">MIZUHO Institute<small style="color:#c6d3e6">Learn · Grow · Build Your Future</small></span></a><p>Modern, flexible and industry-relevant education designed to help learners build confident futures.</p></div>
        <div><h3>Explore</h3><div class="footer-links"><a href="about.html">About Us</a><a href="programs.html">Programs</a><a href="admissions.html">Admissions</a></div></div>
        <div><h3>Student</h3><div class="footer-links"><a href="student-portal.html">Student Portal</a><a href="contact.html">Support</a><a href="admissions.html#faq">FAQs</a></div></div>
        <div><h3>Contact</h3><div class="footer-links"><a href="mailto:hello@mizuho.example">hello@mizuho.example</a><a href="tel:+94110000000">+94 11 000 0000</a><span>Colombo, Sri Lanka</span></div></div>
      </div>
      <div class="footer-bottom"><span>© 2026 MIZUHO Institute. All rights reserved.</span><span>Software Engineer K.G.Irosh Nirmal</span></div>
    </div></footer>`;
  document.querySelector("#menuBtn")?.addEventListener("click",()=>document.querySelector("#navLinks").classList.toggle("open"));
  document.querySelectorAll("[data-toast]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();showToast(el.dataset.toast)}));
  document.querySelectorAll("[data-modal]").forEach(el=>el.addEventListener("click",()=>document.querySelector(el.dataset.modal).classList.add("open")));
  document.querySelectorAll(".modal .close").forEach(el=>el.addEventListener("click",()=>el.closest(".modal").classList.remove("open")));
  document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
  document.querySelectorAll("form[data-demo]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault(); form.reset(); showToast("Thank you! Your request has been submitted.");
  }));
});
function showToast(message){const t=document.querySelector("#toast")||Object.assign(document.body.appendChild(document.createElement("div")),{id:"toast",className:"toast"});t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)}
