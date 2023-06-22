import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: "#home", text: "home"  }, 
  { id: 2, href: "#about", text: "about"  }, 
  { id: 3, href: "#services", text: "services"  }, 
  { id: 4, href: "#tours", text: "tours"  }, 
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"  }, 
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"  }, 
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"  }
];

export const services = [ 
  { id: 1, title: "saving money", icon: "fas fa-wallet fa-fw", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."  }, 
  { id: 2, title: "endless hiking", icon: "fas fa-tree fa-fw", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."  }, 
  { id: 3, title: "amazing comfort", icon: "fas fa-socks fa-fw", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."  }
];

export const tours = [
  { id: 1, img:tour1 ,date:"august 26th, 2020", title:"Tibet Adventure", place:"china" ,days:"6 days", rate:"from $2100", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."}, 
  { id: 2, img:tour2 ,date:"october 1th, 2020", title:"best of java", place:"indonesia" ,days:"11 days", rate:"from $1400", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."}, 
  { id: 3, img:tour3 ,date:"september 15th, 2020", title:"explore hong kong", place:"hong kong" ,days:"8 days", rate:"from $5000", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."},
  { id: 4, img:tour4 ,date:"december 5th, 2019", title:"kenya highlights", place:"kenya" ,days:"20 days", rate:"from $3300", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis."},
];


