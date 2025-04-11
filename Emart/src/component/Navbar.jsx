import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid p-0 main-nav">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-evenly d-flex ">
          <a className="navbar-brand logo" href="#">
            <h1>
              <strong>IT'S PATHUU</strong>
            </h1>
            <h4>
              <strong>MART</strong>
            </h4>
          </a>
          <form className="form my-2 my-lg-0 d-flex">
            <input
              className="mr-sm-2 sreach px-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary my-2 my-sm-0 sreachbtn"
              type="submit"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="singup justify-content-evenly d=flex">
            <button className="btn btn-primary " id="singbtn">Login</button>
            <button className="btn btn-outline-primary" id="singbtn">Sing up</button>
          </div>
        </nav>
        <div className="menu">
          <ul className="navbar-nav mr-auto ulMEnu">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page">
                PAGES <i class="fa-solid fa-caret-down"></i>
              </a>
              <ul className="page-manu">
                <li>
                  <strong>Inner Pages : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        404 Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Order Tracking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Faq Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Coming Soon Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Other Shop Pages : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Cart Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Checkout Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Compare Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Wishlist Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Related Shop Pages : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Account Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Login & Register Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Empty Cart Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Thank You Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="image-list">
                  <ul>
                    <img
                      src="https://htmldemo.net/hmart/hmart/assets/images/banner/menu-banner.png"
                      alt=""
                    />
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link page">
                SHOP <i class="fa-solid fa-caret-down"></i>
              </a>
              <ul className="page-manu">
                <li>
                  <strong>Shop Page : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Shop 3 Column
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Shop 4 Column
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Shop Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Shop List Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Shop List Right Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Product Detail Page : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Product Single
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Variable
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Affiliate
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Group
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Tab 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Tab 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Single Product Page : </strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Product Slider
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Gallery Left
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Gallery Right
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Sticky Left
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Product Sticky Right
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Cart Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Single Product Page :</strong>
                  <ul>
                    <li>
                      <a href="#" className="nav-link">
                        Checkout Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Compare Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Wishlist Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Account Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Login & Register Page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        Empty Cart Page
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
