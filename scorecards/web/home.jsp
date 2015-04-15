<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title><spring:message code="app.title"></spring:message></title>

        <!-- Bootstrap Core CSS -->
        <link href="<c:url value="${webappRoot}/css/bootstrap.min.css" />" rel="stylesheet">

        <!-- MetisMenu CSS -->
        <link href="<c:url value="${webappRoot}/css/plugins/metisMenu/metisMenu.min.css" />" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="<c:url value="${webappRoot}/css/sb-admin-2.css" />" rel="stylesheet">

        <link href="<c:url value="${webappRoot}/css/custom.css"/>" rel="stylesheet">
        <link href="<c:url value="${webappRoot}/css/custome.css"/>" rel="stylesheet">

        <!-- Custom Fonts -->



        <link href="<c:url value="${webappRoot}/font-awesome-4.1.0/css/font-awesome.min.css"/>" rel="stylesheet" type="text/css">
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

        <script type="text/javascript">
            $(document).ready(function () {

                $('#loadingImg').hide();
                var clientid = $("#CLIENT_ID"),
                        username = $("#Username"),
                        password = $("#Password"),
                        allFields = $([]).add(clientid).add(username).add(password),
                        tips = $(".validateTips");
                function updateTips(t) {
                    tips
                            .html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+t+'<div>');
                            //.addClass("ui-state-highlight");
                    setTimeout(function () {
                        tips.removeClass("ui-state-highlight", 1500);
                    }, 500);
                }
                function checkLength(o, n, min, max) {
                    if (o.val().length > max || o.val().length < min) {
                        o.addClass("error");
                        updateTips("Please enter " + n + ".");
                        return false;
                    } else {
                        return true;
                    }
                }
                allFields.keyup(function () {
                    allFields.removeClass("error");
                    tips.html('');
                });

                function validateCredentials() {

                    var bValid = true;
                    allFields.removeClass("error");
                    bValid = bValid && checkLength(clientid, "clientid", 1, 80);
                    bValid = bValid && checkLength(username, "username", 1, 16);
                    bValid = bValid && checkLength(password, "password", 1, 16);

                    if (bValid) {
                        $('#loadingImg').show();
                        var inputdata = {
                            "clientId": $('#CLIENT_ID').val(),
                            "userName": $('#Username').val(),
                            "password": $('#Password').val(),
                        };
                        $.ajax({
                            url: "<c:url value="${webappRoot}/LoginController/Login.action"/>",
                            type: "POST", //listrequest={"type":"'+type+'","id":"'+listid+'"}
                            data: inputdata,
                            success: function (result) {
                                if(result.errorMessage){
        
                                    alert(result.errorMessage);
                                    return;
                                    }
                                
                                if (result != "success") {
                                    updateTips(result);
                                    $('#loadingImg').hide();
                                } else {
                                    $('#loadingImg').show();
                                    window.location.assign("<c:url value="${webappRoot}/dashboard_2.jsp"/>");
                                }
                            }, error: function (jqXHR, textStatus, errorThrown) {
                            var errMsg="<spring:message code="internal.error"/>";
                                alert(errMsg);
                                console.log(jqXHR.responseText);
                                console.log(textStatus.toString());
                            }
                        });
                    } else {
                        $('#loadingImg').hide();
                    }
                }

                $("#mysubmit").click(function () {
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
            $(function () {
                $(".navbar-collapse ul li ul li a").click(function () {
                    $(".navbar-collapse").collapse('toggle');
                });
            })
        </script>

        <script type="text/javascript" src="<c:url value="${webappRoot}/js/dashboard_2.js"/>"></script>
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
                    <a class="navbar-brand" href="index.html" class="logo"><img src="<c:url value="${webappRoot}/images/logo.png"/>" title="Daikin" alt="Daikin"></a><div class="retailscorecard"><spring:message code="app.title"></spring:message></div>
                    
                </div>
                <!-- /.navbar-header -->
                

                <!-- /.navbar-top-links -->

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li class="sidebar-search">
                                <div class="input-group custom-search-form">
                                    <form action="" method="post" target="_self">
                                        <label class="form_label_txt">
                                           <spring:message code="label.client.code"></spring:message></label>
                                        <input id="CLIENT_ID" type="text" name="clientid"  autofocus="true" />
                                         <label class="form_label_txt">
                                         <spring:message code="label.user.name"></spring:message>
                                         </label>
                                        <input id="Username" type="text" name="username" value="" />
                                        <label class="form_label_txt"> 
                                        <spring:message code="label.password"></spring:message></label>
                                        <input id="Password" type="password" name="password" value="" />
                                        <input type="button" id="mysubmit" value="<spring:message code="label.submit"></spring:message>" class="submit_btn" />
                                        <img id="loadingImg" src="<c:url value="${webappRoot}/images/loading_login.gif"/>" class="loginLoading">
                                        
                                        <div class="validateTips"></div>
                                       
                                    </form>
                                </div>
                                <!-- /input-group -->
                            </li>
                            <li>
                                  <c:if test="${not empty logout}">
                                        <div class="alert alert-success alert-dismissable">
                                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                            <c:out value="${logout}"/>
                                        </div>
                                    </c:if>
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
                            <div class="tab-pane active" id="rs_intro" onkeydown="nextPage('rs_intro', 'rs_method')" onclick="nextPage('rs_intro', 'rs_method')"> 

                                <!--intro1-->
                                <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                                    <div class="tab-content">
                                  
                                        <div class="tab-pane active" id="intro1">
                                            <div style="position:relative;">
                                                <img class="img-responsive" src="<c:url value="${webappRoot}/images/diamond.jpg"/>">
                                                <div style="position:absolute;top:20%;left:55%;">    

                                                    <p style="font-size: 25px; color: #ffffff; text-align: left">
                                                         <spring:message code="app.title"></spring:message>
                                                        <br>
                                                    </p>
                                                    <p style="font-size: 14px; color:#ffffff; text-align: left">
                                                        <spring:message code="app.description"></spring:message>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div class="tab-pane" id="rs_method" onclick="nextPage('rs_method', 'rs_dashboard')"> 

                                <!--intro1-->
                                <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="intro1">
                                            <div style="position:relative;">
                                                <img class="img-responsive" src="<c:url value="${webappRoot}/images/method.jpg"/>">
                                                <div style="position:absolute;top:20%;left:55%;">    

                                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                                    <spring:message code="widget.photo.title"></spring:message>
                                                        <br>
                                                    </p>
                                                    <p style="font-size: 14px; color:#002b36; text-align: left">
                                                        <spring:message code="widget.photo.description"></spring:message>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                             <div class="tab-pane" id="rs_dashboard" onclick="nextPage('rs_dashboard', 'rs_contact')"> 
                                <!--intro1-->
                                <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="intro1">
                                            <div style="position:relative;">
                                                <img class="img-responsive" src="<c:url value="${webappRoot}/images/dash.jpg"/>">
                                                <div style="position:absolute;top:20%;left:55%;">    

                                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                                    <spring:message code="dashboard.title"></spring:message>
                                                        <br>
                                                    </p>
                                                    <p style="font-size: 14px; color:#002b36; text-align: left">
                                                        <spring:message code="dashboard.description"></spring:message>
                                                    </p>
                                                </div>
                                            </div>                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="tab-pane last" id="rs_contact" onclick="nextPage('rs_contact', 'rs_intro')"> 
                                <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 xyz center">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="intro2">
                                            <div style="position:relative;">
                                                <img class="img-responsive" src="<c:url value="${webappRoot}/images/contact.jpg"/>">
                                                <div style="position:absolute;top:20%;left:55%;">    
                                                    <p style="font-size: 25px; color: #002b36; text-align: left">
                                                         <spring:message code="label.company.contactus"></spring:message>
                                                        <br>
                                                    </p>
                                                    <p style="vertical-align: middle; font-size: 14px; color:#002b36; text-align: left">
                                                    <spring:message code="company.info"></spring:message>
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

                <span style="font-size:12px;"><spring:message code="company.copyright"></spring:message></span>

            </footer>
        </div>

        <!-- Bootstrap Core JavaScript -->
        <script src="<c:url value="${webappRoot}/js/bootstrap.min.js"/>"></script>

        <!-- Metis Menu Plugin JavaScript -->
        <script src="<c:url value="${webappRoot}/js/plugins/metisMenu/metisMenu.min.js"/>"></script>

        <!-- Custom Theme JavaScript -->
        <script src="<c:url value="${webappRoot}/js/sb-admin-2.js"/>"></script>
        <script>
                                function nextPage(current, next) {
                                    $('#' + current).removeClass("active");
                                    $('#' + next).addClass("active");
                                }
        </script>
    </body>
</html>
