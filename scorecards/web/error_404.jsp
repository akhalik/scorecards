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

    </head>
    <body>
        
       
         <div class="wrapper">
             
            <div class="panel  panel-info">
                <div class="panel-heading">&nbsp;</div>
                <div class="panel-body"> <spring:message code="error.404"/></div>
                 
             </div>
            </div>
    
    
    </body> 
    
</html>
