package com.productrx.scorecards.controller;
import com.productrx.scorecards.common.interfaces.IloginInterface;
import com.productrx.scorecards.service.LoginAdapter;
import com.productrx.scorecards.vo.LoginVo;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
    
    @Autowired
    HttpSession session;
    @Autowired
    IloginInterface loginbean;
    @Autowired
    LoginVo loginVo;
     
    @RequestMapping (value = "/LoginController/Login",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestParam("clientId") String clientId, @RequestParam("userName") String userName,
            @RequestParam("password") String password) {
        
        System.out.println("Login" + session.isNew());
        boolean validate = loginbean.validateCredentials(clientId, userName, password);
        String result = "success";
                
         if(validate){
            String user = userName + "@" + clientId;
            loginVo.setClientId(clientId);
            loginVo.setPassword(password);
            loginVo.setUserName(userName);
            session.setAttribute("username", user);
         }else{
         result = "error";
         } 
        return result;
    }
    
   @RequestMapping (value="/LoginController/Logout")
   public ModelAndView logout(){
       
        System.out.println("logout");
        session.invalidate();
        return  new ModelAndView("home");
    }
    
//    /**
//     * Processes requests for both HTTP
//     * <code>GET</code> and
//     * <code>POST</code> methods.
//     *
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException, ParseException {
//        response.setContentType("text/html;charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        //   String request_string = request.getParameter("credentials");
//        //  JSONObject request_json = new JSONObject(request_string);
//        String clientid = request.getParameter("clientid");
//        String username = request.getParameter("username");
//        String password = request.getParameter("password");
//        try {
//            IloginInterface loginbean = com.productrx.scorecards.util.LoginBean.getInstance();
//            boolean validate = loginbean.validateCredentials(clientid, username, password);
//            String resp = "";
//            if (validate) {
//                HttpSession session = request.getSession(false);
//                String user = username + "@" + clientid;
//                session.setAttribute("username", user);
//                resp = "success";
//             //   RequestDispatcher rd = request.getRequestDispatcher("dashboard.jsp");
//              //  rd.include(request, response);
//                out.write(resp);
//            } else {
//                resp = "error";
//                out.write(resp);
//              //  RequestDispatcher rd = request.getRequestDispatcher("home.html");
//              //  rd.include(request, response);
//            }
//
//        } catch(Exception e){
//            System.out.println(e.getLocalizedMessage());
//        }
//        finally {
//            out.close();
//        }
//    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        try {
//            processRequest(request, response);
//        } catch (ParseException ex) {
//            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }

//    /**
//     * Handles the HTTP
//     * <code>POST</code> method.
//     *
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        try {
//            processRequest(request, response);
//        } catch (ParseException ex) {
//            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//
//    /**
//     * Returns a short description of the servlet.
//     *
//     * @return a String containing servlet description
//     */
//    @Override
//    public String getServletInfo() {
//        return "Short description";
//    }// </editor-fold>
}
