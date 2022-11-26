

let mainNavBar = () =>{
return  ` 
    <nav>
        <div class="main-navbar">
            <div class="brand-logo">
                <a href="/">
                    <img class="brand-logo-img" src="https://seekvectorlogo.com/wp-content/uploads/2022/02/wrike-inc-vector-logo-2022.png" alt="">
                </a>

                <div class="show" id="bars">
                    <i class="fa-sharp fa-solid fa-bars"></i>
                </div>

                <div class="hide" id="cross">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
            </div>            
            <div class="nav-links-container">
            
            <ul class="main-nav-links" id="mainLinks">
                <li>
                    <div class="product-link-container"> 
                     <a href="#"> Product </a> 
                     <b class="show" id="show-product">
                        <i class="fa-solid fa-angle-down"></i>
                     </b>

                     <b class="hide" id="hide-product">
                             <i class="fa-solid fa-angle-up"></i>
                     </b>
                     
                    </div>
                       
                        <ul class="htmlCss-sub-menu sub-menus" id="productSubmenu">
                            <li><a href="./kalesha/kalesha/TakeaTour.html">Take a Tour</a></li>
                            <li><a href="./kalesha/kalesha1/features.html">Features</a></li>
                            <li><a href="./kalesha/kalesha2/templates.html">Project Templates</a></li>
                            <li><a href="./kalesha/kalesha3/App.html">WApps & Integtations</a></li>
                            <li><a href="./kalesha/kalesha4/demo.html">Demo Video</a></li>
                        </ul>
                </li>

                <li>
                    <a href="./price.html">Pricing</a></li>
                <li>
                <div class="product-link-container" > 
                    <a href="#"> Resources </a> 
                    <b class="show" id="show-resources">
                    <i class="fa-solid fa-angle-down"></i>
                    </b>

                    <b class="hide" id="hide-resources">
                            <i class="fa-solid fa-angle-up"></i>
                    </b>
                
               </div>
                    
                    <ul class="css-sub-menu sub-menus" id="resourceSubmenu">
                        <li><a href="./resource.html">Resources</a></li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./webinar.html">Webinars</a></li>
                        <li><a href="#">Case studies</a></li>
                        <li><a href="./educationalguides.html">Educational Guides</a></li>
                    </ul>
                    </li>
                    <li>
                <div class="product-link-container"> 
                    <a href="#"> Solution </a> 
                    <b class="show" id="show-solutions">
                    <i class="fa-solid fa-angle-down"></i>
                    </b>

                    <b class="hide" id="hide-solutions">
                        <i class="fa-solid fa-angle-up"></i>
                    </b>
                
               </div>
                        
                        <ul class="js-sub-menu sub-menus" id="solutions-submenu">
                            <li><a href="./ProjectManagers.html">Projects Managers</a></li>
                            <li><a href="./marketing.html">Marketing</a></li>
                            <li><a href="">Creative</a></li>
                            <li><a href="">Profesional Services</a></li>
                            <li><a href="">Product Development</a></li>
                            <li><a href="./enterprice.html">Enterprise Project Management</a></li>
            </ul>
            </div> 

            <div class="menu-right-part" id="menu-right-part">
                <ul class="linking">
                    <li>
                        <a href="">En</a>
                        
                    <ul class="sub-language sub-menus">
                        <li>English</li>
                        <li>Spanish</li>
                        <li>Portugese</li>
                        <li>German</li>
                        <li>Hindi</li>
                        <li>Bangla</li>
                        <li>Polski</li>
                        <li>French</li>
                        <li>Russian</li>
                        <li>Chinese</li>
                    </ul>
                    </li>
                </ul>
                <h3><a href="./contact-sales.html">Contact sales</a></h3>
                <a href='./login.html' target="_blank">
                <input type="button" class="button button-plain" value="Log in"></a>
                <input type="button" class="button button-register" value="Start for free">
            </div>

            </div>

            
    </nav>      
`;
}

export default mainNavBar;










/*






*/