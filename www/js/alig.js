
function PageIsDunyamiz()
{
	GetIsDunyamiz("#isdunyamiz");
}

function PageVideolar()
{
	$(document).ready(function(){
		
		var type=$("#vid-type").val();
		
		if(type==undefined) type=1;
	
		$("#videos").html("YÜKLENİYOR");
		
		GetVideolar("#videos",type);
	});
}

function PageHaftaninYedisi()
{
	GetHaftaninYedisi();
}

function PageHaftaninEnleri(){
	GetHaftaninEnleri();
}

function PagePuanDurumu(){
	$(document).ready(function(){
		
		$("#pd-lig1").html("YÜKLENİYOR");
		$("#pd-lig2").html("YÜKLENİYOR");
		$("#pd-lig3").html("YÜKLENİYOR");
		$("#pd-lig4").html("YÜKLENİYOR");
		
		GetPuanDurumu("#pd-lig1",1);
		GetPuanDurumu("#pd-lig2",2);
		GetPuanDurumu("#pd-lig3",3);
		GetPuanDurumu("#pd-lig4",4);
	});
}


function PageCezaTahtasi(){
	$(document).ready(function(){
		
		$("#pd-lig1").html("YÜKLENİYOR");
		$("#pd-lig2").html("YÜKLENİYOR");
		$("#pd-lig3").html("YÜKLENİYOR");
		$("#pd-lig4").html("YÜKLENİYOR");
		
		GetCezaTahtasi("#pd-lig1",1);
		GetCezaTahtasi("#pd-lig2",2);
		GetCezaTahtasi("#pd-lig3",3);
		GetCezaTahtasi("#pd-lig4",4);
	});
}

function PageHaberler()
{
	GetHaberler();
}

function PageFikstur(){
	$(document).ready(function(){
		
		FillWeekList();
		
	});
}

function PageIstatistik(){
	$(document).ready(function(){
		
		var type=$("#ist-type").val();
		
		if(type==undefined) type=0;
	
		$("#ist-lig1").html("YÜKLENİYOR");
		$("#ist-lig2").html("YÜKLENİYOR");
		$("#ist-lig3").html("YÜKLENİYOR");
		$("#ist-lig4").html("YÜKLENİYOR");
		
		GetIstatistik("#ist-lig1",type,1);
		GetIstatistik("#ist-lig2",type,2);
		GetIstatistik("#ist-lig3",type,3);
		GetIstatistik("#ist-lig4",type,4);
		
	});
}

var takimGenerateNumber=0;

