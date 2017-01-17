(function(){
	console.log("Initializing Praveen"); //print output in console
	LitmusParallelogram = function(parent , param){    
		this.draw = function(){
			for (var i = 1; i <= param.numberOfButtons; i++) 
			{	
				var element = document.createElement("input");
				element.setAttribute("type", 'button');
				element.setAttribute("value", "\u25B0");
				element.setAttribute("id",i);
				element.setAttribute("style","background-color:transparent; font-size:30px; border-color:transparent;")
				element.onclick = function (i) 
					{
						if(this.onRatingChange)
						{
							this.onRatingChange(i);
						}
					}.bind(this,i);//incress value of i
				parent.appendChild(element); //adding element
			}
		};
	}
})()
