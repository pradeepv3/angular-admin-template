import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./app-sidebar.component.html"
})
export class AppSidebarComponent implements OnInit {

  navItem = [
    { 
      displayName: "Dashboard",
      iconName: "home",
      route: "/dashboard",
    },
    { 
      displayName: "Components", 
      iconName: "emotsmile",
      route: "#",  
      children: [
        {	
          displayName: "Accordion",
          route: "/basiccomponent/accordion",
          iconName: "link",
        },
        {	
          displayName: "Cards",
          route: "/basiccomponent/cards",
          iconName: "link",
        },
        {	
          displayName: "Buttons",
          route: "/basiccomponent/buttons",
          iconName: "link",
        },
        {	
          displayName: "Carousel",
          route: "/basiccomponent/carousel",
          iconName: "link",
        },
        {	
          displayName: "Datepicker",
          route: "/basiccomponent/datepicker",
          iconName: "link",
        },
        {	
          displayName: "Modal",
          route: "/basiccomponent/modal",
          iconName: "link",
        },
        {	
          displayName: "Pagination",
          route: "/basiccomponent/pagination",
          iconName: "link",
        },
        {	
          displayName: "Popover",
          route: "/basiccomponent/popover",
          iconName: "link",
        },
        {	
          displayName: "Progressbar",
          route: "/basiccomponent/progressbar",
          iconName: "link",
        },
        {	
          displayName: "Rating",
          route: "/basiccomponent/rating",
          iconName: "link",
        },
        {	
          displayName: "Tabs",
          route: "/basiccomponent/tabs",
          iconName: "link",
        },
        {	
          displayName: "Tooltip",
          route: "/basiccomponent/tooltip",
          iconName: "link",
        }
      ]
    },
    {
      displayName: "Forms",
      iconName: "note",
      route: "#",
      children: [
        {
          displayName: "Basic",
          iconName: "link",
          route: "/forms/basic"
        },
        {
          displayName: "Advanced",
          iconName: "link",
          route: "/forms/advanced"
        },
        {
          displayName: "Validation",
          iconName: "link",
          route: "/forms/validation"
        }
      ]
    },
    {
      displayName: "Icons",
      iconName: "frame",
      route: "#",
      children: [
        {
          displayName: "FontAwesome",
          badgeText: "5.0",
          iconName: "link",
          route: "/icons/fontawesome"
        },
        {
          displayName: "Simple Line Icons",
          iconName: "link",
          route: "/icons/simplelineicons"
        }
      ]
    },
    {
      displayName: "Graph",
      iconName: "graph",
      route: "#",
      children: [
        {
          displayName: "Chart JS",
          iconName: "link",
          route: "/chartjs"
        }
      ]
    },
    {
      displayName: "Widget",
      iconName: "calculator",
      route: "/widgets"
    },
    {
      displayName: "Tables",
      iconName: "list",
      route: "#",
      children: [
        {
          displayName: "Basic",
          iconName: "link",
          route: "/table/basic"
        },
        {
          displayName: "Datatable",
          iconName: "link",
          route: "/table/datatable"
        }
      ]
    },
    {
      displayName: "Pages",
      iconName: "notebook",
      route: "#",
      children: [
        {
          displayName: "Login",
          iconName: "link",
          route: "/login"
        },
        {
          displayName: "Register",
          iconName: "link",
          route: "/register"
        }
      ]
    }
  ]
  ngOnInit() { }
}