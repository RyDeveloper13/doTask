const express = require("express");
const { request } = require("http");
const { message } = require("statuses");

//Setup Exrpess
const app = express();

const PORT = process.env.PORT || 3459

function doWork (task)
{
    return `Task Complete: ${task}`
}

app.get("/doWork", (request, response) => 
{
    //Input
    const task = request.query.task;

    const result = doWork (task);
    //Output

    console.log(result);
    //response.send(result)
    response.json({
        message: result
    })
})

app.get("/", (req, res) => res.send("This is the default"));

console.log(doWork('Learning express'));

app.listen(PORT, () => `Server is listening ${PORT}`);

