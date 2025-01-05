var user=prompt("Enter your name:");
var id= prompt("Enter Identification Number:");
var tamil=parseInt(prompt("Your Tamil Mark:"));
var english=parseInt(prompt(" Your English Mark:"));
var maths=parseInt(prompt("Your Maths Mark:"));
var Science=parseInt(prompt("Your Science:"));
var social=parseInt(prompt("Your Social Mark:"));

var total=(tamil+english+maths+social+Science);
var grade;
var percentage=(total/500*100);

if(percentage>90)
{
    document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "A"+"<br>");
    document.write(" Excellent! Stay focused and go ahead.");
    
}
else if(percentage<90 && percentage>80)
{
 document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "B"+"<br>");
    document.write("Congratulations! you are very near to the target.");
}

else if(percentage<80 && percentage>70)
{
 document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "C"+"<br>");
    document.write(" Good Performance. Need more Hard work.");
}
else if(percentage<70 && percentage>60)
{
 document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "D"+"<br>");
    document.write(" Spend more time to study!"+"<br>");
    document.write("You are Passed");
}

else if(percentage<60 && percentage>50)
{
 document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "E"+"<br>");
    document.write(" Good Job! You are Passed");
}
else if(percentage<50 && percentage>40)
{
 document.write("Hi!   "+user +", <br>");
    document.write(" ID number: "+ " "+id +"<br>");
    document.write("Your Tamil Mark is: "+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is: "+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is:"+" "+ "F"+"<br>");
    document.write("Need to work more, You are just Passed");
}
else
{

 document.write("Hi!   "+user +", <br>");
    document.write(" ID number :"+ " "+id +"<br>");
    document.write("Your Tamil Mark is:"+ " "+tamil +"<br>");
    document.write("Your English Mark is: "+ " "+english +"<br>");
    document.write("Your Maths Mark is: "+ " "+maths +"<br>");
    document.write("Your Science Mark is: "+ " "+Science +"<br>");
    document.write("Your Social Mark is :"+ " "+social +"<br>");
    document.write("Your Total Mark is: "+ " "+total +"<br><br>");
    document.write("Your Percentage is: "+ " "+percentage +"%"+"<br>");
    document.write("Your Grade is very low"+"<br>");
    document.write("You are Faild");
}
