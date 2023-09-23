import React from 'react'

import './Header2.css';
export default function Header2() {
  return (
    <section className='container'>
        <>
  <title>Navigation Bar with different Icons</title>
  {/* change or write your page title with the help of title tags*/}
  <link rel="stylesheet" type="text/css" href="nav.css" />
  {/* connect css file with html useing link tag */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* link this font-awesome icon css link with html file for accessing all fornt awesome
  icon form boostrapcdn.com */}
  <ul>
    {/*starting ul tag to create unordered lists.*/}
    <li>
      {/*The HTML li element is used to represent an item in a list. ... In menus and unordered lists*/}
      {/*the a tag defines a hyperlink, which is used to link from one page to another*/}
      <a href="#">
        {/* this anchor text for link your home to another page */}
        <div className="icon">
          <i className="fa fa-home" aria-hidden="true" />
          {/* this is home icon link get form fornt-awesome icon for home button */}
          <i className="fa fa-home" aria-hidden="true" />
          {/* copy and paste the home icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Home">Home</span>
        </div>
        {/* we are create first menu item name home */}
      </a>
    </li>
    <li>
      <a href="#">
        {/* this anchor text for link your About page to another page */}
        <div className="icon">
          <i className="fa fa-file" aria-hidden="true" />
          {/* this is file icon link get form fornt-awesome icon for about */}
          <i className="fa fa-file" aria-hidden="true" />
          {/* copy and paste the file icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="About">About</span>
        </div>
        {/* we are create second menu item name About */}
      </a>
    </li>
    <li>
      <a href="#">
        {/* this anchor text for link your service page to another page */}
        <div className="icon">
          <i className="fa fa-cogs" aria-hidden="true" />
          {/* this is cogs icon link get form fornt-awesome iocn for service menu */}
          <i className="fa fa-cogs" aria-hidden="true" />
          {/* copy and paste the cogs icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Services">Services</span>
        </div>
        {/*- we are create third menu item name services */}
      </a>
    </li>
    <li>
      <a href="#">
        {/* this anchor text for link your portfolio page to another page */}
        <div className="icon">
          <i className="fa fa-picture-o" aria-hidden="true" />
          {/* this is picture icon link get form fornt-awesome icon for portfolio */}
          <i className="fa fa-picture-o" aria-hidden="true" />
          {/* copy and paste the picture icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Portfolio">Dashboard</span>
        </div>
        {/* we are create fourth menu item name portfolio */}
      </a>
    </li>
    <li>
      <a href="#">
        {/* this anchor text for link your team page to another page */}
        <div className="icon">
          <i className="fa fa-users" aria-hidden="true" />
          {/* this is picture icon link get form fornt-awesome icon for portfolio */}
          <i className="fa fa-users" aria-hidden="true" />
          {/* copy and paste the home icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Team">Forum & Discussion</span>
        </div>
        {/* we create first menu item name home */}
      </a>
    </li>
    <li>
      <a href="#">
        {/* this anchor text for link your home to another page */}
        <div className="icon">
          <i className="fa fa-envelope" aria-hidden="true" />
          {/* this is picture icon link get form fornt-awesome icon for portfolio */}
          <i className="fa fa-envelope" aria-hidden="true" />
          {/* copy and paste the home icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Contact">Contact</span>
        </div>
        {/* we create first menu item name home */}
      </a>
    </li>
    <li>
      
     
      
      <a href="#">
        {/* this anchor text for link your login page to another page */}
        <div className="icon">
          <i className="fa fa-sign-in" aria-hidden="true" />
          {/* this is sign in icon link get form fornt-awesome icon for Login */}
          <i className="fa fa-sign-in" aria-hidden="true" />
          {/* copy and paste the sign in  icon link here for hover effect */}
        </div>
        <div className="name">
          <span data-text="Login">Login</span>
        </div>
        {/* we are create tenth menu item name login panel */}
      </a>
    </li>
  </ul>
</>

    </section>

  )
}
