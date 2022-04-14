Backend for the e-commerce module 8 in Hyper Island. 
1. Run: npm install
2. Run: npm run dev

TO GET ACCESS TO DB
    Login to mongodb-atlas and allow your IP adress access under
    SECURITY/NETWORK ACESS

Structure is setup as following:
FILES:
- server.js is the main source
- .env holds port & login for database
FOLDERS:
    config
        - db.js, this is where we connect to the mongodb database
    controllers
        - this is where the requests functions are sorted
    middleware
        - middleware used in routes, such as "protect" which checks for
        authentication of user
    models
        - this is where the schema of requests are sorted
    routes
        - this is where routes to the backend are specified
        - also look at server.js for base routes