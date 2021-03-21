
function drawBoard(){

  var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");

  //outer rectangle
  context.fillStyle="#493d26";
  context.fillRect(0,0,500,500);

  // inner rectangle
  context.fillStyle="#f3e5ab";
  context.fillRect(20,20,460,460);
  
   //corner1 arc
   context.beginPath();
   context.fillStyle="#000000";
   context.lineWidth = 0;
   context.arc(30, 30, 20, 1.82*Math.PI , 0.68*Math.PI);
   context.fill();
   context.stroke();

   // corner1 traingle
   var path = new Path2D();
   path.moveTo(20,20);
   path.lineTo(20,47);
   path.lineTo(47,20);
   context.fillStyle="#000000";
   context.fill(path);  
  
   //corner2 arc
   context.beginPath();
   context.fillStyle="#000000";
   context.lineWidth = 0;
   context.arc(30, 470, 20, 1.33*Math.PI , 0.18*Math.PI);
   context.fill();
   
   // corner2 traingle
   var path = new Path2D();
   path.moveTo(480,20);
   path.lineTo(453,20);
   path.lineTo(480,47);
   context.fillStyle="#000000";
   context.fill(path);
   
   //corner3 arc
   context.beginPath();
   context.fillStyle="#000000";
   context.lineWidth = 0;
   context.arc(470, 470, 20, 0.82*Math.PI , 1.68*Math.PI);
   context.fill();
   //context.stroke();

   // corner3 traingle
   var path = new Path2D();
   path.moveTo(20,480);
   path.lineTo(47,480);
   path.lineTo(20,453);
   context.fillStyle="#000000";
   context.fill(path);
   
   //corner4 arc
   context.beginPath();
   context.fillStyle="#000000";
   context.lineWidth = 0;
   context.arc(470, 30, 20, 0.31*Math.PI , 1.178*Math.PI);
   context.fill();
   //context.stroke();

   // corner1 traingle
   var path = new Path2D();
   path.moveTo(480,480);
   path.lineTo(453,480);
   path.lineTo(480,453);
   context.fillStyle="#000000";
   context.fill(path); 
   
   //to be removed later
   // context.fillStyle="blue";
   //context.fillRect(80,80,340,340);
   
   //centre circle
   context.beginPath();
   context.fillStyle="#000000";
   context.lineWidth = 0;
   context.arc(250, 250, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   //ring1
   context.beginPath();
   context.lineWidth = 0;
   context.arc(250, 250, 50, 0*Math.PI , 2*Math.PI);
   context.stroke();

    //ring2
   context.beginPath();
   context.lineWidth = 0;
   context.arc(250, 250, 52, 0*Math.PI , 2*Math.PI);
   context.stroke();

   //ring3
   context.beginPath();
   context.lineWidth = 0;
   context.arc(250, 250, 54, 0*Math.PI , 2*Math.PI);
   context.stroke();
   
   //set1
   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(110, 85, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(110, 85, 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

      context.beginPath();
      context.moveTo(110, 71);
      context.lineTo(390, 71);
      context.stroke();

      context.beginPath();
      context.moveTo(110, 99);
      context.lineTo(390, 99);
      context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(390, 85, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(390, 85, 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(110, 415, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(110, 415, 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   	  context.beginPath();
      context.moveTo(110, 401);
      context.lineTo(390, 401);
      context.stroke();

      context.beginPath();
      context.moveTo(110, 429);
      context.lineTo(390, 429);
      context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(390, 415, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(390, 415, 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   // set2
   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(85, 110, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(85, 110 , 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

      context.beginPath();
      context.moveTo(71, 110);
      context.lineTo(71, 390);
      context.stroke();

      context.beginPath();
      context.moveTo(99, 110);
      context.lineTo(99, 390);
      context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(85, 390, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(85, 390 , 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(415, 110, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(415 , 110 , 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   	  context.beginPath();
      context.moveTo(401, 110);
      context.lineTo(401, 390);
      context.stroke();

      context.beginPath();
      context.moveTo(429, 110);
      context.lineTo(429, 390);
      context.stroke();

   context.beginPath();
   context.fillStyle="#ff0000";
   context.lineWidth = 0;
   context.arc(415, 390, 12, 0*Math.PI , 2*Math.PI);
   context.fill();
   context.stroke();
   
   context.beginPath();
   context.lineWidth = 0;
   context.arc(415, 390, 14, 0*Math.PI , 2*Math.PI);
   context.stroke();

   //mini circles

   context.beginPath();
   context.lineWidth = 0;
   context.arc(97, 97 , 4 , 0*Math.PI , 2*Math.PI);
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(403, 403 , 4 , 0*Math.PI , 2*Math.PI);
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(97, 403 , 4 , 0*Math.PI , 2*Math.PI);
   context.stroke();

    context.beginPath();
   context.lineWidth = 0;
   context.arc(403, 97 , 4 , 0*Math.PI , 2*Math.PI);
   context.stroke();

   // 4 straight lines

    context.beginPath();
    context.moveTo(60, 60);
    context.lineTo(180, 180);
    context.stroke();

    context.beginPath();
    context.moveTo(440, 440);
    context.lineTo(320, 320);
    context.stroke();

    context.beginPath();
    context.moveTo(60, 440);
    context.lineTo(180, 320);
    context.stroke();

    context.beginPath();
    context.moveTo(440, 60);
    context.lineTo(320, 180);
    context.stroke();

    // 4 outer arcs

   context.beginPath();
   context.lineWidth = 0;
   context.arc(160, 160 , 28 , 1.5*Math.PI , 1*Math.PI);
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(340, 340 , 28 , 0.5*Math.PI , 2*Math.PI);
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(340, 160 , 28 , 0*Math.PI , 1.5*Math.PI);
   context.stroke();

   context.beginPath();
   context.lineWidth = 0;
   context.arc(160, 340 , 28 , 1*Math.PI , 0.5*Math.PI);
   context.stroke();

}

function createCorners(){

   var temp_corner = {
    	x: 15,
    	y:15,
    	radius:15,
    };
    corner.push(temp_corner);

    temp_corner = {
    	x: 15,
    	y:445,
    	radius:15,
    };
    corner.push(temp_corner);

     temp_corner = {
    	x: 445,
    	y:445,
    	radius:15,
    };
    corner.push(temp_corner);

     temp_corner = {
    	x: 445,
    	y:15,
    	radius:15,
    };
    corner.push(temp_corner);
}

function createCoins(){

   var tempBall;

    tempBall = {
    	x: 230,
    	y: 395,
    	mass:1,
    	radius: 14,
    	speed: 0,
    	radians: 0,
    	xunits:0,
    	yunits:0,
    	points: -5,
    	isonhole: false,
    	draw: function(){

    	   context1.beginPath();
		   context1.fillStyle="white";
		   context1.lineWidth = 0;
		   context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
		   context1.fill();
		   context1.stroke();

		   context1.beginPath();
		   context1.arc(this.x, this.y , this.radius-7  , 0.2*Math.PI , 1.8*Math.PI);
		   context1.fill();
		   context1.stroke();

    	}
    };
    balls.push(tempBall);

    tempBall = {
    	x: 230,
    	y: 230,
    	mass:1,
    	radius: 14,
    	speed: 0,
    	radians: 0,
    	xunits:0,
    	yunits:0,
    	points: 20,
    	isonhole: false,
    	draw: function(){
    	   context1.beginPath();
		   context1.fillStyle="green";
		   context1.lineWidth = 0;
		   context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
		   context1.fill();
		   context1.stroke();
    	}
    };

    balls.push(tempBall);
     tempBall = {
    	x: 270,
    	y: 229,
    	mass:1,
    	radius: 14,
    	speed: 0,
    	radians: 0,
    	xunits:0,
    	yunits:0,
    	points: 10,
    	isonhole: false,
    	draw: function(){
    	   context1.beginPath();
		   context1.fillStyle="#313191";
		   context1.lineWidth = 0;
		   context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
		   context1.fill();
		   context1.stroke();
    	}
    };

   balls.push(tempBall);
     tempBall = {
      x: 190,
      y: 229,
      mass:1,
      radius: 14,
      speed: 0,
      radians: 0,
      xunits:0,
      yunits:0,
      points: 10,
      isonhole: false,
      draw: function(){
       context1.beginPath();
       context1.fillStyle="#313191";
       context1.lineWidth = 0;
       context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
       context1.fill();
       context1.stroke();
      }
    };
   balls.push(tempBall);

    tempBall = {
      x: 228,
      y: 190,
      mass:1,
      radius: 14,
      speed: 0,
      radians: 0,
      xunits:0,
      yunits:0,
      points: 10,
      isonhole: false,
      draw: function(){
       context1.beginPath();
       context1.fillStyle="#313191";
       context1.lineWidth = 0;
       context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
       context1.fill();
       context1.stroke();
      }
    };
    balls.push(tempBall);

   tempBall = {
      x: 235,
      y: 270,
      mass:1,
      radius: 14,
      speed: 0,
      radians: 0,
      xunits:0,
      yunits:0,
      points: 10,
      isonhole: false,
      draw: function(){

         context1.beginPath();
       context1.fillStyle="#313191";
       context1.lineWidth = 0;
       context1.arc(this.x, this.y , this.radius , 0*Math.PI , 2*Math.PI);
       context1.fill();
       context1.stroke();
      }

    };

   balls.push(tempBall);

}


function clear(){

    	context1.clearRect(0,0,460,460)
    }

    function positionStriker(x,y){
           clear();

           for(var i=1;i<balls.length;i++)
           {
           	 if(balls[i].isonhole == true)
           	 {

           	 	balls[i].x = 1000;
           	 	balls[i].y = 1000;
           	 	balls[i].speed = 0;
           	 	balls[i].radians=0;
           	 }

           	 else
           	 {
           	 balls[i].draw();
           	 }

           	}
           
           if(balls[0].isonhole != true)
           {
           balls[0].x = x;
           balls[0].y = y;
           balls[0].draw();
           }
           else{
           	balls[0].isonhole = false;
           	console.log("foul");
           	if(player == 1)
           	{
                 positionStriker(230,65);
            }
            else {

            	
            	 positionStriker(230,395);
            }
        
           }

    	

    }



    function drawLine(x,y){
         
         clear();
         positionStriker(strikerX,strikerY);
    	 context1.beginPath();
         context1.moveTo(currX, currY);
         context1.lineTo(x, y);
        
         context1.stroke();
    }
     
    function inHole(ball)
    {  
        // console.log("inhole called");

    	if( (ball.x)*(ball.x) + (ball.y)*(ball.y) <= 500 ) 
    	{
    		  ball.isonhole = true;
    		 console.log("inhole called1");

    	}
    	
    }

    function collide() {

       console.log("collide");
       var ball;
       var testBall;
       for (var i = 0; i <balls.length; i++) {
           ball = balls[i];
           for (var j = i+1; j < balls.length; j++) {
                 testBall = balls[j];
                if (hitTestCircle(ball,testBall)) {
                    audio.play();
                    collideBalls(ball,testBall);
                 }
              }
        }
     }

   function hitTestCircle(ball1,ball2) {
   	  // console.log("hitcircle");
       var retval = false;
       var dx = (ball1.x+2*ball1.xunits) - (ball2.x+2*ball2.xunits);
       var dy = (ball1.y+2*ball1.yunits) - (ball2.y+2*ball2.yunits);
       var distance = (dx * dx + dy * dy);
       if (distance <= (ball1.radius + ball2.radius) * (ball1.radius + ball2.radius) ) {
              retval = true;
       }
       return retval;
     }

   function holeDetection(ball){

   	   for(var i=0;i<corner.length;i++)
   	   {
          
          var cor = corner[i];

   	   	  var dx = ball.x - cor.x;
   	      var dy = ball.y -cor.y;

   	   var distance = (dx * dx + dy * dy);
       if (distance <= (ball.radius + cor.radius) * (ball.radius + cor.radius) ) {
              
              ball.isonhole = true;

              if(player == 1) player1_points += ball.points;
              else player2_points += ball.points;

              break;
       }

   	   }

   	 

   }

   function collideBalls(ball1,ball2) {
      
      console.log("collideballs");

      var dx = ball1.x+ball1.xunits - ball2.x+ball2.xunits;
      var dy = ball1.y+ball1.yunits - ball2.y+ball2.yunits;

      var collisionAngle = Math.atan2(dy, dx);

      var ball1_velocityx = Math.cos(ball1.radians)*ball1.speed;
      var ball1_velocityy = Math.sin(ball1.radians)*ball1.speed;
      var ball2_velocityx = Math.cos(ball2.radians)*ball2.speed;
      var ball2_velocityy = Math.sin(ball2.radians)*ball2.speed;


      var speed1 = Math.sqrt(ball1_velocityx * ball1_velocityx + 
          ball1_velocityy * ball1_velocityy);
      var speed2 = Math.sqrt(ball2_velocityx * ball2_velocityx + 
          ball2_velocityy * ball2_velocityy);

      var direction1 = Math.atan2(ball1_velocityy, ball1_velocityx);
      var direction2 = Math.atan2(ball2_velocityy, ball2_velocityx);

      var velocityx_1 = speed1 * Math.cos(direction1 - collisionAngle);
      var velocityy_1 = speed1 * Math.sin(direction1 - collisionAngle);
      var velocityx_2 = speed2 * Math.cos(direction2 - collisionAngle);
      var velocityy_2 = speed2 * Math.sin(direction2 - collisionAngle);

      var final_velocityx_1 = ((ball1.mass - ball2.mass) * velocityx_1 + 
         (ball2.mass + ball2.mass) * velocityx_2)/(ball1.mass + ball2.mass);
      var final_velocityx_2 = ((ball1.mass + ball1.mass) * velocityx_1 + 
         (ball2.mass - ball1.mass) * velocityx_2)/(ball1.mass + ball2.mass);

      var final_velocityy_1 = velocityy_1;
      var final_velocityy_2 = velocityy_2;

      ball1_velocityx = Math.cos(collisionAngle) * final_velocityx_1 + 
          Math.cos(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball1_velocityy = Math.sin(collisionAngle) * final_velocityx_1 + 
          Math.sin(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball2_velocityx = Math.cos(collisionAngle) * final_velocityx_2 + 
          Math.cos(collisionAngle + Math.PI/2) * final_velocityy_2;
      ball2_velocityy = Math.sin(collisionAngle) * final_velocityx_2 + 
          Math.sin(collisionAngle + Math.PI/2) * final_velocityy_2;
      
      ball1.radians = Math.atan2(ball1_velocityy,ball1_velocityx);
      ball2.radians = Math.atan2(ball2_velocityy,ball2_velocityx);

      ball1.speed = Math.sqrt(ball1_velocityx*ball1_velocityx + ball1_velocityy*ball1_velocityy);
      ball2.speed = Math.sqrt(ball2_velocityx*ball2_velocityx + ball2_velocityy*ball2_velocityy);


   


      ball1.xunits = (ball1.xunits += Math.cos(ball1.radians)*ball1.speed)  ;
      ball1.yunits = (ball1.yunits += Math.sin(ball1.radians)*ball1.speed);
      ball1.x+=ball1.xunits;
      ball1.y+=ball1.yunits;

       ball2.xunits = (ball2.xunits += Math.cos(ball2.radians)*ball2.speed);
      ball2.yunits = (ball2.yunits += Math.sin(ball2.radians)*ball2.speed);
      ball2.x+=ball2.xunits;
      ball2.y+=ball2.yunits;


    	
   }

    function drawScreen() {
        //console.log(striker.speed);

       document.getElementById('p1').innerHTML = player1_points;
       document.getElementById('p2').innerHTML = player2_points;

       var i;
        for( i=0;i<balls.length;i++)
        {
        	if(balls[i].speed<=0)
        		balls[i].speed=0;
        	else
        		break;
        }
        if(i==balls.length)
        {
        	clearInterval(clr);

        	if(player == 1) 
        	 {
        		player =2;
            document.getElementById('p3').innerHTML = "player2";
        	 }


        	else 
        		{
        			player =1;
              document.getElementById('p3').innerHTML = "player1";

        		}

        	if(player == 1)
        	{
        	positionStriker(230,395);
            }
            else {

            	positionStriker(230,65);
            }
        	
        	flag=0;

        	

        }
      
        if(striker.speed > 0)
        {
        striker.speed-=0.25;

        //inHole(striker);
        holeDetection(striker);

    	if(striker.x+striker.xunits+striker.radius > 460 || striker.x + striker.xunits - striker.radius < 0)
    	{  
        audio.play();
    		striker.radians = Math.PI - striker.radians;
    	}

    	if(striker.y+striker.yunits+striker.radius > 460 || striker.y + striker.yunits - striker.radius < 0)
    	{
        audio.play();
    		striker.radians = 2*Math.PI - striker.radians;
    	}

    	striker.xunits = Math.cos(striker.radians)*striker.speed;
    	striker.yunits = Math.sin(striker.radians)*striker.speed;
    	striker.x+=striker.xunits;
    	striker.y+=striker.yunits;

         }

    	//positionStriker(striker.x,striker.y);

    	for(var i=1;i<balls.length;i++)
    	{    
    		 var ball = balls[i];

      // inHole(ball);

        if(ball.speed>0)
        {
    		 ball.speed-=0.25;
        

    	if(ball.x+ball.xunits+ball.radius > 460 || ball.x + ball.xunits - ball.radius < 0)
    	{
    		ball.radians = Math.PI - ball.radians;
         audio.play();
    	}

    	if(ball.y+ball.yunits+ball.radius > 460 || ball.y + ball.yunits - ball.radius < 0)
    	{
    		ball.radians = 2*Math.PI - ball.radians;
         audio.play();
    	}

    	ball.xunits = Math.cos(ball.radians)*ball.speed;
    	ball.yunits = Math.sin(ball.radians)*ball.speed;
    	ball.x+=ball.xunits;
    	ball.y+=ball.yunits;


    	//inHole(ball);
    	
    	holeDetection(ball);

        //ball.draw();

    }

       }

       collide();

       positionStriker(striker.x,striker.y);

     }

    

    //positionStriker(250,415);

