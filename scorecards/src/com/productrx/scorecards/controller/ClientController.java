/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.controller;

import com.productrx.scorecards.common.interfaces.IClientInterface;
import com.productrx.scorecards.util.ClientBean;
import com.productrx.scorecards.vo.LoginVo;
import com.productrx.scorecards.vo.ClintConfigVo;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ClientController  {

    @Autowired
    IClientInterface clientBean;
    @Autowired
    LoginVo loginVo;
    
    @RequestMapping(value = "/ClientController/GetConfig", method = RequestMethod.POST)  
         public @ResponseBody ClintConfigVo getClientConfig(@RequestBody String data){
         
             ClintConfigVo configData = new ClintConfigVo();
             // TODO: 
             //if user is null need to go back with error
             // client bean to load xml stream in a bean as singletone and then that to be returned from here
             // send the proper response back with exception if no configuration done
             System.out.println("Data:"+data+" client"+loginVo.getClientId() +"user "+loginVo.getUserName());
             JSONArray uiConfigArray = clientBean.getClientsInfo(loginVo.getClientId());
             JSONObject jsonResponse = new JSONObject();

            jsonResponse.put("configData", uiConfigArray);
            configData.setConfigData(uiConfigArray.toString());
            System.out.println(" conf "+uiConfigArray.toString());
             return configData;
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
//            throws ServletException, IOException {
//        
//        response.setContentType("application/json");
//        
//        PrintWriter out = response.getWriter();
//        try {            
//            
//            HttpSession session = request.getSession(false);
//            String username = session.getAttribute("username").toString();
//            
//            String clientID = username.substring(username.indexOf('@')+1);
//            /* TODO output your page here. You may use following sample code. */
//            IClientInterface clientBean = ClientBean.getInstance();
//            JSONArray uiConfigArray = clientBean.getClientsInfo(clientID);
//            JSONObject jsonResponse = new JSONObject();
//
//            jsonResponse.put("configData", uiConfigArray);
//            response.getWriter().write(jsonResponse.toString());
//
//        } finally {
//            out.close();
//        }
//    }
//
//    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
//    /**
//     * Handles the HTTP
//     * <code>GET</code> method.
//     *
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        processRequest(request, response);
//    }
//
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
//        processRequest(request, response);
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
