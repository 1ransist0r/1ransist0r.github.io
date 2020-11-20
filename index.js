var num = 0;

function myFunction() 
{
  if (num % 2 == 0)
  {
    document.getElementById('pText').innerHTML = 'Stupid.';
    document.getElementById('pText').style.color = 'red';
    document.getElementById('dimg').style.width = "1000px";
    document.getElementById('dimg').style.height = "80";

    
    if (num == 0)
    {
      document.getElementById('btnText').innerHTML = 'Click Again';
      document.getElementById('imgTroll').style.visibility = "visible";
      document.getElementById('imgTroll1').style.visibility = "visible";
      var audio = document.getElementById("audio");
      audio.play();
    }
  }
  else
  {
    document.getElementById('pText').innerHTML = 'Derin?';
    document.getElementById("pText").style.color = 'whitesmoke';
    document.getElementById('btnText').innerHTML = 'HAHA';

  }
 
  num++;
  
}

