(function(){
	console.log("Initializing Hitesh");
	LitmusCircle = function(parent , param){
		this.draw = function(){
			for (var i = 1; i <= param.numberOfButtons; i++) 
			{	
				var element = document.createElement("input");
				element.setAttribute("type", 'button');
				element.setAttribute("value", "\u25EF");
				element.setAttribute("id",i);
				element.setAttribute("style","background-Color:transparent;border-Color:transparent;font-Size:30px;color:#FFFFFF;");
				element.onclick = function (i) 
					{
						if(this.onRatingChange){
							this.onRatingChange(i);
						}
					}.bind(this,i);
				parent.appendChild(element);
			}
		};
	}
})()
