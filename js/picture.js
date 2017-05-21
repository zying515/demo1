function picture_init(){
	picture_show();
	picture_bg_show();
}
var imag={
  imagePath:"images/product/",
  imageBgPath:"images/image_bg/",
  imageObject:new Array(),
  imageBgObject:new Array(),
  isSale:new Array(),
  imageLen:7,
  imageBgLen:4,
  single_href:"single.html",
  desc:new Array()
  }

function picture_param(){
	var index =0;
	 for(var i=1;i<=imag.imageLen;i++){
		 index=i;
		 if(i<10){
			 index = "0"+i;
		 }
		 imag.imageObject[i]=imag.imagePath+"img_"+index+".jpg";
		 imag.isSale[i]="true";
	 }
	 for(var i=1;i<=imag.imageBgLen;i++){
		 imag.imageBgObject[i]=imag.imageBgPath+"img_bg_"+i+".jpg";
	 }
}
function picture_bg_show(){
	picture_param();
	var productHtml = "";
	for(var i=1;i<=imag.imageBgLen;i++){
        $("ul.slides li:eq("+(i-1)+")").css("background-image","url("+imag.imageBgObject[i]+")");
		$("ul.slides li span.price:eq("+(i-1)+")").text("$500");
		$("ul.slides li h2:eq("+(i-1)+")").text("imge_bg"+i);
		$("ul.slides li:eq("+(i-1)+") div.desc>p:eq(0)").text("dfdsdfs"+i);
		$("ul.slides li:eq("+(i-1)+") div.desc>p>a").attr("href",imag.single_href);
	 }
}




function picture_show(){
	$("#fh5co-product>.container").html("");
	picture_param();
	var productHtml = "";
	for(var i=1;i<=imag.imageLen;i++){
		  if((i-1)%3==0){
			  if(i!=1){
				   productHtml += '</div>';
			  }
			 productHtml += '<div class="row">';
		 }  
		productHtml += picture_html(imag.imageObject[i],"product","$600",imag.isSale[i]);
		if(i==imag.imageLen){
			 productHtml += '</div>';
		 }
	 }
	$("#fh5co-product>.container").html(productHtml);
}

function picture_bg_html(imagePath,desc,pricedesc,single_href,title){
	var html = '<li style="background-image: url('+imagePath+');">'+
		   		'<div class="overlay-gradient"></div>'+
		   		'<div class="container">'+
		   			'<div class="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">'+
		   				'<div class="slider-text-inner">'+
		   					'<div class="desc">'+
		   						'<span class="price">'+pricedesc+'</span>'+
		   						'<h2>'+title+'</h2>'+
		   						 '<p>'+desc+'</p>'+
			   					'<p><a href="'+single_href+'" class="btn btn-primary btn-outline btn-lg">查看</a></p>'+
		   					'</div>'+
		   				'</div>'+
		   			'</div>'+
		   		'</div>'+
		   	'</li>';
	return html;
}

/**
@imagePath 
**/
function picture_html(imagePath,desc,pricedesc,issale){
	var issalehtml= "";
	if("true"==issale){
		issalehtml = '<span class="sale">Sale</span>';
	}
	 var html='<div class="col-md-4 text-center animate-box fadeInUp animated-fast">'+
					'<div class="product">'+
						'<div class="product-grid" style="background-image:url('+imagePath+');">'+
							issalehtml +
							'<div class="inner">'+
								'<p>'+
									//'<a href="single.html" class="icon"><i class="icon-shopping-cart"></i></a>'+
									'<a href="single.html" class="icon"><i class="icon-eye"></i></a>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<div class="desc">'+
							'<h3><a href="single.html">'+desc+'</a></h3>'+
							'<span class="price">'+pricedesc+'</span>'+
						'</div>'+
					'</div>'+
				'</div>';
	return html;
}