const navbar = document.getElementById("navbar");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 530;
          if(window.scrollY > valuescroll){
            navbar.style.backgroundColor = "black";
            navbar.style.transition = "0.5s"
          }
          else{
            navbar.style.backgroundColor = "transparent";
            navbar.style.transition = "0.5s"
          }
        }