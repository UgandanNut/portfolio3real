const menumob = document.getElementById("menumob");
const closemenu = document.getElementById("closemenu");
const leftbar = document.getElementById("left-bar");
const bar = document.getElementById("bar");
const bar2 = document.getElementById("bar2");
const bar2mob = document.getElementById("bar2mob");
const bar3 = document.getElementById("bar3");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const ab1 = document.getElementById("ab1");
const ab2 = document.getElementById("ab2");
const ab3 = document.getElementById("ab3");
const ab4 = document.getElementById("ab4");
const startUp = document.getElementById("startup");
const ski = document.getElementById("ski");
const kk = document.getElementById("kk");
const bit = document.getElementById("bit");
const project = document.getElementById("project");
const body = document.getElementById("body");
const navtxt = document.getElementById("navtxt");
const navtxt2 = document.getElementById("navtxt2");
const navtxt3 = document.getElementById("navtxt3");
const navtxt4 = document.getElementById("navtxt4");
const contactform = document.getElementById("contactform");
project.style.display = "none";
closemenu.style.display = "none";
contactform.style.display = "none";







function mobmenuclick(){
    leftbar.style.display = "block"
    closemenu.style.display = "block";
    menumob.style.display = "none";
    
}

function closemenuclick(){
    leftbar.style.display = "none"
    closemenu.style.display = "none";
    menumob.style.display = "block";
}



function bar1click(){
    startUp.style.display = "block"
    project.style.display = "none";
    body.style.height = "0";
    contactform.style.display = "none";
}
bar.addEventListener("mouseover", function(){
    bar.style.width = "125%"
    
})

bar.addEventListener("mouseout", function(){
    bar.style.width = "100%"
})

function bar2click(){
    startUp.style.display = "none"
    project.style.display = "block";
    body.style.height = "1500px";
    contactform.style.display = "none";
    
}

bar2.addEventListener("mouseover", function(){
    bar2.style.width = "125%"
})

bar2.addEventListener("mouseout", function(){
    bar2.style.width = "100%"
})


function bar3click(){
    startUp.style.display = "none"
    project.style.display = "none";
    contactform.style.display = "block";
    body.style.height = "0";
}
//bar2mob

function bar2clickmob(){
    startUp.style.display = "none";
    project.style.display = "block";
    body.style.height = "2000px";
    closemenu.style.display = "block";
    contactform.style.display = "none";
}

bar2mob.addEventListener("mouseover", function(){
    bar2mob.style.width = "125%"
})

bar2mob.addEventListener("mouseout", function(){
    bar2mob.style.width = "100%"
})

//mobend

bar3.addEventListener("mouseover", function(){
    bar3.style.width = "125%"
})

bar3.addEventListener("mouseout", function(){
    bar3.style.width = "100%"
})

nav1.addEventListener("mouseover", function(){
    nav1.style.borderBlockColor = "red";
   
})

nav1.addEventListener("mouseout", function(){
    nav1.style.borderBlockColor = "grey";
})

nav2.addEventListener("mouseover", function(){
    nav2.style.borderBlockColor = "purple";
    
})

nav2.addEventListener("mouseout", function(){
    nav2.style.borderBlockColor = "grey";
  
})

nav3.addEventListener("mouseover", function(){
    nav3.style.borderBlockColor = "blue";
   
})

nav3.addEventListener("mouseout", function(){
    nav3.style.borderBlockColor = "grey";
    
})

nav4.addEventListener("mouseover", function(){
    nav4.style.borderBlockColor = "rgb(21, 70, 233)";
    
})

nav4.addEventListener("mouseout", function(){
    nav4.style.borderBlockColor = "grey";
    
})

ab1.addEventListener("mouseover", function(){
    ab1.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28), black";
})

ab1.addEventListener("mouseout", function(){
    ab1.style.backgroundImage = "linear-gradient(to right, black , rgb(29, 28, 28)";
})

ab2.addEventListener("mouseover", function(){
    ab2.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28), black";
})

ab2.addEventListener("mouseout", function(){
    ab2.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28)";
})

ab3.addEventListener("mouseover", function(){
    ab3.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28), black";
})

ab3.addEventListener("mouseout", function(){
    ab3.style.backgroundImage = "linear-gradient(to right, black , rgb(29, 28, 28)";
})

ab4.addEventListener("mouseover", function(){
    ab4.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28), black";
})

ab4.addEventListener("mouseout", function(){
    ab4.style.backgroundImage = "linear-gradient(to left, black , rgb(29, 28, 28)";
})

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight));
  }, false);

function ski2(){
    window.location.href = "https://www.skistudios.net/"
}


  function port1(){
  window.location.href = "https://bit.ly/47aufKQ"
}

function kk2(){
    window.location.href = "https://ugandannut.github.io/KALAMKUDUS-FORUM-IMLEK_/"
}

function nav11(){
    window.location.href = "https://www.youtube.com/channel/UCI8NIa01wJAHLsgjcEsvOvg"
}

function nav22(){
    window.location.href = "https://www.instagram.com/ugandannut/"
}
function nav33(){
    window.location.href = "https://x.com/NutUgandan"
}

function nav44(){
    window.location.href = "https://www.facebook.com/cruchyn.cruchyn.1/friends/"
}

function sendmsg(){
    alert("message is sent")
    emailjs.send("service_16xlfep","template_81plbiv",{
    from_name: document.getElementById("user_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    });}


