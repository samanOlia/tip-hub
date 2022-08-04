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
