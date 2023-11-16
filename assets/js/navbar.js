document.getElementById("navbar").innerHTML = `
<nav>

<a href="#" class="logo">Logo</a>
<ul>
<li><a href="index.html#landing_sec">Home</a></li>
<li><a href="index.html#about_sec">About</a></li>
<li><a href="#">Contact</a></li>
</ul>   

</nav>
`;

// nav effect 
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY);
});