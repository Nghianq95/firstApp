var app = require('express')();
port = process.env.PORT || 3000;

app.get("/",(req, res)=>{
	res.sendFile(__dirname + "/demo.html");
});

app.listen(port, ()=>{
	console.log("server listen on port" + port);
});
