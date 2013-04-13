$(document).on("mouseover",".imgContainer",function(event){
	$(this).children(".hoverButtons").show();
	$(this).children("img").toggleClass("hazyImage");
});
$(document).on("mouseout",".imgContainer",function(event){
	$(this).children(".hoverButtons").hide();
	$(this).children("img").toggleClass("hazyImage");
});
$(document).on("click",".btnRemove",function(event){
	$(this).parent().remove();
});
$(document).on("click",".btnZoom",function(event){
	$(".zoomedImage>img").attr("src",$(this).siblings("img").attr("src"));
	$(".zoomedImage").show();
});
$(document).on("click",".closeZoom",function(event){
	$(".zoomedImage").hide();
});

(function($){
	$.fn.imgPrev = function(options) {
		var settings = $.extend({
			'src':'',
			'alt':'',
			'height':'256px',
			'width':'256px'
		},options);
		return this.each(function(){
			var $this = $(this);
			$this.addClass("imgContainer");
			var imgThmb = $("<img>").attr("src",settings["src"]).attr("alt",settings["alt"]).css("height",settings["height"]).css("width",settings["width"]);
			$this.html(imgThmb);
			var btnSave = $("<button>").addClass("hoverButtons").addClass("btnSave").html($("<img>").attr("src","images/save.png").attr("alt","Save This"));
			var btnRemove = $("<button>").addClass("hoverButtons").addClass("btnRemove").html($("<img>").attr("src","images/remove.png").attr("alt","Remove This"));
			var btnZoom = $("<button>").addClass("hoverButtons").addClass("btnZoom").html($("<img>").attr("src","images/zoom.png").attr("alt","Zoom"));
			$this.append(btnSave);
			$this.append(btnRemove);
			$this.append(btnZoom);
		});
	}
	
	$.fn.imgZoom = function(options) {
		this.addClass("zoomedImage");
		this.append($("<img>"));
		var btnClose = $("<button>").addClass("closeZoom").html($("<img>").attr("src","images/close.png").attr("alt","Close"));
		this.append(btnClose);
		return this;
	}
})(jQuery);