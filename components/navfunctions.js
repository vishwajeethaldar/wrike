import mainNavBar    from '../components/nav.js';

function showProductSubmenu(){
    
    let productSubmenu = document.getElementById("productSubmenu")
    productSubmenu.setAttribute("class", "show-product-submenu")
    let showProduct = document.getElementById("show-product")
    let hideProduct =  document.getElementById("hide-product")
    showProduct.setAttribute("class", "hide")
    hideProduct.setAttribute("class", "show")
}

function hideProductSubmenu(){
    let productSubmenu = document.getElementById("productSubmenu")
    productSubmenu.setAttribute("class", "sub-menus")
    let showProduct = document.getElementById("show-product")
    let hideProduct =  document.getElementById("hide-product")
    showProduct.setAttribute("class", "show")
    hideProduct.setAttribute("class", "hide")  
}
// resource toggle
function showResourceSubmenu(){
    let resourceSubmenu = document.getElementById("resourceSubmenu")
    resourceSubmenu.setAttribute("class", "show-product-submenu")
    let showResource = document.getElementById("show-resources")
    let hideResource =  document.getElementById("hide-resources")
    showResource.setAttribute("class", "hide")
    hideResource.setAttribute("class", "show")
}

function hideResourceSubmenu(){
    let resourceSubmenu = document.getElementById("resourceSubmenu")
    resourceSubmenu.setAttribute("class", "sub-menus")
    let showResource = document.getElementById("show-resources")
    let hideResource =  document.getElementById("hide-resources")
    showResource.setAttribute("class", "show")
    hideResource.setAttribute("class", "hide")
}



// solution submenu 
function showsolutionsubmenu(){
    let resourceSubmenu = document.getElementById("solutions-submenu")
    resourceSubmenu.setAttribute("class", "show-product-submenu")
    let showResource = document.getElementById("show-solutions")
    let hideResource =  document.getElementById("hide-solutions")
    showResource.setAttribute("class", "hide")
    hideResource.setAttribute("class", "show")
}

function hidesolutionsubmenu(){
    let resourceSubmenu = document.getElementById("solutions-submenu")
    resourceSubmenu.setAttribute("class", "sub-menus")
    let showResource = document.getElementById("show-solutions")
    let hideResource =  document.getElementById("hide-solutions")
    showResource.setAttribute("class", "show")
    hideResource.setAttribute("class", "hide")
}



// show-more-submenu-solution

function showmoresubmenufromsolution (){
    let resourceSubmenu = document.getElementById("more-sub-menu")
    resourceSubmenu.setAttribute("class", "show-more-submenu-solution")
    let showResource = document.getElementById("show-more-submenu-toogle")
    let hideResource =  document.getElementById("hide-more-submenu-toogle")
    // showResource.setAttribute("class", "hide")
    // hideResource.setAttribute("class", "show")
  
}

function hidemoresubmenufromsolution (){
    let resourceSubmenu = document.getElementById("more-sub-menu")
    resourceSubmenu.setAttribute("class", "sub-menus")
    let showResource = document.getElementById("show-more-submenu-toogle")
    let hideResource =  document.getElementById("hide-more-submenu-toogle")
    showResource.setAttribute("class", "show")
    hideResource.setAttribute("class", "hide")
}
function shownavbaronMobile(){
    let mainLinks= document.getElementById("mainLinks")
    mainLinks.setAttribute("class", "main-nav-links")

    let rightPart= document.getElementById("menu-right-part")
    rightPart.setAttribute("class", "menu-right-part")

    let bars = document.getElementById("bars")
    bars.setAttribute("class", "hide")
    let cross = document.getElementById("cross")
    cross.setAttribute("class", "show")


}

function hidenavbaronMobile(){
    let bars = document.getElementById("bars")
    let mainLinks= document.getElementById("mainLinks")
    mainLinks.setAttribute("class", "hide")
    let rightPart= document.getElementById("menu-right-part")
    mainLinks.setAttribute("class", "hide")

    bars.setAttribute("class", "show")
    let cross = document.getElementById("cross")
    cross.setAttribute("class", "hide")
}

window.onload = ()=>{
   let nav =  document.getElementById('navbar-container')
   nav.innerHTML = mainNavBar();


    let showProduct = document.getElementById("show-product")
    showProduct.addEventListener("click", showProductSubmenu)

    let hideProduct =  document.getElementById("hide-product")
    hideProduct.addEventListener("click", hideProductSubmenu)

     // resources submenu 
     let showResources = document.getElementById("show-resources")
     showResources.addEventListener("click", showResourceSubmenu)
     let hideResources = document.getElementById("hide-resources")
     hideResources.addEventListener("click", hideResourceSubmenu)

     // solution submenu 
     let showsolutions = document.getElementById("show-solutions")
     showsolutions.addEventListener("click", showsolutionsubmenu)
     let hidesolutions = document.getElementById("hide-solutions")
     hidesolutions.addEventListener("click", hidesolutionsubmenu)

      // solution moresubmenu submenu 
      let showmoresubmenu = document.getElementById("show-more-submenu-toogle")
      showsolutions.addEventListener("click", showmoresubmenufromsolution)
      let hidemoresubmenu = document.getElementById("hide-more-submenu-toogle")
      hidesolutions.addEventListener("click", hidemoresubmenufromsolution)

      let bars = document.getElementById("bars")
      bars.addEventListener("click", shownavbaronMobile)
      let cross = document.getElementById("cross")
      cross.addEventListener("click", hidenavbaronMobile)

      if(window.innerWidth<768){
        let mainLinks= document.getElementById("mainLinks")
        mainLinks.setAttribute("class", "hide")

        let rightPart= document.getElementById("menu-right-part")
        mainLinks.setAttribute("class", "hide")
   }
    
}

window.onresize= ()=>{
   if(window.innerWidth>768){
        let resourceSubmenu = document.getElementById("resourceSubmenu")
        resourceSubmenu.setAttribute("class", "sub-menus")

        let productSubmenu = document.getElementById("productSubmenu")
        productSubmenu.setAttribute("class", "sub-menus")
        
        let mainLinks= document.getElementById("mainLinks")
        mainLinks.setAttribute("class", "main-nav-links")

        let rightPart= document.getElementById("menu-right-part")
        mainLinks.setAttribute("class", "menu-right-part")
        
   }

   if(window.innerWidth<768){
        let mainLinks= document.getElementById("mainLinks")
        mainLinks.setAttribute("class", "hide")

        let rightPart= document.getElementById("menu-right-part")
        rightPart.setAttribute("class", "hide")
        console.log(rightPart)
   }

}

