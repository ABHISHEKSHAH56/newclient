import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import BlogPage from "pages/BlogIndex"
import ContactUs from 'pages/ContactUs';
import AboutUs from 'pages/AboutUs';


export const components = {
  landingPages: {
    RestaurantLandingPage: {
      component: RestaurantLandingPage,
      url: "/components/landingPages/RestaurantLandingPage",
    },
  blogPages:{
    component: BlogPage,
    url: "/components/landingPages/blogPages",

  },
   
    
  },

  innerPages: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
      scrollAnimationDisabled: true,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
      
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
      
    },
    contactPage:{
      component: ContactUs,
      url: `/components/innerPages/contactPage`,

    },
    aboutUs:{
      component: AboutUs,
      url: `/components/innerPages/aboutUs`,

    }
  },
  
}

export default () => {
  const { type, name } = useParams()

  try {
    let Component = null;
    Component= components[type][name].component
    if(Component)
    return <Component/>
    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
