function collapse(elem){
    elem = document.getElementById("Navbar");
    collapseComponent = document.getElementById("btn-collapse");
    logoTitle = document.getElementById("logo").querySelector("span:nth-child(2)");
    imgLogo = document.getElementById("logo")
    listTitle = document.getElementById("content");
    homeDashboard = document.getElementById("home");
    bodyDashboard = document.getElementById("marginright");


    collapseComponent.classList.toggle('active');
    logoTitle.classList.toggle('active');
    elem.classList.toggle('active');
    listTitle.classList.toggle('active');
    imgLogo.classList.toggle("active");
    homeDashboard.classList.toggle("active");
    bodyDashboard.classList.toggle("active");
}
