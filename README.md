angularjs-skeleton
==================

AngularJS skeleton app running on a http-server from NodeJS. Great tools are included like Bower, Bootstrap. Additional Angular goodies are added: angular cookies, angular route. 

To run the application simply type in a command line 'npm start' - this will trigger http-server to run on a free port on your PC (starting with 8080 if free). A simple link menu is created, with two pages: homepage and about us.

Good luck! For questions or collaborations, do not hesitate to contact me at iulitaro@gmail.com.


1. Install nodejs

Node.js is a cross-platform runtime environment for server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows and Linux with no changes.
(ref: http://stackoverflow.com/questions/1884724/what-is-node-js)
How to install:
- use a windows package manager (such as Chocolatey)
- manually install (add environment variables and run node in command line to verify)

Advisable:
- use helpers such as Underscore

2. Install npm

npm is a NodeJS package manager. As its name would imply, you can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.

npm is included in the nodejs installation

      2.1. Updating packages
    
      npm update
      
      2.2. Make a package: the package.json file
      
      The package.json file goes in the root of your package. It tells npm how your package is structured, and what to do to install it.
      Most of the time, you only need the "name", "version", and "main" fields (even for node-waf compiled addons).
      
      To interactively create a package.json file, use the npm-init command (ref: https://www.npmjs.org/doc/cli/npm-init.html )
      
      2.3. Create package.json file
      
      - Use npm-init command to generate the package.json file (ref: http://stackoverflow.com/questions/9961502/is-there-a-way-to-automatically-build-the-package-json-file-for-node-js-projects )
      
      Edit the package.json file:
      
      - specify engines  (ref:   https://www.npmjs.org/doc/files/package.json.html )
      - add scripts (run them from command line)
      "scripts": {
        "start": "http-server app",
        "less": "lessc app/css/style.css > app/css/style.css"
      }
      
3. Install bower

    3.1. Run: npm install bower
    3.2. Change bowers default components folder (ref: http://stackoverflow.com/questions/14079833/how-to-change-bowers-default-components-folder)
    
    Create a .bowerrc in the project root with the content 
    
    {
      "directory" : "app/components"
    }
    
    
4. Install helpers with bower

- bootstrap (UI): bower install bootstrap ( + bootstrap additions ) 
- underscore (for arrays and others) : bower install underscore
- moment (for dates) :  bower install moment

5. Create folder structure

- app (main AngularJS folder)
  - components (bower components)
  - css (files less or css)
  - js (directives, controllers, services)
  - views (views grouped by features)
  - fonts (font files)
  - images 
  - languages (internationalization)

6. Add your first controller/view
controllers/aboutCtrl.js - views/about.html
controllers/homepageCtrl.js - views/homepage.html

7. Include the controller/view and run the app

- modify app.js and include the controllers
- run the app: npm start (*please note that it's the script in the package.json file)


      
      