function PageTakimlar(callback){
	 $(document).ready(function(){
		 takimGenerateNumber=0;
		 $("#tkm-lig1").html("YÜKLENİYOR");
		 $("#tkm-lig2").html("YÜKLENİYOR");
		 $("#tkm-lig3").html("YÜKLENİYOR");
		 $("#tkm-lig4").html("YÜKLENİYOR");
		
		 GetTakimListesi("#tkm-lig1",1,callback);
		 GetTakimListesi("#tkm-lig2",2,callback);
		 GetTakimListesi("#tkm-lig3",3,callback);
		 GetTakimListesi("#tkm-lig4",4,callback);
	 });
}


	function GetPuanDurumu(parentName,lig){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/PuanDurumu?ligNumber="+lig, function( data ) {
			  
			$(parentName).html("");
			  var header='<li class="table_row">'+
                            '<div class="table_section_small">Sıra</div>'+
                            '<div class="table_section">Takım</div>'+
                            '<div class="table_section_small">O</div>'+ 
                            '<div class="table_section_small">G</div>'+
                            '<div class="table_section_small">B</div>'+ 
                            '<div class="table_section_small">M</div>'+ 
                            '<div class="table_section_small">A</div>'+
                            '<div class="table_section_small">P</div>'+ 
                         '</li>';
				  
			 $(parentName).append(header);
			  
			  
			  
			  $.each( data, function( key, val ) {
				  
				  var html='<li class="table_row">';
				  
				  html+='<div class="table_section_small">'+val.Sira+'</div>';
				   html+='<div class="table_section">'+val.TakimAdi+'</div>';
                   html+='<div class="table_section_small">'+val.O+'</div>';
					html+='<div class="table_section_small">'+val.G+'</div>';
					html+='<div class="table_section_small">'+val.B+'</div>';
					html+='<div class="table_section_small">'+val.M+'</div>';
					html+='<div class="table_section_small">'+val.A+'</div>';
					html+='<div class="table_section_small">'+val.P+'</div>'; 
				  
				  html+='</li>';
				  
				  $(parentName).append(html);
				
			  });
			 
			 
			});
	}
	
	function GetFikstur(parentName,week,lig){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/Fikstur?week="+week+"&ligNumber="+lig, function( data ) {
			  

			 $(parentName).html("");
			  var li='<li class="post">'+
                         '        <a href="#" class="post_more post_more_none_plus"></a>'+             
                         '        <div class="post_right_reveal fks-post_right_reveal">'+
						'			 <h6 class="fks-tarih text-center"><a href="#">@Tarih</a></h6>'+
						'			 <h4 class="fks-takim text-center"><a href="#">@TakimLeft - @TakimRight</a></h4>'+
						'			 <h4 class="fks-skor text-center"><a href="#">@Skor</a></h4>'+
                         '        </div>'+
                        '         <div class="post_left fks-post_left">'+
                        '            <span class="day">@Saha.</span>'+
                        '            <span class="month fks-month">SAHA</span>'+
                        '        </div>'+
                        '    </li>';
				  
			  $.each( data, function( key, val ) {
				  
				  var html=li.replace("@TakimLeft",val.TakimLeft)
							.replace("@TakimRight",val.TakimRight)
							.replace("@Saha",val.Saha)
							.replace("@Skor",val.Skor)
							.replace("@Tarih",val.Tarih);
				  
				  $(parentName).append(html);
				
			  });
			 
			 
			 
			 
			 
			});
	}

	
	function ShowFikstur(){
		
		var week=$("#fks-week").val();
		
		if(week==undefined)
		{
			FillWeekList();
		}
		else{

			$("#fks-lig1").html("YÜKLENİYOR");
			$("#fks-lig2").html("YÜKLENİYOR");
			$("#fks-lig3").html("YÜKLENİYOR");
			$("#fks-lig4").html("YÜKLENİYOR");
			
			GetFikstur("#fks-lig1",week,1);
			GetFikstur("#fks-lig2",week,2);
			GetFikstur("#fks-lig3",week,3);
			GetFikstur("#fks-lig4",week,4);
		}
	}
	
	function FillWeekList()
	{
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/Weeks", function( data ) {
			  
			$("#fks-week").empty();

			$.each( data, function( key, val ) {
			
				var item=$("<option></option>");
				item.attr('value', val.Number).text(val.Name);
				if(val.IsSelected==true)
				{
					item.attr('selected', "")
				}
				
                $("#fks-week").append(item);
            });
			 
			ShowFikstur()
			 
		});
	}
	
	function GetTakimListesi(parentName,lig,callback){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/TakimListesiDetayli?ligNumber="+lig, function( data ) {
			  
			$(parentName).html("");
			  var li='<div class="portfolio_item radius8">'   + 
				'<div class="portfolio_image">'+
				'<img src="" alt="" title="" border="0"></div> '+       
				'	<div class="portfolio_details">     '+    
				'	<h4>@TakimAdi</h4>   '+  
				'		<ul class="listing">'+
                '                        <li class="tkm-detay"><b>Kuruluş Tarihi	:</b>@KurulusTarihi</li>'+
                '                        <li class="tkm-detay"><b>Takım Başkanı	:</b>@TakimBaskani</li>'+
                '                        <li class="tkm-detay"><b>Takım Kaptanı	:</b>@TakimKaptani</li>'+						
				'						<li class="tkm-detay"><b>Takım 2. Kaptanı	:</b>@TakimKaptani2</li>'+
				'						<li class="tkm-detay"><b>Renkler	:</b>@Renkler</li>'+
				'						<li class="tkm-detay"><b>Sponsoru	:</b>@Sponsoru</li>'+
				'						<li class="tkm-detay"><b>Web Sitesi	:</b>@WebSitesi</li>'+
                '                        </ul>'+
				'	</div>'+
				'	      <div class="clearfix"></div>'+
				'	<div class="toogle_wrap radius8">'+
				'	<div class="trigger" data-tid="@Id"><a href="#">Kadro</a></div>'+
				'	<div class="toggle_container" style="display: none;">'+
				'						<ul class="responsive_table" id="kadro_@tId">'+
				'								 YÜKLENİYOR'+								 
							 
				'							</ul>'+
				'	</div>'+
				'	</div>'+
				'</div>';
				  
			  $.each( data, function( key, val ) {
				  
				  var html=li.replace("@Id",val.Id)
							.replace("@tId",val.Id)
							.replace("@TakimAdi",val.TakimAdi)
							.replace("@KurulusTarihi",val.TakimDetay.KurulusTarihi)
							.replace("@Renkler",val.TakimDetay.Renkler)
							.replace("@Sponsoru",val.TakimDetay.Sponsoru)
							.replace("@WebSitesi",val.TakimDetay.WebSitesi)
							.replace("@TakimKaptani",val.TakimDetay.TakimKaptani)
							.replace("@TakimKaptani2",val.TakimDetay.TakimKaptani2)
							.replace("@TakimBaskani",val.TakimDetay.TakimBaskani);
				  
				  $(parentName).append(html);
				
			  });
			 
				takimGenerateNumber+=1;
					
				if	(takimGenerateNumber==4)
				{
					callback();
				}
				 
			});
	}
	
	function GetIstatistik(parentName,type,lig){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/Istatistik?statisticType="+type+"&ligNumber="+lig, function( data ) {
			  
			$(parentName).html("");
			var ad="";
			var sayi="";
			if (type==0 || type==1){ad="Ad Soyad"; sayi="Attığı";}
	
			else if (type==2){ad="Takım"; sayi="Attığı";}
			else if (type==3){ad="Takım"; sayi="Yediği";}
			else if (type==4){ad="Ad Soyad"; sayi="K.Sayısı";}
			else if (type==5){ad="Takım"; sayi="K.Sayısı";}
			
			 var header='<li class="table_row">'+
                            '<div class="table_section_small">Sıra</div>'+
                            '<div class="table_section">'+ad+'</div>'+
                            '<div class="table_section_small">'+sayi+'</div>'+ 

                         '</li>';
				  
			 $(parentName).append(header);
			  
			  
			  
			  $.each( data, function( key, val ) {
				  
				   
				  var html='<li class="table_row">';
				  
				  html+='<div class="table_section_small">'+val.Sira+'</div>';
				   html+='<div class="table_section">'+val.AdSoyad+'</div>';
                   html+='<div class="table_section_small">'+val.Sayi+'</div>';
		
				  
				  html+='</li>';
				  
				  $(parentName).append(html);
				
			  });
			 
			 
			});
	}
	
	
		function GetKadro(parentName,takimId){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/Kadro?takimId="+takimId, function( data ) {
			  
			$(parentName).html("");
			
			    var header='<li class="table_row">'+								 
							'	<div class="table_section" style="width:20px">Sıra</div>'+
							'	<div class="table_section">Oyuncu</div>'+
							'	<div class="table_section">Bilgiler</div>'+
							'</li>';
				  
				  
			 $(parentName).append(header);
			  
			  
			  
			  $.each( data, function( key, val ) {
				  var html='<li class="table_row">';
				  
				  html+='<div class="table_section" style="width:20px">'+val.Sira+'</div>';
				   html+='<div class="table_section">'+val.Oyuncu+'</div>';
                   html+='<div class="table_section" style="line-height: 16px;">';
				   
				   html+='<div><b>Mevki : </b>'+val.Mevki+'</div>';
					html+='<div><b>Forma No : </b>'+val.FormaNo+'</div>';
					html+='<div><b>Gol : </b>'+val.Gol+'</div>';
					html+='<div><b>Asist : </b>'+val.Asist+'</div>';
					html+='<div><b>Sarı Kart : </b>'+val.SK+'</div>';
					html+='<div><b>Kırmızı Kart : </b>'+val.KK+'</div>';
				   
				   html+='</div>';
					
				  
				  html+='</li>';
				  
				 
				  
				  $(parentName).append(html);
				
			  });
			 
			 
			});
	}
	
	
	
	function GetHaftaninYedisi(){
	
			$.getJSON( "http://its.yaz.com.tr/alig/api/alig/GetHaftaninYedisi", function( data ) {
			  
		var mainUrl="http://www.anadoluligi.com/";
			$.each( data, function( key, val ) {
			
				
                $("#img-"+val.LigNumber).attr("src",mainUrl+val.Url);
            });
			 
			ShowFikstur()
			 
		});
			  			
			 
		
	}
	

	function GetHaftaninEnleri(){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/GetHaftaninEnleri", function( data ) {
			  
		var mainUrl="http://www.anadoluligi.com/";
			$.each( data, function( key, val ) {
			
				
                $("#img-"+val.LigNumber).attr("src",mainUrl+val.Url);
            });
			 
			ShowFikstur()
			 
		});
	}
	
	
	function GetCezaTahtasi(parentName,lig){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/CezaTahtasi?ligNumber="+lig, function( data ) {
			  
			$(parentName).html("");
			  var header='<li class="table_row">'+
                            '<div class="table_section">Oyuncu</div>'+
                            '<div class="table_section">Takım</div>'+
                            '<div class="table_section_small" style="width:17%">Bitiş T.</div>';
                          
				  
			 $(parentName).append(header);
			  
			  $.each( data, function( key, val ) {
				  
				  var html='<li class="table_row">';
				  
				  html+='<div class="table_section">'+val.Oyuncu+'</div>';
				   html+='<div class="table_section">'+val.Takim+'</div>';
                   html+='<div class="table_section_small" style="width:17%">'+val.BitisTarihi+'</div>';
					
				  
				  html+='</li>';
				  
				  $(parentName).append(html);
				
			  });
			 
			 
			});
	}
	
	function GetHaberler(){
		 $.getJSON( "http://its.yaz.com.tr/alig/api/alig/Haberler?pageNumber=1", function( data ) {
			  
			 $("#haberler").html("");
			                 
			   $.each( data, function( key, val ) {
				  
				  var html='<div class="toogle_wrap radius8">';
				  
				  html+='<div class="trigger haber-trigger"><a href="#"><b>'+val.Title+'</b></a></div>';
				    html+='<div class="toggle_container" haber-url="'+val.Link+'" style="display: none;">';
                   html+='Yükleniyor...';
					
				    html+='</div>';
				   html+='</div>';
				  
				   $("#haberler").append(html);
				
			   });
			 
			 $('.trigger').click(toggleHaberler);
			 
			});
	}
	
	function toggleHaberler() {	
	
	   $(this).toggleClass("active").next().slideToggle("slow");    
	   
	   if($(this).hasClass("active") && $(this).hasClass("haber-trigger"))
	   {
		   var next=$(this).next();
		   if(next!=undefined)
		   {
			   if(next.html().trim()=="Yükleniyor...")
			   {
				   GetHaberDetay(next,next.attr("haber-url"))
			   }
		   }
		   
	   }
	   
		return false;
	}
	
	function GetHaberDetay(div,url){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/haberdetay?pagename="+url, function( data ) {
			  
		div.html(data);
			 
		});
	}
	
	function GetVideolar(ctrlId, videoType){
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/Videos?videoType="+videoType, function( data ) {
			  
			$(ctrlId).html("");

			  $.each( data, function( key, val ) {
 
				 var html= '<div class="videocontainer radius6">';
					html+='<h3>'+val.Title+'</h3>';
					html+='<div class="fluid-width-video-wrapper" style="padding-top: 37.5%;">';
					
					html+='<iframe width="400" height="150" src="'+val.VideoUrl+'" frameborder="0"></iframe>';
					html+='</div> ';
					html+='</div> ';
				  
				  $(ctrlId).append(html);
				
			  });
			 
			 
		});
			
	}
	
	function GetIsDunyamiz(ctrlId){
		
		$.getJSON( "http://its.yaz.com.tr/alig/api/alig/IsDunyamiz", function( data ) {
			  
			$(ctrlId).html("");

			  $.each( data, function( key, val ) {
 
				  var html= '<div class="portfolio_item radius8">';
					html+='<div class="portfolio_image">';
					html+='<img src="http://www.anadoluligi.com/'+val.Logo+'" alt="" title="" border="0"></div> ';
					html+='<div class="portfolio_details">';     		
					html+='<ul class="listing">'; 

						$(val.Details).each(function(index,el){
							
							html+='<li class="tkm-detay">'+el+'</li>  ';   
							
						});					
					             
							 
					html+='	 </ul>	';
					html+='	 </div>	   ';  
					html+='	 <div class="clearfix"></div>';
					html+=' </div>';
				  
				  $(ctrlId).append(html);
				
			  });
			 
			 
		});
		
	}
	