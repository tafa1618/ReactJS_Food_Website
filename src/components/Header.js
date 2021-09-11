import React from 'react'

const Header = () => {
  return (
    <>
         <header>
        <a href='#' class='logo'>
          <i class='fa fa-utensils'></i>resto.
        </a>

        <nav class='navbar' id='navbar'>
          <a class='active' href='#home'>
            home
          </a>
          <a href='#dishes'>dishes</a>
          <a href='#about'>about</a>
          <a href='#menu'>menu</a>
          <a href='#review'>review</a>
          <a href='#order'>order</a>
        </nav>

        <div class='icons'>
          <i class='fa fa-bars' id='menu-bars'></i>
          <i class='fa fa-search' id='search-icon'></i>
          <a href='#' class='fa fa-heart'></a>
          <a href='#' class='fa fa-shopping-cart'></a>
        </div>
      </header>
   
    
    
   
    
    <form action="" id="search-form">
        <input type="search" placeholder="search here..." name="" id="search-box" />
        <label for="search-box" class="fa fa-search"></label>
        <i class="fa fa-times" id="close"></i>
    </form>
    
    
    
    <section class="home" id="home">
    
        <div class="swiper-container home-slider">
    
            <div class="swiper-wrapper wrapper">
    
                <div class="swiper-slide slide">
                    <div class="content">
                        <span>our special dish</span>
                        <h3>spicy noodles</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                        <a href="#" class="btn">order now</a>
                    </div>
                    <div class="image">
                        <img src="images/home-img-1.png" alt="" />
                    </div>
                </div>
    
                <div class="swiper-slide slide">
                    <div class="content">
                        <span>our special dish</span>
                        <h3>fried chicken</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                        <a href="#" class="btn">order now</a>
                    </div>
                    <div class="image">
                        <img src="images/home-img-2.png" alt="" />
                    </div>
                </div>
    
                <div class="swiper-slide slide">
                    <div class="content">
                        <span>our special dish</span>
                        <h3>hot pizza</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                        <a href="#" class="btn">order now</a>
                    </div>
                    <div class="image">
                        <img src="images/home-img-3.png" alt="" />
                    </div>
                </div>
    
            </div>
    
            <div class="swiper-pagination"></div>
    
        </div>
    
    </section>
    
    
    </>
  )
}

export default Header
