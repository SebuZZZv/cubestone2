const openRegulamin = document.querySelector('.regulamin');
const regu = document.querySelector('.regulaminbig')
const regubox = document.querySelector('.regu-box');
const exit = document.querySelector('.exit');
const scroll_TOP = document.querySelector('.scrolltop');
openRegulamin.addEventListener("click", () => {
    if(regu.style.display === "none"){
        regu.style.display = "none";
        
    }else{
        regu.style.display = "block";
        regu.scrollIntoView()
        regu.style.visibility = "visible";
        openRegulamin.style.cursor = "pointer"
        document.body.style.overflow = "hidden";
    }
  });

  exit.addEventListener("click", () => {
    console.log("click")
    if(regu.style.display === "block"){
       regu.style.removeProperty("display");
       regu.style.removeProperty("visibility");
       document.body.style.removeProperty("overflow");
    }
 });
 regubox.addEventListener("dblclick", () => {
    console.log("click")
    if(regu.style.display === "block"){
       regu.style.removeProperty("display");
       regu.style.removeProperty("visibility");
       document.body.style.removeProperty("overflow");
    }
 });
 
 scroll_TOP.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });

 });