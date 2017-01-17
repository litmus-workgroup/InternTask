(function(){
	console.log("Initializing Pankaj");
	LitmusButton = function(parent , param){
		this.draw = function(){
			for (var i = 1; i <= param.numberOfButtons; i++) 
			{	
				var element = document.createElement("input");
				element.setAttribute("type", 'button');
				element.setAttribute("value", i);
				element.setAttribute("id",i);
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
