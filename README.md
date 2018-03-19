# Node.js-REST-API---HTTP-methods-routes-authentication-HTML-
Start a server with express module. It presents HTTP methods (GET, POST, PUT, DELETE), how express router works and authentication with JWT (JSON WEB TOKENS). After successful login from a login HTML form, the server redirects to another HTML page.

# 1.Go from command line to where the movies folder exists.

# 2.List items from folder with ls command and observe that server.js file exists.

# 3.Make sure you have installed Node.js (https://nodejs.org/en/download/)

# 4.Execute from command line npm init and complete the instructions.
Complete name, version, description, entry point, test command, git repository, keywords, author, license
Finally write yes after “Is this ok?” question. You could also press enter to set defaults.

# 5. Install express module in same folder
npm install express --save 
In the console will appear:
movies@1.0.0 /Users/Cristi/Desktop/movies
└─┬ express@4.16.3 
  ├─┬ accepts@1.3.5 
  │ ├─┬ mime-types@2.1.18 
  │ │ └── mime-db@1.33.0 
  │ └── negotiator@0.6.1 
  ├── array-flatten@1.1.1 
  ├─┬ body-parser@1.18.2 
  │ ├── bytes@3.0.0 
  │ ├─┬ http-errors@1.6.2 
  │ │ ├── depd@1.1.1 
  │ │ ├── inherits@2.0.3 
  │ │ └── setprototypeof@1.0.3 
  │ ├── iconv-lite@0.4.19 
  │ └── raw-body@2.3.2 
  ├── content-disposition@0.5.2 
  ├── content-type@1.0.4 
  ├── cookie@0.3.1 
  ├── cookie-signature@1.0.6 
  ├─┬ debug@2.6.9 
  │ └── ms@2.0.0 
  ├── depd@1.1.2 
  ├── encodeurl@1.0.2 
  ├── escape-html@1.0.3 
  ├── etag@1.8.1 
  ├─┬ finalhandler@1.1.1 
  │ └── unpipe@1.0.0 
  ├── fresh@0.5.2 
  ├── merge-descriptors@1.0.1 
  ├── methods@1.1.2 
  ├─┬ on-finished@2.3.0 
  │ └── ee-first@1.1.1 
  ├── parseurl@1.3.2 
  ├── path-to-regexp@0.1.7 
  ├─┬ proxy-addr@2.0.3 
  │ ├── forwarded@0.1.2 
  │ └── ipaddr.js@1.6.0 
  ├── qs@6.5.1 
  ├── range-parser@1.2.0 
  ├── safe-buffer@5.1.1 
  ├─┬ send@0.16.2 
  │ ├── destroy@1.0.4 
  │ └── mime@1.4.1 
  ├── serve-static@1.13.2 
  ├── setprototypeof@1.1.0 
  ├── statuses@1.4.0 
  ├─┬ type-is@1.6.16 
  │ └── media-typer@0.3.0 
  ├── utils-merge@1.0.1 
  └── vary@1.1.2 
  
# 6. Install jsonwebtoken module in same folder
npm install jsonwebtoken --save 
In the console will appear:
movies@1.0.0 /Users/Cristi/Desktop/movies
└─┬ jsonwebtoken@8.2.0 
  ├─┬ jws@3.1.4 
  │ ├── base64url@2.0.0 
  │ └─┬ jwa@1.1.5 
  │   ├── buffer-equal-constant-time@1.0.1 
  │   └── ecdsa-sig-formatter@1.0.9 
  ├── lodash.includes@4.3.0 
  ├── lodash.isboolean@3.0.3 
  ├── lodash.isinteger@4.0.4 
  ├── lodash.isnumber@3.0.3 
  ├── lodash.isplainobject@4.0.6 
  ├── lodash.isstring@4.0.1 
  ├── lodash.once@4.1.1 
  ├── ms@2.1.1 
  └── xtend@4.0.1 

# 7.Execute from command line node server.js

# 8. Test every functionality with node routes-server.js, auth-server.js and login-server.js
