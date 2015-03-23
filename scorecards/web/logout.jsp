<%-- 
    Document   : logout
    Created on : May 10, 2013, 11:24:16 AM
    Author     : Kiran
--%>

<%@page import = "java.util.Date" session="true"%>
<%
HttpServletResponse res = (HttpServletResponse) response;
res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
res.setDateHeader("Expires", 0); // Proxies.
  //session.setAttribute("user", null); 
  session.invalidate();
  response.sendRedirect("home.jsp");  
%>