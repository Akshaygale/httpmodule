const http=require("http")

http.createServer(function(request,response){

    // Send response using plain text , response on screen should be Hello world
                //  response.write("Hello World");

    
    // Send response using HTML, response on screen should be the explanation of Node.JS
                // response.write("<h1>HTML write</h1>")


    // Send JSON response, a student details like name, age, email, contact, course, date of joining.
        let students={name:"Itachi", age:21, email:"itachi@uchiha.com", conatct:8788269591, course:"MERN", date_of_joining:"5th Oct 2021"}
        response.write(JSON.stringify(students))

    response.end();
}).listen(3000)