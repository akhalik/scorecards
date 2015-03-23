<%-- 
    Document   : dashboard
    Created on : May 9, 2013, 5:48:36 PM
    Author     : Kiran
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true"%>
<%! String username = null, clientid = null;%>
<%   /*  Checking the session null or not   */
    String user = (String) session.getAttribute("username");
    System.out.println("dashpage user: " + user);
    if (user == null) {
      response.sendRedirect("home.jsp");
    } else {
        String[] s = user.split("@");
        username = s[0];
        clientid = s[1];
    }

%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE-9" />
        <title>Scorecards - <%= clientid%></title>
        <link rel="stylesheet" href="css/dashboardcss/jquery-ui-1.10.3.custom.css"/>  
        <link rel="stylesheet" href="css/ui.daterangepicker.css"/>  
        <link rel="stylesheet" type="text/css" href="css/jquery.multiselect.css" />
        <link rel="stylesheet" type="text/css" href="css/jquery.multiselect.filter.css" />
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/screen.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/lightbox.css" type="text/css" media="screen" />

        <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/jquery.totemticker.js"></script>

        <script type="text/javascript" src="js/jquery.multiselect.js"></script>
        <script type="text/javascript" src="js/jquery.multiselect.filter.js"></script>

        <script type="text/javascript" src="js/date.js"></script>
        <script type="text/javascript" src="js/daterangepicker.jQuery.js"></script>
        <script type="text/javascript" src="https://www.google.com/jsapi"></script>       
        <script type="text/javascript" src="js/clientUI.js"></script>
        <link href="css/slider.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/thumbnail-slider.js"></script>
        <script type="text/javascript" src="js/transpose.js"></script>
        
        <style>
            a{
                outline:none !important;
            }
            #vertical-ticker{
                cursor:wait;
                overflow: hidden;
                padding: 0;
                margin-top: -4px; margin-right: 0px; height: 22px;
                /*                -webkit-box-shadow:0 1px 3px rgba(0,0,0, .4);*/
            }

            #vertical-ticker li{
                background: none repeat scroll 0 0 #EFEFEF;
                color: #333333;
                display: block;
                font-family: Helvetica Neue,times,serif;
                font-size: 14px;
                font-weight: bold;
                line-height: 30px;
                text-align: justify;
            }

        </style>
        <link rel="stylesheet" href="css/dashboardcss/dashboard.css">
    </head>
    <body>
        <div class="total_page" style="border-top: 9px solid #FFFFFF">
            <div class="main_page">
                <div class="header1">
                    <img  id="logo" style="float: left;padding: 0px 0px 0px 20px;">
                    <div class="header1_middle">                        
                        <p class="brnd_nam"></p>
                        <div id="list_div" class="list_div">
                            <p class="header2_text">Featured Reports 
                                <select id="queries" name="Queries" class="queries" > </select>
                                <a href="javascript:LaunchQuery()" class="myButton">Go</a></p>
                        </div>
                        <div class="wcm_lo">
                            <ul>
                                <li><a style="padding: 0px 8px 0px 0px;font-weight: bold;">Welcome <%= username%> </a></li>
                                <li><a href="logout.jsp" style="padding: 0px 10px 0px 0px;text-decoration: underline" >Logout </a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="content_main_div">
                    <div style="width: 5%;height: 550px;float: left;background-color: transparent"></div>
                    <div class="content_div">  
                    </div>                     
                </div>             
                <div class="footer">
                    <div class="footer_middle">
                        <p class="footer_text1">© ProductRx. All Right Reserved. 2013-2014.</p>
                        <ul>
                            <li><a href="#" style="margin:  0px 7px 0px 0px;">Disclaimer</a><span>|</span></li>
                            <li><a href="#" style="margin:  0px 0px 0px 7px;">Terms & Conditions </a></li>
                        </ul>
                        <div class="poweredby" >
                            <p class="poweredby_text">Powered By</p>
                            <img src="images/Product_logo.png" class="poweredby_logo">
                        </div>
                    </div>
                </div>
            </div>                                
        </div>    

        <script src="js/jquery-ui-1.8.18.custom.min.js"></script>
        <script src="js/jquery.smooth-scroll.min.js"></script>
        <script>
            google.load("visualization", "1", {packages:["corechart","table"]});
            jQuery(document).ready(function($) {
                popUp(0,"html,body");   
                
                getClientUIData();
                //PivotWindow(0);
                //detailsWindow(parameters[2],0);
                //detailsWindow(parameters[1],0);
                popUp(1,"html,body");
                
            });
        </script>
    </body>
</html>
