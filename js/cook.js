function start()
{
    var pearl = document.getElementById("pearl");
    $("#pearl").click(function(){$("#pearlInput").show();});
    var tea = document.getElementById("tea");
	$("#tea").click(function(){$("#teaInput").show();});	
	var milk = document.getElementById("milk");
	$("#milk").click(function(){$("#milkInput").show();});
	var powder = document.getElementById("powder");
	$("#powder").click(function(){$("#powderInput").show();});
	var sugar = document.getElementById("sugar");
	$("#sugar").click(function(){$("#sugarInput").show();});
	var ice = document.getElementById("ice");
	$("#ice").click(function(){$("#iceInput").show();});

}


function pearlSelect()
{
	var pearlOption = document.getElementById("pearlOption").value;
	if(pearlOption == "original")
	{
		var pearlCorrect = document.getElementById("pearlCorrect");
		pearlCorrect.addEventListener("click",pearlCheck,false);
	}
	else if(pearlOption == "honey")
	{
		var pearlCorrect = document.getElementById("pearlCorrect");
		pearlCorrect.addEventListener("click",pearlCheck,false);
	}
	else
	{
		var pearlCorrect = document.getElementById("pearlCorrect");
		pearlCorrect.addEventListener("click",pearlCheck,false);
	}
}

function teaSelect()
{
	var teaOption = document.getElementById("teaOption").value;
	if(teaOption == "assam")
	{
		var teaCorrect = document.getElementById("teaCorrect");
		teaCorrect.addEventListener("click",teaCheck,false);
	}
	else if(teaOption == "oolong")
	{
		var teaCorrect = document.getElementById("teaCorrect");
		teaCorrect.addEventListener("click",teaCheck,false);
	}
	else
	{
		var teaCorrect = document.getElementById("teaCorrect");
		teaCorrect.addEventListener("click",teaCheck,false);
	}
}

function milkSelect()
{
	var milkOption = document.getElementById("milkOption").value;
	if(milkOption == "cream")
	{
		var milkCorrect = document.getElementById("milkCorrect");
		milkCorrect.addEventListener("click",milkCheck,false);
	}
	else
	{
		var milkCorrect = document.getElementById("milkCorrect");
		milkCorrect.addEventListener("click",milkCheck,false);
	}
}

function powderSelect()
{
	var powderOption = document.getElementById("powderOption").value;
	if(powderOption == "cocoa")
	{
		var powderCorrect = document.getElementById("powderCorrect");
		powderCorrect.addEventListener("click",powderCheck,false);
	}
	else if(powderOption == "matcha")
	{
		var powderCorrect = document.getElementById("powderCorrect");
		powderCorrect.addEventListener("click",powderCheck,false);
	}
	else
	{
		var powderCorrect = document.getElementById("powderCorrect");
		powderCorrect.addEventListener("click",powderCheck,false);
	}

}

function sugarSelect()
{
	var sugar = document.getElementById("sugar").value;
	var sugarCorrect = document.getElementById("sugarCorrect");
	sugarCorrect.addEventListener("click",sugarCheck,false);
}

function iceSelect()
{
	var ice = document.getElementById("ice").value;
	var iceCorrect = document.getElementById("iceCorrect");
	iceCorrect.addEventListener("click",iceCheck,false);
}

function pearlCheck()
{
	var pearlText = document.getElementById("pearlText").value;
	var checkID = document.getElementById("pearlOption").value;
	var total;
	console.log(checkID);
	if(checkID == "original")
	{
		pearlText = parseInt(pearlText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("黑糖珍珠");
			if(total<pearlText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=pearlText;
				localStorage.setItem("黑糖珍珠",total);
			}
			localStorage.setItem("originalUse",pearlText);//使用量
		}
	}
	else if(checkID == "honey")
	{
		pearlText = parseInt(pearlText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("蜂蜜珍珠");
			if(total<pearlText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=pearlText;
				localStorage.setItem("蜂蜜珍珠",total);
			}
			localStorage.setItem("honeylUse",pearlText);//使用量
		}
	}
	else //checkID = cactus
	{
		pearlText = parseInt(pearlText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("仙人掌珍珠");
			if(total<pearlText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=pearlText;
				localStorage.setItem("仙人掌珍珠",total);
			}
			localStorage.setItem("cactusUse",pearlText);//使用量
		}

	}	
}

