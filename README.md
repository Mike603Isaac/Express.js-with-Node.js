This is my readme file


SECTION 24: Express.js with Node.js

      LESSON 201: What is Express?
It is the Node framework that is ranked high used among so many developers. Node is a RUNTIME environment.VScode is dev using Node.
 Why do we need Express? Express because it make the backend much easier, shorter code and scalabe programme and also modular. - readability, less code and middleware

        LESSON 202: Creating our first server with Express
 We have the client side(frontend) and server side(backend). The application listens to the reqest from user which makes a request through the browser to the server that is on 24/7 somewhere in the world. The application listens to the request and responds with the html, css and javascript to the user over the internet

  * Using the Express we follow:
  - Create a directory
  -create index.js file
  - initialize the npm
  - install Express package
  - write server application in the index.js
  - start server

* Write Server Application in the index.js
     we have the object method.
     we have the listen method, get method, post method, push method and pull method
  - The listen method is used to Listen for request made to server
  - The get request is used to get resource from the server e.t.c

* After each of the method the parenthesis consist of port and a callback function for performance *

* To start our server run the "localhosot:<port>" *

* The server has different doors for listen for request so to have different request on the server without interferance*

* We can use the command "netstat -ano | "LISTENING" this is to know which of the ports that are available for listening for request from outside*

|  represent a pipe symbol
`` represent a backtick symbol


      LESSON 203: Making HTTP Requests
Learning language to make requests to your server; 
hypertext: just like html
Transfer Protocol: the agreed language to communicate over the internet. A language that allow computer to commuicate over the internet

* Major HTTP REQUEST Vocab: 
They are 5 major request
1. Get: requesting a from server
2. Post: sednding a resource to the server e.g email or like sign up 
3. Patch: This are update method, but this is replace a resource (more like total replacement)
4. Put: This is also update, but its like a repair (more like replace just a section)
5. Delete This is to delete a resource from the server or the database*

1. Get: requesting a from server:
We use the get express method to access a resource on our server.
This is like endpoints
"/" this is the homepage also known as root
"/about" used to navigate the about endpoints
"/contact" used to navigate the contact endpoints

      LESSON 204: Making Requests (PostMan)
    Postman and making other HTTP requests
The client side is anything the user uses to access our server side could be desktop, laptop and other phones

- when response using the application from the server send a html, css, javascript and also a 404 which is an http Standard Response Status Codes

* HTTP RESPONSE STATUS CODES: are indicator whether a specific HTTP request has been succesfully completed
1. Informational responses (100 -199)
2. Succesful responses (200 - 299) e.g the request has been sent successfully
3. Redirection messages (300 -399)
4. Client error responses (400 - 499) e.g 404 means the client has done something that is not right or entered a wrong error/ "typed wrong url"

5. server error responses (500 -599)
          defined by RFC 9110 and for more details: developer.mozilla.org/docs/Web/HTTP/Status



2. Post
Sends data to the server for processing. this also result in the change of the server state.
Note: this post request is usually made from the html Form, e.g a sign up page. Which the data goes to the server through a post request. 200 response with somebit of information or 201 response everything is successfully with no information.

* POSTMAN is a professional tools that developers use to test all and develop all backend HTTP REQUEST
To Download @ postman.com/download/ for free

We could perform all the request, set the various endpoint and their urls.
Most developers will use postman along side with node to be able to test thier HTTP request.
- Server need to be up and running for the postman request to work.

- In most downloaded node project there is usually no add of the node modules. so to just add them without skipping any we have to use the command to install all the npm package needed "npm install" which will automatically install the needed modules.


* Testing http request: get, post, put, patch and delete
- for GET: just set the path and .res.send()
- for POST: just set the path and .res.sendStatus(201) and body and x-www-form-urlencoded
- for PUT: just set the path and .res.sendStatus(200) and body and x-www-form-urlencoded and all the input must be replace or updated
- for PATCH: just set the path and .res.sendStatus(200) and body and x-www-form-urlencoded. Just what is needed will be updated
- for DELETE: just the path is needed and .res.sendStatus(200). Just everything will be deleted




LESSON 205: Introduction To Middleware
This is also known as Express Middleware; The man in the middle. using body-parser together with HTML FORMS.

The middleware is the man in the middle between the server and the Routes handlers. The middleware can perform:
- Preprocessing of the request before sending it to the handlers
- Used to log in the request
- Can also be used as Authentication before we allow a login through our backend we see if the user is authorised
- Also process any error in the request
A commonly used middleware is BODY-PARSER: an this is used to get the parser incoming request bodies before handler. 
                  * "Parse incoming request bodies in a middleware before your handlers, available under the req.body property." *
having a form attribute: action ="" this is usually the route; method="" is usually the http request. This refers to how we what the form to be processed by our backend 

res.sendFile express method request an exact file path in other to get file: so we use 
res.sendFile(__dirname + "/public/index1.js") After the declare of this // use to be able to locate a path remotely when hosted on server, which does this relative to the location of file 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // Ends here //this is also some kind of conversion.

// This allow objects or array entered by users to be queried. The bodyParser is used
app.use(bodyParser.urlencoded({ extended: true}))
Pre-processing category of MiddleWare: e.g is bodyParser

LESSON 206: Another Popular Middleware Called "Logging"
Focus: We are looking at logging and How to create my own middleware
* Logging category of MiddleWare: e.g morgan: this is used to log request to our server. This gives us details like of the login like type of request, date and time, request location and region and e.t.c

to use the morgan middle ware we use: app.use(morgan("type e.g tiny, combine, common e.t.c"))

* Creating our own middleware:
app.use((req, res, next) => { // takes params
      console.log("Request method:", req.method); // This line of code is logging the req.meth and 
      next(); // This is used to move to the next middleware or nextline of code
}) 

app.use(functionName) //this can be also used to call a function before use

res.redirect("/")// used to redirect back to homepage

Note: That because of the use of bodyParser frequently and its important it has been incorporated to express such that we dont need to install and import it any longer when trying to use we can just command:
// app.use(express.urlencoded({ extended: true})); and the bodyParser import module can be cancelled