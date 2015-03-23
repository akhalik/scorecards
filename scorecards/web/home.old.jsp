<%-- 
    Document   : home_1
    Created on : Jun 13, 2013, 12:00:46 PM
    Author     : Kiran
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8">

		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="reveal/css/reveal.min.css">
		<link rel="stylesheet" href="reveal/css/theme/simple.css" id="theme">
                <link rel="stylesheet" href="reveal/css/fullscreen-img.css">
	
		<style type="text/css">
		
		h1 {
			width:580px; 
			font-family:verdana,arial,helvetica,sans-serif;
			font-size:18px;
			text-align:center;
			margin:40px auto;
		}
		#container {
			width:580px; 
			font-family:verdana,arial,helvetica,sans-serif;
			font-size:11px;
			text-align:center;
			margin:auto;
		}  
		#container a {
			display:block;
			color:#000;
			text-decoration:none;
			background-color:#CCCCCC;
		}
		#no1 {
			width:190px;
			line-height:20px;
			margin:auto;
		}
		#no1 a {
			height:47px;
		}
		#line1 {
			font-size:0;
			width:15px;
			height:5px;
			color:#fff;
			background-color:#CCCCCC;
			margin:auto;
		}
		#arrow-down {
			width: 0; 
			height: 0; 
			border-left: 20px solid transparent;
			border-right: 20px solid transparent;
			border-top: 20px solid #CCCCCC;
			margin:auto;
		}
		#arrow-up {
			width: 0; 
			height: 0; 
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 5px solid black;
		}
		#arrow-right {
			width: 0; 
			height: 0; 
			border-top: 50px solid transparent;
			border-bottom: 50px solid transparent;
			border-left: 50px solid #CCCCCC;
		}
		#arrow-left {
			width: 0; 
			height: 0; 
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent; 
			border-right:10px solid blue; 
		}
		#line2 {
			font-size:0;
			width:424px;
			height:1px;
			color:#fff;
			background-color:#000;    
			margin:auto;
		} 
		#line3 {
			font-size:0;
			display:inline;
			width:1px;
			height:20px;
			color:#fff;
			background-color:#000;
			margin-left:78px;
			float:left;
		}  
		#line4,#line5,#line6 {
			font-size:0;
			display:inline;
			width:1px;
			height:20px;
			color:#fff;
			background-color:#000;
			margin-left:140px;
			float:left;
		}
		#no2 {
			display:inline;
			border:1px solid #000;
			clear:both;
			margin-left:35px;
			float:left;
		}
		#no2 a,#no4 a,#no8 a {
			width:84px; 
			height:50px;
			padding-top:8px; 
		} 	 
		#no3 {
			display:inline;
			border:1px solid #000;
			margin-left:58px;
			float:left;
		}
		#no3 a,#no5 a,#no6 a,#no7 a,#no9 a {
			width:84px; 
			height:42px;
			padding-top:16px;  
		} 
		#no4 {
			display:inline;  
			border:1px solid #000;
			margin-left:53px;
			float:left;
		}  
		#no5 {
			display:inline;   
			border:1px solid #000;
			margin-left:55px;
			float:left;
		}  
		#line7,#line13 {
			font-size:0;
			display:inline;
			width:1px;
			height:38px;
			color:#fff;
			background-color:#000;
			margin-left:219px;
			float:left;
		} 
		#line8,#line14 {
			font-size:0;
			display:inline;
			width:1px;
			height:38px;
			color:#fff;
			background-color:#000;
			margin-left:281px;
			float:left;
		}  
		#no6,#no8 {
			display:inline;  
			border:1px solid #000;
			margin-left:107px;
			float:left;
		}
		#line9,#line11,#line15,#line17 {
			font-size:0;
			display:inline;
			width:26px;
			height:1px;
			color:#fff;
			background-color:#000;    
			margin-top:29px;
			float:left;
		}  
		#line10,#line12,#line16,#line18 {
			font-size:0;
			display:inline;
			width:1px;
			height:60px;
			color:#fff;
			background-color:#000;
			float:left;
		} 
		#line16,#line18 {
			height:30px;
		}
		#no7,#no9 {
			display:inline; 
			border:1px solid #000;
			margin-left:169px;
			float:left;
		} 
		.clear {
			clear:both;
		}                  

		li.li_body { 
			font-family: arial;
			font-weight:normal;
			font-size: 14px;
			line-height: 16px;
			text-align: left;
			color:#000000;
			margin:0px 0px 0px 0px;
			padding:10px 10px 0px 0px; 
		}
		
		#vertical{
			writing-mode:tb-rl;
			-webkit-transform:rotate(270deg);
			-moz-transform:rotate(90deg);
			-o-transform: rotate(90deg);
			white-space:nowrap;
			display:block;
			bottom:0;
			width:20px;
			height:20px;
		}
		
		#footer_image{
			width:70px;
			height:15px;
			float:right;
			margin: 0px 10px;
			background:rgba(0, 0, 0, 0);
			border: 0px solid #eeeeee;
			box-shadow: 0 0 0px;
		}
		
		#input_images{
			max-width:120px;
			margin-left:5px;
			background:rgba(0, 0, 0, 0);
			border: 0px solid #eeeeee;
			box-shadow: 0 0 0px;
		}
		
		tr.store_table_tr {padding:5px; color:#000000; font-size: 12px; letter-spacing:1px; line-height:105%;}
		img {background:rgba(0, 0, 0, 0); border: 0px solid #eeeeee; box-shadow: 0 0 0px;}
		div.homepage_title {color:#ffffff; padding-left:10px; text-align:left; margin-bottom:10px; height:60px; margin-left:20px; margin-right:20px; background-color:rgba(102,102,102,0.6);}
		div.seperator_title {color:#ffffff; padding-top:10px; padding-bottom:10px; padding-left:10px; padding-right:10px; margin-left:10px; margin-right:10px; margin-bottom:10px; background-color:rgba(102,102,102,0.9);}
		div.slide {height:516px; width:690px;}
		div.body {margin-left:16%; height:430px; width:690px; background-color:#ffffff;}
		div.header {margin-left:16%; font-weight:bold; font-size:20px; padding-top:5px; height:35px; width:690px; background-color:#ffffff;}
		div.footer {margin-left:16%;  padding-top:5px; height:30px; width:690px; background-color:#ffffff;}
		p {font-family: arial; color:#000000; font-size: 30px; letter-spacing:1px;}
		p.footer_p {font-family: arial; float:left; margin-left:10px; color:#000000; font-size: 30%; letter-spacing:1px;}
		p.heading_p {font-family: arial; margin-left:10px; margin-right:10px; text-align:left; padding-left:5px; height:30px; vertical-align: middle; line-height:30px; background-color:#000000; font-size:15px; color:#ffffff;}
		p.section_heading {font-family: arial; font-size: 50%; text-align: left; background-color:#C0C0C0; width:150px; padding-left:5px; vertical-align: middle; line-height: 35px;}
		p.section_details { font-family: arial; height:60px; font-size: 30%; line-height:150%; text-align: left; background-color:#ffffff; width:150px; padding-left:5px;}
		p.p2 {font-family: arial; font-size: 35%; font-weight:bold; text-align: center; padding-top:8px; margin-left:10px; float:left; height:45px; border: 1px solid #000000; width:120px; vertical-align: middle; line-height: 130%;}
		p.p3 {font-family: arial; font-size: 75%; text-align: center; height:50px; background-color:#000000; color:#ffffff; padding-top:10px; width:210px; vertical-align: middle; line-height: 150%;}
		</style>
		<!-- For syntax highlighting -->
		<link rel="stylesheet" href="reveal/lib/css/zenburn.css">

		<!-- If the query includes 'print-pdf', use the PDF print sheet -->
		<script>
			document.write( '<link rel="stylesheet" href="reveal/css/print/' + ( window.location.search.match( /print-pdf/gi ) ? 'pdf' : 'paper' ) + '.css" type="text/css" media="print">' );
		</script>

		<!--[if lt IE 9]>
		<script src="lib/js/html5shiv.js"></script>
		<![endif]-->
                
        <title>Retail Scorecards</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=9" />
        <link rel="stylesheet" href="css/header.css"/>
        <link rel="stylesheet" href="css/custome.css"/>
        <link rel="stylesheet" href="css/footer.css"/>
        <link rel="stylesheet" href="css/jquery-ui-1.10.3.custom.css"/>
        <style>
            .validateTips { border: 1px solid transparent; padding: 0.3em; }
            .error{border: 1px solid #CD0A0A;}
        </style>
        <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
        <script type="text/javascript">         
            $(document).ready(function(){
                
                $('#loadingImg').hide();
                var clientid = $( "#CLIENT_ID" ),
                username = $( "#Username" ),
                password = $( "#Password" ),
                allFields = $( [] ).add( clientid ).add( username ).add( password ),
                tips = $( ".validateTips" );
                function updateTips( t ) {
                    tips
                    .text( t )
                    .addClass( "ui-state-highlight" );
                    setTimeout(function() {
                        tips.removeClass( "ui-state-highlight", 1500 );
                    }, 500 );
                }
                function checkLength( o, n, min, max ) {
                    if ( o.val().length > max || o.val().length < min ) {
                        o.addClass( "error" );
                        updateTips( "Please enter "+ n +"." );
                        return false;
                    } else {
                        return true;
                    }
                }
                allFields.keyup(function(){
                    allFields.removeClass( "error" );
                    tips.html('');
                })
                
                function validateCredentials(){
                    
                    var bValid = true;
                    allFields.removeClass( "error" );
                    bValid = bValid && checkLength( clientid, "clientid", 1, 80 );
                    bValid = bValid && checkLength( username, "username", 1, 16 );
                    bValid = bValid && checkLength( password, "password", 1, 16 );
                    
                    if (bValid) {
                        $('#loadingImg').show();
                        var inputdata  = {
                            clientid : $('#CLIENT_ID').val(),
                            username : $('#Username').val(),
                            password : $('#Password').val()
                        };
                        $.ajax({  
                            url: "LoginController",  
                            type: "POST",  //listrequest={"type":"'+type+'","id":"'+listid+'"}
                            data: inputdata,
                            success: function(result){
                                if(result == "error"){
                                    updateTips( "Invalid Credentials" );
                                    $('#loadingImg').hide();
                                }else {
                                    $('#loadingImg').show();
                                    window.location.assign("dashboard_2.jsp");
                                }
                            },error:function(jqXHR,textStatus,errorThrown){
                                alert("Server experiencing some problem please reload once.. ")
                                console.log(jqXHR.responseText);
                                console.log(textStatus.toString());
                            }
                        });
                    }else{
                        $('#loadingImg').hide();
                    }  
                }
                
                $("#mysubmit").click(function() {
                    validateCredentials();
                });
                
                //                clientid.keypress(function (e) {
                //                    if (e.which == 13) {
                //                        validateCredentials();
                //                    }
                //                });
                //                username.keypress(function (e) {
                //                    if (e.which == 13) {
                //                        validateCredentials();
                //                    }
                //                });
                password.keypress(function (e) {
                    if (e.which == 13) {
                        validateCredentials();
                    }
                });
                
            });
        </script>
    </head>
    <body>
        <div class="containerbody">
            <!--            Header content block-->
            <div class="header_div">
                <div style="padding-left: 10%">
                <p class="scorecards_txt">Scorecards</p>
                </div>
                    <div class="content_formdiv">
                        <form action="" method="post" target="_self">
                            <table cellspacing="0" style="float: right; padding-right: 10%; margin-top: 10px"><tbody>
                            <tr><td><label class="form_label_txt" for="client">Client Id</label></td><td><label class="form_label_txt" for="user">Username</label></td><td><label class="form_label_txt" for="pass">Password</label></td>
                                </tr>
                            <tr><td><input id="CLIENT_ID" type="text" name="clientid"/></td>
                            <td><input id="Username" type="text" name="username" value="" /></td>
                            <td><input id="Password" type="password" name="password" value="" /></td>
                            <td><input type="button" id="mysubmit" value="Log In" class="submit_btn" /></td></tr>
                            </tbody></table>
                        </form>
                    </div>
            </div>
            <!--            Header content block Ends    -->
            <div style="float: left; width: 100%; height: 95%">
                <div class="reveal">

			<!-- Any section element inside of this container is displayed as a slide -->
			<div class="slides">
				<section>
                                    <div id="slide1" class="slide" style="margin-left:120px; background-image:url('./images/home.jpg');">
					<div style="padding-top:350px;">
						<div class="homepage_title">
							<p style="vertical-align: middle; line-height: 60px; color:#ffffff;">Retail Scorecards</p>
						</div>
						<div class="homepage_title">
							<p style="padding-top:15px; line-height: 110%; font-size:15px; color:#ffffff;">Photo Analytics for Retail<br>
								Apr 02, 2014
							</p>
						</div>
					</div>	
				    </div>
				</section>
                            
                            <section id="slide5">
				<div class="slide">
					<div id="body" class="body">
						<div id="container1" style="margin-left:25px; margin-right:15px;">
							<p class="p3" style="float:left;">Daikin India 
							</p>
							<p class="p3" style="float:right;">Spice Retail
							</p>
							<p class="p3" style="margin:0 auto;">Kohler India                                                            
							</p>
						</div>
						<div id="container2" style="margin-top:10px; margin-left:25px; margin-right:15px;">
							<div style="float:left; height:250px; width:210px; background-color:#e0e0e0;">	
								<ul style="padding-top: 10px">
									<li class="li_body">Daikin has about 100 Exclusive Show-rooms spread over 65 cities</li>
									<li class="li_body">All these Solution Plazas were Photo Audited and Categorized</li>
									<li class="li_body">Categorization was done by their Catchment Area, Product Focus, and Overall Upkeep</li>									
								</ul>
							</div>
							<div style="float:right; height:250px; width:210px; background-color:#e0e0e0;">	
								<ul style="padding-top: 10px">	
									<li class="li_body" >Over 300 Spice Hotspot outlets spread over 6 big cities were photo audited.</li>
									<li class="li_body">Goal of this audit was to help better monetize in-store brand activations of the various brand partners, such as Samsung, Nokia, Etc.</li>
								</ul>
							</div>
							<div style="margin:0 auto; height:250px; width:210px; background-color:#e0e0e0;">	
								<ul style="padding-top: 10px">	
									<li class="li_body">Kohler has about 200 outlets nationally</li>
									<li class="li_body">Goal of this exercise is to measure and enforce adherence to Retail Experience Guidelines</li>
									<li class="li_body">Reports generated by this platform will be used in new product launches to identify the most suitable stores based on catchment areas</li>									
								</ul>
							</div>
						</div>
						<div id="container3" style="margin-left:25px; margin-right:15px;">
							<img style="float:left;  height:100%; width:210px;" src="images/daikin_logo.jpg">
							<img style="margin:0 10; height:100%; width:210px;" src="images/kohler_logo.png">
							<img style="float:right;  height:100%; width:210px;" src="images/spice_logo1.png">
						</div>
					</div>
					<div style="width: 100%; margin-left: 17%">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Current Deployments
                                                </p>
                                                </div>
                                        </div>
				</div>	
				
				</section>
                            
				<section>
                                    <div id="slide3" class="slide" style="margin-left:120px; background-image:url('./images/eagle.jpg');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Train Your Eye on an Individual Outlet.  <br>
                                                Or Review macro level trends at City, State, or Regional Level.
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                                
                                <section>
                                    <div id="slide4" class="slide" style="margin-left:120px; background-image:url('./images/storedir1.jpg');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Full Detail for any of your Outlets.<br>
                                                Available Instantly.  Just Point & Click.
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                            
                                <section>
                                    <div id="slide4" class="slide" style="margin-left:120px; background-image:url('./images/macro3.png');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Or, View Trends Cutting Across Locations, Brands, Products, Etc.<br>
                                                <b><font style="color: yellow">Make Informed Decisions, Instantly.</font></b>
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                            
                                <section>
                                    <div id="slide5" class="slide" style="margin-left:120px; background-image:url('./images/catchment.jpg');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Segment the Catchment Areas surrounding your Outlets.
                                                <br> Fine tune your Product Mix based on the Catchment Area.
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                               <section>
                                    <div id="slide6" class="slide" style="margin-left:120px; background-image:url('./images/photocov1.png');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Pan India Network of Professional Photographers Ready to
                                                Tell the Story of Your Business Nationally within a Span of Weeks.
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                                <section>
                                    <div id="slide7" class="slide" style="margin-left:120px; background-image:url('./images/online.jpg');">
					
                                        <div style="padding-top: 220px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff;">
						Retail Scorecards Platform Presents Detailed Analytics Derived from the Photos.<br>
                                                Ask for a Demo to see the full potential of this Solution.
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>
                                <section>
                                    <div id="slide8" class="slide" style="margin-left:120px; background-image:url('./images/contact.jpg');">
					
                                        <div style="padding-top: 220px; padding-left: 280px">
						<div class="seperator_title">
                                                <p style="vertical-align: middle; font-size: 45px; color:#ffffff; text-align: left">
						Call or write for a demo.<br>
                                                </p>
                                                <p style="vertical-align: middle; font-size: 20px; color:#ffffff; text-align: left">ProductRx Consulting Pvt Ltd<br>
                                                +919958248203 <br>
                                                info@productrx.com
                                                </p>
                                                </div>
                                        </div>
                                    </div>
				</section>

			</div>

		</div>
            </div>
            <!--         Footer content block   -->
            <div class="footer_div">
                <p class="footer_copyright_txt">ProductRx ©2014.
                </p>
            </div>
            <!--         Footer content block Ends   -->
        </div>
        <script src="reveal/lib/js/head.min.js"></script>
        <script src="reveal/js/reveal.min.js"></script>

        <script>

                // Full list of configuration options available here:
                // https://github.com/hakimel/reveal.js#configuration
                Reveal.initialize({
                        controls: true,
                        progress: true,
                        history: false,
                        center: true,
                     // Loop the presentation
                        loop: true,
                        // Number of milliseconds between automatically proceeding to the
                        // next slide, disabled when set to 0, this value can be overwritten
                        // by using a data-autoslide attribute on your slides
                        autoSlide: 5000,

                        // Stop auto-sliding after user input
                        autoSlideStoppable: true,

                        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                        transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

                        // Parallax scrolling
                        // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
                        // parallaxBackgroundSize: '2100px 900px',

                        // Optional libraries used to extend on reveal.js
                        dependencies: [
                                { src: 'reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                                { src: 'reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                                { src: 'reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                                { src: 'reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                                { src: 'reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                                { src: 'reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
                                { src: 'reveal/plugin/fullscreen/fullscreen-img.js'}
                        ]
                });

        </script>
    </body>
</html>
