
import store from "@/store";

export default {
  install(app, options) {
    const { router, apps } = options;
    apps.forEach(appName => {


      try {
        const { groups } = require('../apps/' + appName + '/aside.js');
        store.commit("aside/addGroups", groups)
      } catch (err) {
        console.log("routes n'exist pas ")
      }

      try {
        const { routes } = require('../apps/' + appName + '/routes.js');
        routes.forEach(route => {
          if (route.parent != null)
            router.addRoute(route.parent, route);
          else
            router.addRoute(route);
        });
      } catch (err) {
        console.log("routes n'exist pas ")
      }

      try {
        const { icons } = require('../apps/' + appName + '/icons.js');
        icons.forEach(icon=>{
          app.component(icon.name, icon.icon);
        })
      } catch (error) {

        console.log("error load icons ")
      
      }

    })



  },
};