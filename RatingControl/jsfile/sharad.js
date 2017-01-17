 (function(){
	console.log("Initializing Sharad");
	LitmusBallotBox = function(parent , param){
		this.draw = function(){
			for (var i = 1; i <= param.numberOfButtons; i++) 
			{	
				var element = document.createElement("input");
				
				element.setAttribute("type", 'button');
				element.setAttribute("value","\u22A0");
				element.setAttribute("id",i);
				element.setAttribute("style","background-Color:transparent;border-color:transparent;color:#FFFFFF;font-Size:35px;");
				
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
})();
