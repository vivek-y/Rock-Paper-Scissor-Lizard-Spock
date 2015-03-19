var http = require("http");
var JSONObj= {outcome:"win",wins: 3,losses: 2 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
function displayResult(request, response) 
{
  switch(request.url)
  {
    case '/':
  response.writeHead(200);
  response.write("<html>");
  response.write("<head>");
  response.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css' type='text/css'>\n");
  response.write("<title>WebApp</title></head>");
  response.write("<body>");
  response.write("<h2>Rock    Paper    Scissor    Lizard    Spock</h2>");
  response.write("<br><br>");
  response.write("<form method='POST' action='/play/rock'>");
  response.write("<input type='submit' class='btn btn-info' value='Rock'>\n");
  response.write("</form>");
  response.write("<br><br>");
  response.write("<form method='POST' action='/play/paper'>");
  response.write("<input type='submit' class='btn btn-success' value='Paper'>");
  response.write("</form>");
  response.write("<br><br>");
  response.write("<form method='POST' action='/play/scissor'>");
  response.write("<input type='submit' class='btn btn-primary' value='Scissor'>");
  response.write("</form>");
  response.write("<br><br>");
  response.write("<form method='POST' action='/play/lizard'>");
  response.write("<input type='submit' class='btn btn-danger' value='Lizard'>");
  response.write("</form>");
  response.write("<br><br>");
  response.write("<form method='POST' action='/play/spock'>");
  response.write("<input type='submit' class='btn btn-warning' value='Spock'>");
  response.write("</form>");
  response.write("<br><br>");
  response.write("</body>");
  response.write("</html>");
  response.end();
  break;

    case '/play/rock':
        var Users='rock';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];     
        if(Users==="rock")
         {
            if(Users===rest)
            {
              response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="paper")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="scissor")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="lizard")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else(rest==="spock")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }

         }   
      break;

      case '/play/paper':
        var Users='paper';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="paper")
         {
            if(Users===rest)
            {
              response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="rock")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="scissor")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="lizard")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else(rest==="spock")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }

         }   
      
      break;

        case '/play/scissor':
        var Users='scissor';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="scissor")
         {
            if(Users===rest)
            {
              response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="rock")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="paper")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="lizard")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else(rest==="spock")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }

         }   
      break;
              
        case '/play/lizard':
        var Users='lizard';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="lizard")
         {
            if(Users===rest)
            {
              response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="rock")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="scissor")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="paper")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else(rest==="spock")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
         }   
      
      break;

        case '/play/spock':
        var Users='spock';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="spock")
         {
            if(Users===rest)
            {
              response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie;'
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="rock")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="scissor")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else if(rest==="lizard")
            {
              response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }
            else(rest==="paper")
            {
              response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write(JSON.stringify(JSONObj));
              response.end();
            }

         }   
      
      break;

  }
}
http.createServer(displayResult).listen(3000);
console.log("Ready to play!");