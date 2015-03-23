<%-- 
    Document   : dashboard
    Created on : May 9, 2014, 5:48:36 PM
    Author     : Ravi Nistala
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
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Scorecards - <%= clientid%></title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">
    
      <link href="css/custom.css" rel="stylesheet">

    <!-- Custom Fonts -->
    
   
    <!-- Original includes -->
    <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        
    <!-- Following includes for pop-up window for location search -->
    <link rel="stylesheet" href="css/dashboardcss/jquery-ui-1.10.3.custom.css"/>  
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        
    <![endif]-->
    
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
                                   
    <script type="text/javascript" src="js/dashboard_2.js"></script>
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
               <a class="navbar-brand" href="index.html" class="logo"><img src="images/logo.png" title="ProductRx" alt="ProductRx"></a><div class="retailscorecard">Retail Scorecards</div>
            </div>
            <!-- /.navbar-header -->

            
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" id="place" class="form-control" placeholder="All Locations">
                                <span class="input-group-btn">
                                <button id="loc" class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                                </span>
                            </div>
                            <div> <a onclick="LocationSearch()" data-rel="popup" data-transition="pop"> Search Locations </a></div>
                                                   	
                            <!-- input-group -->
                        </li>
                        <li>
                            <a onclick="activate_dashboard()"><span> <i class="fa fa-dashboard fa-fw"></i> Dashboard</span></a>
                            
                        </li>
                        <li class="scroll-y">
                            <a href="dashboard_2.jsp"><i class="fa fa-sitemap fa-fw"></i> Store Directory<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level" id="storelist">
                                <li><a href="#" data-toggle="tab"><b>Updating Stores List...</b></a></li>

                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> About<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="#overview" data-toggle="tab">Overview</a>
                                </li>
                                <li>
                                    <a href="#methodology" data-toggle="tab">Methodology</a>
                                </li>
                            </ul>
                        </li>
                         <li>
                            <a href="LoginController/Logout.action"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
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
                      <div class="tab-pane active" id="dashboard">
                    
                      <p class="toptext">
                        <span class="more">
                            <b>Please wait while the dashboard page loads.  It may take about 30 seconds...</b>
                        </span>
                      </p>                                            
                      </div>
                        
                      <div class="tab-pane" id="StoreWindow"> </div>
                          
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
    <script src="js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="js/plugins/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/sb-admin-2.js"></script>

        <script>
            google.load("visualization", "1", {packages:["corechart","table"]});
            jQuery(document).ready(function($) {
                CreateDashboardWidgets();
                populateStoreDirectory();                                
            });
        </script>
        
        <script>                      
            $('#loc').click(function() {
                RefreshDashboardWidgets();
                populateStoreDirectory();
            });
        </script>
        <div id="dialog" title="Search Location">
        <div>
            <p style="float: left; font-size: large"> Please click to choose a market </p>
            <hr>
            <div class="storeScorecard">
            <table class="numbersTable" id="areas" style="float:left;width:100%" ><tr><td></tr></td><tr><td></tr></td><tr><td><h4>Loading Scorecard. Please wait...</h4></td></tr><tr><td></tr></td><tr><td></tr></td></table>
            </div>
        </div>
        </div>    
    </body>
</html>
