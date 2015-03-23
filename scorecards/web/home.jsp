<%-- 
    Document   : dashboard
    Created on : May 9, 2013, 5:48:36 PM
    Author     : Kiran
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Retail Scorecards</title>

    <!-- Bootstrap Core CSS -->
    <link href="./css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="./css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="./css/sb-admin-2.css" rel="stylesheet">
    
      <link href="./css/custom.css" rel="stylesheet">
      <link href="./css/custome.css" rel="stylesheet">

    <!-- Custom Fonts -->
    
   
    
    <link href="./font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    
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
                            "clientId" : $('#CLIENT_ID').val(),
                            "userName" : $('#Username').val(),
                            "password" : $('#Password').val()
                        };
                        $.ajax({  
                            url: "LoginController/Login.action",  
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
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        
    <![endif]-->
    
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">	
        $(function(){
            $(".navbar-collapse ul li ul li a").click(function(){
                    $(".navbar-collapse").collapse('toggle');
            });
        })
    </script>
                       
    <script type="text/javascript" src="./js/dashboard_2.js"></script>
</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               <a class="navbar-brand" href="index.html" class="logo"><img src="./images/logo.png" title="Daikin" alt="Daikin"></a><div class="retailscorecard">Retail Scorecards</div>
            </div>
            <!-- /.navbar-header -->

            
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <form action="" method="post" target="_self">
                                    <label class="form_label_txt">Client Id</label>
                                    <input id="CLIENT_ID" type="text" name="clientid"  autofocus=""true" />
                                    <label class="form_label_txt">Username</label>
                                    <input id="Username" type="text" name="username" value="" />
                                    <label class="form_label_txt">Password</label>
                                    <input id="Password" type="password" name="password" value="" />
                                    <input type="button" id="mysubmit" value="submit" class="submit_btn" />
                                    <img id="loadingImg" src="images/loading_login.gif" class="loginLoading">
                                    <div class="validateTips"></div>
                                </form>
                            </div>
                            <!-- /input-group -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       <!-- Page Content -->
        <div id="page-wrapper">
            <div class="row">
                    <div class="col-lg-12 padbottom">
                    <div class="tab-content">
                      <div class="tab-pane active" id="rs_intro" onkeydown="nextPage('rs_intro','rs_method')" onclick="nextPage('rs_intro','rs_method')"> 
                      
                       <!--intro1-->
                       <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                         <div class="tab-content">
                           <div class="tab-pane active" id="intro1">
                               <div style="position:relative;">
                                    <img class="img-responsive" src="./images/diamond.jpg">
                                    <div style="position:absolute;top:20%;left:55%;">    

                                    <p style="font-size: 25px; color: #ffffff; text-align: left">
                                        Retail Scorecards
                                        <br>
                                    </p>
                                    <p style="font-size: 14px; color:#ffffff; text-align: left">Evaluate your Retail Stores on criteria
                                        such as Visibility, Location, Upkeep, Alignment with business needs, etc.
                                    </p>
                                    </div>
                               </div>
                            </div>
                          </div>
                       </div>
                      </div>
                       
                      <div class="tab-pane" id="rs_method" onclick="nextPage('rs_method','rs_dashboard')"> 
                      
                       <!--intro1-->
                       <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                         <div class="tab-content">
                           <div class="tab-pane active" id="intro1">
                               <div style="position:relative;">
                                    <img class="img-responsive" src="./images/method.jpg">
                                    <div style="position:absolute;top:20%;left:55%;">    

                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                        Photo Based Assessment
                                        <br>
                                    </p>
                                    <p style="font-size: 14px; color:#002b36; text-align: left">Photos taken in and around the store form the basis of evaluation.  
                                            Surveys, Mystery Audits, Etc. are also used as required.
                                    </p>
                                    </div>
                               </div>
                            </div>
                          </div>
                       </div>
                      </div>
                        
                      <div class="tab-pane" id="rs_dashboard" onclick="nextPage('rs_dashboard','rs_contact')"> 
                      
                       <!--intro1-->
                       <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                         <div class="tab-content">
                           <div class="tab-pane active" id="intro1">
                               <div style="position:relative;">
                                    <img class="img-responsive" src="./images/dash.jpg">
                                    <div style="position:absolute;top:20%;left:55%;">    

                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                        Interactive Dashboard
                                        <br>
                                    </p>
                                    <p style="font-size: 14px; color:#002b36; text-align: left">A quick summary of key indicators. Deep dive to see trends and photos all the way down to individual store level.
                                    </p>
                                    </div>
                               </div>                               
                            </div>
                          </div>
                       </div>
                      </div>
                        
                      <div class="tab-pane last" id="rs_contact" onclick="nextPage('rs_contact','rs_intro')"> 
                       <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                         <div class="tab-content">
                           <div class="tab-pane active" id="intro2">
                               <div style="position:relative;">
                                    <img class="img-responsive" src="./images/contact.jpg">
                                    <div style="position:absolute;top:20%;left:55%;">    

                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                        Call or write for a demo
                                        <br>
                                    </p>
                                    <p style="vertical-align: middle; font-size: 14px; color:#002b36; text-align: left">ProductRx Consulting Pvt Ltd<br>
                                        +919958248203 <br>
                                        info@productrx.com
                                        </p>
                                    </div>
                               </div>                               
                            </div>
                          </div>
                       </div>
                      </div>
                    </div>
                    </div>
            </div>
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
    
    
     <!-- Footer -->
    
    <div class="clearfix"></div>
     <div class="footer">
        <hr>
        <footer>
            
                <span style="font-size:12px;">Copyright © 2014 ProductRx Consulting Pvt Ltd | <a href="#">Terms & Privacy</a></span>
            
        </footer>
     </div>

    <!-- Bootstrap Core JavaScript -->
    <script src="./js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="./js/plugins/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="./js/sb-admin-2.js"></script>
    <script>
        function nextPage(current,next) {
            $('#'+current).removeClass("active");
            $('#'+next).addClass("active");
        }
    </script>
    </body>
</html>