function teaCheck()
{
	var teaText = document.getElementById("teaText").value;
	var checkID = document.getElementById("teaOption").value;
	var total;
	console.log(checkID);
	if(checkID == "assam")
	{
		teaText = parseInt(teaText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("阿薩姆茶葉");
			if(total<teaText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=teaText;
				localStorage.setItem("阿薩姆茶葉",total);
			}
			localStorage.setItem("assamUse",teaText);//使用量
		}
	}
	else if(checkID == "oolong")
	{
		teaText = parseInt(teaText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("烏龍茶");
			if(total<teaText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=teaText;
				localStorage.setItem("烏龍茶",total);
			}
			localStorage.setItem("oolongUse",teaText);//使用量
		}
	}
	else //checkID = blackRice
	{
		teaText = parseInt(teaText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("玄米茶");
			if(total<teaText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=teaText;
				localStorage.setItem("玄米茶",total);
			}
			localStorage.setItem("blackRiceUse",teaText);//使用量
		}

	}	
}

function milkCheck()
{
	var milkText = document.getElementById("milkText").value;
	var checkID = document.getElementById("milkOption").value;
	var total;
	console.log(checkID);
	if(checkID == "cream")
	{
		milkText = parseInt(milkText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("奶精");
			if(total<milkText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=milkText;
				localStorage.setItem("奶精",total);
			}
			localStorage.setItem("creamUse",milkText);//使用量
		}
	}
	else //checkID = freshMilk
	{
		milkText = parseInt(milkText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("鮮奶");
			if(total<milkText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=milkText;
				localStorage.setItem("鮮奶",total);
			}
			localStorage.setItem("freshMilk",milkText);//使用量
		}
	}

}

function powderCheck()
{
	var powderText = document.getElementById("powderText").value;
	var checkID = document.getElementById("powderOption").value;
	var total;
	console.log(checkID);
	if(checkID == "cocoa")
	{
		powderText = parseInt(powderText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("可可粉");
			if(total<powderText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=powderText;
				localStorage.setItem("可可粉",total);
			}
			localStorage.setItem("cocoaUse",powderText);//使用量
		}
	}
	else if(checkID == "matcha")
	{
		powderText = parseInt(powderText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("抹茶粉");
			if(total<powderText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=powderText;
				localStorage.setItem("抹茶粉",total);
			}
			localStorage.setItem("matchaUse",powderText);//使用量
		}
	}
	else //checkID = paprika
	{
		powderText = parseInt(powderText);
		if(total<=0)
		{
			window.alert("你沒有這項材料");
			
		}
		else
		{
			//不夠狀態
			total = localStorage.getItem("辣椒粉");
			if(total<powderText)
				window.alert("您擁有的材料不夠,請重新輸入");
			else
			{
				total-=powderText;
				localStorage.setItem("辣椒粉",total);
			}
			localStorage.setItem("paprikaUse",powderText);//使用量
		}

	}	
}

function sugarCheck()
{
	var total;
	var sugarText = document.getElementById("sugarText").value;
	sugarText = parseInt(sugarText);
	if(total<=0)
	{
		window.alert("你沒有這項材料");		
	}
	else
	{
		//不夠狀態
		total = localStorage.getItem("sugar");
		if(total<sugarText)
			window.alert("您擁有的材料不夠,請重新輸入");
		else
		{
			total-=sugarText;
			localStorage.setItem("sugar",total);
		}
		localStorage.setItem("sugarUse",sugarText);//使用量
	}
}

function iceCheck()
{
	var total;
	var iceText = document.getElementById("iceText").value;
	iceText = parseInt(iceText);
	if(total<=0)
	{
		window.alert("你沒有這項材料");
		total = 0;
		localStorage.setItem("ice",total);
		localStorage.setItem("iceUse",0);		
	}
	else
	{
		//不夠狀態
		total = localStorage.getItem("ice");
		if(total<iceText)
			window.alert("您擁有的材料不夠,請重新輸入");
		else
		{
			total-=iceText;
			localStorage.setItem("ice",total);
		}
		localStorage.setItem("iceUse",iceText);//使用量
	}
}

window.addEventListener("load",start,false);
