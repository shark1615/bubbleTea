function start()
{
    localStorage.getItem("message1");
    localStorage.getItem("message2");
    localStorage.getItem("message3");
    localStorage.getItem("message4");
    localStorage.getItem("message5");
    var commentResult = document.getElementById("commentResult");
    commentResult.innerHTML = "<span id = 'msg1'>"+localStorage.getItem("message1")+"</span><span id = 'msg2'>"+localStorage.getItem("message2")+"</span><span id = 'msg3'>"+localStorage.getItem("message3")+"</span><span id = 'msg4'>"+localStorage.getItem("message4")+"</span><span id = 'msg5'>"+localStorage.getItem("message5")+"</span>";

    console.log(commentResult);
    var gameResult = localStorage.getItem("gameOver");
    if(gameResult == "true")
        win();
    else
        gameOver();
}

function win()
{
    var delayTime = window.setTimeout(function()
    {
        var resultIMG = document.getElementById("resultIMG");
        resultIMG.innerHTML = "<img src = 'resource/result_img.jpeg' style = 'width:100% ;height:100%'/>";
        var winAnimate = document.getElementById("winAnimate");
        winAnimate.innerHTML = "<span id = 'winAnimate1'><img src = 'resource/win.png' style = 'width:100% ;height:100%'/></span>"+"<span id = 'winAnimate2'><img src = 'resource/動物_推動.png' style = 'width:100% ;height:100%'/></span>";
        //console.log(winAnimate);
        var winText = document.getElementById("resultText").innerHTML = "<p><h1 class = 'heartbeat'>You Win</h1></p>";
    },3000);
    var buttonRestart = window.setTimeout(function()
    {
        var restartButton = document.getElementById("restartButton");
        restartButton.innerHTML = "<input type = 'button' id = 'restartButton' class= 'btn restartButton' value = '重新開始';></button> ";
        restartButton.addEventListener("click",restart,false); 
        localStorage.removeItem("message1");
        localStorage.removeItem("message2");
        localStorage.removeItem("message3");
        localStorage.removeItem("message4");
        localStorage.removeItem("message5");
    },6000);

    
}

function gameOver()
{
    var delayTime = window.setTimeout(function()
    {
        
        var resultIMG = document.getElementById("resultIMG");
        resultIMG.innerHTML = "<img src = 'resource/result_img.jpeg' style = 'width:100% ;height:100%'/>";
        var loseText = document.getElementById("resultText").innerHTML = "<p><h1 class = 'heartbeat'>You Lose</h1></p>";
    },3000);
    var buttonRestart = window.setTimeout(function()
    {
        var restartButton = document.getElementById("restartButton");
        restartButton.innerHTML = "<input type = 'button' id = 'restartButton' class= 'btn restartButton' value = '回去調配';></button> ";
        restartButton.addEventListener("click",restart,false);
        localStorage.removeItem("message1");
        localStorage.removeItem("message2");
        localStorage.removeItem("message3");
        localStorage.removeItem("message4");
        localStorage.removeItem("message5");
    },6000);

}
function restart()
{
    var gameResult = localStorage.getItem("gameOver");
    if(gameResult == "false")
        window.location.href = "cook.html";
    else //true
        window.location.href = "home.html";
    localStorage.removeItem("gameOver"); 
}
window.addEventListener("load",start,false);