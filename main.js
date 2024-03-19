var i=2;
var matrice=[0,0,0,0,0,0,0,0,0]
    function addition()
    {var val=this.getAttribute("value");
    if(matrice[Number(val)]==0)
        {
            if(i%2==0)
        {
            this.innerHTML="<p>X</p>";
            if(val=="0")matrice[0]=1;
            else if(val=="1")matrice[1]=1;
            else if(val=="2")matrice[2]=1;
            else if(val=="3")matrice[3]=1;
            else if(val=="4")matrice[4]=1;
            else if(val=="5")matrice[5]=1;
            else if(val=="6")matrice[6]=1;
            else if(val=="7")matrice[7]=1;
            else if(val=="8")matrice[8]=1;
        

        }
        else
        {
            this.innerHTML="<p>O</p>";
            if(val=="0")matrice[0]=2;
            else if(val=="1")matrice[1]=2;
            else if(val=="2")matrice[2]=2;
            else if(val=="3")matrice[3]=2;
            else if(val=="4")matrice[4]=2;
            else if(val=="5")matrice[5]=2;
            else if(val=="6")matrice[6]=2;
            else if(val=="7")matrice[7]=2;
            else if(val=="8")matrice[8]=2;
           
          
        }
        i++;
        verifyWin();
        var verif=0;
        for(var q=0;q<9;q++)
        {
            if(matrice[q]==0)verif=1;
        }
        if(verif==0)
        {
            document.querySelector("h1").innerHTML="Draw";
            endGame();
        }
    }

    }
    function verifyWin()
    {
        for(var i=0;i<9;i++)
        {
            if(i%3==0&&matrice[i]!=0&&matrice[i]==matrice[i+1]&&matrice[i]==matrice[i+2])
            {
                if(matrice[i]==1)document.querySelector("h1").innerHTML="X wins";
                else document.querySelector("h1").innerHTML="O wins";
                endGame();
            }
            if(i<3&&matrice[i]!=0&&matrice[i]==matrice[i+3]&&matrice[i]==matrice[i+6])
            {
                if(matrice[i]==1)document.querySelector("h1").innerHTML="X wins";
                else
                document.querySelector("h1").innerHTML="O wins";
                endGame();
               
            }
            if(i==0&&matrice[i]!=0&&matrice[i]==matrice[i+4]&&matrice[i]==matrice[i+8])
            {
                if(matrice[i]==1)document.querySelector("h1").innerHTML="X wins";
                else
                document.querySelector("h1").innerHTML="O wins";
                endGame();
            
            }
            if(i==2&&matrice[i]!=0&&matrice[i+2]==matrice[i]&&matrice[i]==matrice[i+4])
            {
                if(matrice[i]==1)document.querySelector("h1").innerHTML="X wins";
                else
                document.querySelector("h1").innerHTML="O wins";
                endGame();
            
            }
            
              
            
        }
    }
    function endGame()
    {
        $(".cell").css("pointer-events","none");
        setTimeout(function(){
            location.reload();
        },3000)
      
      
        
    }
    for(j=0;j<9;j++)
    {
        document.querySelectorAll(".cell")[j].addEventListener("click",addition);
    }