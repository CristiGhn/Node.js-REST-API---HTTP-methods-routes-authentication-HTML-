# Node.js-REST-API---HTTP-methods-routes-authentication-HTML-
Start a server with express module. It presents HTTP methods (GET, POST, PUT, DELETE), how express router works and authentication with JWT (JSON WEB TOKENS). After successful login from a login HTML form, the server redirects to another HTML page.

1. Go from command line to where the movies folder exists.

2. List items from folder with ls command and observe that server.js file exists.

3. Make sure you have installed Node.js (https://nodejs.org/en/download/)

4. Execute from command line npm init and complete the instructions.
Complete name, version, description, entry point, test command, git repository, keywords, author, license
Finally write yes after “Is this ok?” question. You could also press enter to set defaults.

5. Install express module in same folder
npm install express --save 

In the console will appear:

movies@1.0.0 /Users/Cristi/Desktop/movies
--- express@4.16.3 
   --- accepts@1.3.5 
   ...
  
6. Install jsonwebtoken module in same folder
npm install jsonwebtoken --save 

In the console will appear:

movies@1.0.0 /Users/Cristi/Desktop/movies
--- jsonwebtoken@8.2.0   
    --- jws@3.1.4 
    ...

7. Execute from command line node server.js

8. Test every functionality with node routes-server.js, auth-server.js and login-server.js
