   // menu
   const showmobmenu = document.querySelector('.mob1')
   const hamburgerIcon = document.querySelector('.hamburger-icon')
   const shadow = document.querySelector('.shadow')
   hamburgerIcon.addEventListener('click', () => {
       showmobmenu.classList.toggle('showmenu')
       hamburgerIcon.classList.add('change')
       shadow.classList.add('showShadow')
   })
   shadow.addEventListener('click', () => {
       showmobmenu.classList.remove('showmenu')
       hamburgerIcon.classList.remove('change')
       shadow.classList.remove('showShadow')
   })

    

     // to persianNumbers
     $(document).ready(function () {
        ConvertNumberToPersion();
      });
      function ConvertNumberToPersion() {
        persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
        function traverse(el) {
          if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
              for (var i = 0; i < list.length; i++)
                el.data = el.data.replace(list[i], persian[list[i]]);
            }
          }
          for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
          }
        }
        traverse(document.body);
      }
    //   end to persianNumbers

    // menu-controler-pc
    let subMenu = document.querySelectorAll('.sub-menu')
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "80px";
            try {
              document.querySelector('.teacher-card').style.top = '170px'
            }
            catch(err) {
              var sam = 0
            }
            
        } else {
          
            let status = false
            for (let i = 0; i < subMenu.length; i++) {
                let stil = window.getComputedStyle(subMenu[i]).getPropertyValue('display')
                if (stil == 'block') {
                    status = true
                }
            }
            if (status) {
                document.getElementById("navbar").style.top = "80px";
                try {
                  document.querySelector('.teacher-card').style.top = '170px'
                }
                catch(err) {
                  var sam = 0
                }

            } else {
                document.getElementById("navbar").style.top = "-50px";
                try {
                  document.querySelector('.teacher-card').style.top = '90px'
                }
                catch(err) {
                  var sam = 0
                }
            }



        }
        prevScrollpos = currentScrollPos;
    }

    // menu-controler-mob
    let  navMenuItemMob = document.querySelectorAll('.nav-menu-item-mob')
    let chevron = document.querySelectorAll('.chev-icon')
    let subMenuMob = document.querySelectorAll('.sub-menu-mob')
    console.log(subMenuMob);
        for (let w = 0; w < navMenuItemMob.length; w++) {
            navMenuItemMob[w].addEventListener('click', () => {
                if (subMenuMob[w].classList.contains('showsubmenumob')) {

                    subMenuMob.forEach((itm) => {
                        itm.classList.remove('showsubmenumob')
                    })
                    chevron.forEach((itm) => {
                        itm.classList.remove('rotate-chev')
                    })
                } else {
                    subMenuMob.forEach((itm) => {
                        itm.classList.remove('showsubmenumob')
                    })
                    chevron.forEach((itm) => {
                        itm.classList.remove('rotate-chev')
                    })
                    subMenuMob[w].classList.add('showsubmenumob')
                    chevron[w].classList.add('rotate-chev')
                }
            })

        }