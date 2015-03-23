/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.controller;

import com.productrx.scorecards.common.interfaces.IDetailsInterface;
import com.productrx.scorecards.util.DetailsBean;
import com.productrx.scorecards.vo.ChartVo;
import com.productrx.scorecards.vo.DetailRequestVo;
import com.productrx.scorecards.vo.DetailsResponseVo;
import com.productrx.scorecards.vo.LoginVo;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class DetailsController extends HttpServlet{

    
    @Autowired
    LoginVo loginVo;
    @Autowired
    IDetailsInterface iDetailsInterface;
    
    @RequestMapping(value = "/DetailsController/WidgetPhotos", method=RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody DetailsResponseVo getWidgePhotos(@RequestBody DetailRequestVo requestVo){
    
        DetailsResponseVo responseVo = new DetailsResponseVo();
        String clientId ;
        String userId;
        String queryId;
        String requestType;
        try{
            // TODO: session and data validations
        clientId = loginVo.getClientId();
        userId = loginVo.getUserName();
        queryId  = requestVo.getQueryId();
        requestType = requestVo.getRequestType();
         if (requestType.equalsIgnoreCase("widgetphotos")) {
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                String startIndex = requestVo.getStartIndex();
                String filter = requestVo.getFilter();
            
                List<String> photos = iDetailsInterface.getWidgetPhotoList(queryId, clientId, filter, location, dateRange, Integer.parseInt(startIndex));
//               // JSONArray photosArray = iDetailsInterface.getWidgetPhotos(queryId, clientId, filter, location, dateRange, Integer.parseInt(startIndex));
//                if (photosArray.length() == 0) {
//                    photosArray = new JSONArray();
//                }
                //jsonResponse.put("photos", photosArray);
                responseVo.setPhotos(photos);
//            } else if (queryId.equalsIgnoreCase("widgetnumbers")) {
//               
//                String filter = requestVo.getFilter();
//                String location =  requestVo.getLocation();
//                String dateRange = requestVo.getDateRange();
//                
//                JSONObject numbersRes = iDetailsInterface.getWidgetNumbers(queryId, clientId, filter, location, dateRange);
//                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
//                if (numbersArray.length() == 0) {
//                    numbersArray = new JSONArray();
//                }
//                jsonResponse.put("numbers", numbersArray);
//            } else if (request_json.getString("requestType").equals("submitnotes")) {
//                String note = request_json.getString("note");
//                String location = request_json.getString("location");
//                String dateRange = request_json.getString("dateRange");
//                
//                JSONObject numbersRes = detailBean.submitNotes(queryId, clientID, note, location, dateRange);
//                JSONArray numbersArray = numbersRes.getJSONArray("notestable");
//                if (numbersArray.length() == 0) {
//                    numbersArray = new JSONArray();
//                }
//                jsonResponse.put("notestable", numbersArray);
           } else if (queryId.equals("widget")) {
             String location = requestVo.getLocation();
             String dateRange = requestVo.getDateRange();
             String filter = requestVo.getFilter();
               
//                JSONObject numbersRes = detailBean.getWidgetData(queryId, clientID, filter, location, dateRange);
//                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
//                                
//                //Google charts requires table data to be transposed
//                JSONArray chartsArray = transposeArray(numbersArray);
//                
//                jsonResponse.put("charts", chartsArray);
//                
//                String desc = numbersRes.getString("desc");
//                jsonResponse.put("desc", desc);
//                String ctype = numbersRes.getString("chart_type");
//                jsonResponse.put("chart_type", ctype);
//                String loc = numbersRes.getString("loc");
//                jsonResponse.put("loc", loc);
            } 
        
        
        }catch(Exception ex){
            //TODO - exception handling
         ex.printStackTrace();
        }
        
        
        return responseVo;
    }
    
    
    
    @RequestMapping(value = "/DetailsController/WidgetChart", method=RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody DetailsResponseVo getWidgeChart(@RequestBody DetailRequestVo requestVo){
    
        DetailsResponseVo responseVo = new DetailsResponseVo();
        String clientId ;
        String userId;
        String queryId;
        String requestType;
        try{
            // TODO: session and data validations
        clientId = loginVo.getClientId();
        userId = loginVo.getUserName();
        queryId  = requestVo.getQueryId();
        requestType = requestVo.getRequestType();
       if (requestType.equals("widget")) {
             String location = requestVo.getLocation();
             String dateRange = requestVo.getDateRange();
             String filter = requestVo.getFilter();
              ChartVo chartVo = iDetailsInterface. getWidgetChart(queryId, clientId, filter, location, dateRange);
              responseVo.setChartVo(chartVo);
//                JSONObject numbersRes = detailBean.getWidgetData(queryId, clientID, filter, location, dateRange);
//                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
//                                
//                //Google charts requires table data to be transposed
//                JSONArray chartsArray = transposeArray(numbersArray);
//                
//                jsonResponse.put("charts", chartsArray);
//                
//                String desc = numbersRes.getString("desc");
//                jsonResponse.put("desc", desc);
//                String ctype = numbersRes.getString("chart_type");
//                jsonResponse.put("chart_type", ctype);
//                String loc = numbersRes.getString("loc");
//                jsonResponse.put("loc", loc);
            } 
        }catch(Exception ex){
            //TODO - exception handling
         ex.printStackTrace();
        }
        
        
        return responseVo;
    }
    
    @RequestMapping(value = "/DetailsController/WidgetDataTable", method=RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody ChartVo getWidgeDataTable(@RequestBody DetailRequestVo requestVo) throws Exception{
    
        ChartVo responseVo = new ChartVo();
        String clientId ;
        String userId;
        String queryId;
        String requestType;
        try{
            // TODO: session and data validations
        clientId = loginVo.getClientId();
        userId = loginVo.getUserName();
        queryId  = requestVo.getQueryId();
        requestType = requestVo.getRequestType();
        if (requestType.equals("widgetnumbers")) {
                String filter = requestVo.getFilter();
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                responseVo = iDetailsInterface.getWidgetNumbers(queryId, clientId, filter, location, dateRange);
//                JSONObject numbersRes = new JSONObject();
//                JSONObject numbersRes = detailBean.getWidgetNumbers(queryId, clientID, filter, location, dateRange);
//                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
//                if (numbersArray.length() == 0) {
//                    numbersArray = new JSONArray();
//                }
//                jsonResponse.put("numbers", numbersArray);
            }
        
        
        }catch(Exception ex){
            ex.printStackTrace();
            
            throw ex;
        }
              
        return responseVo;
    }
    
    
      @RequestMapping(value = "/save", method = RequestMethod.POST, headers = "accept=application/json")  
         public @ResponseBody DetailsResponseVo Test(@RequestBody DetailRequestVo requestVo){
             
             System.out.println(""+requestVo.getQueryId());
            DetailsResponseVo responseVo = new DetailsResponseVo();
             return responseVo;
         }
    
    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ParseException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String requestString = request.getParameter("detailsRequest");
        JSONObject request_json = new JSONObject(requestString);
        JSONObject jsonResponse = new JSONObject();

        try {
            HttpSession session = request.getSession(false);
            String username = session.getAttribute("username").toString();
            
            String clientID = username.substring(username.indexOf('@')+1);
            
            String queryId = request_json.getString("QueryId");
            System.out.println("QueryId : "+queryId);
            IDetailsInterface detailBean = DetailsBean.getInstance();
            if (request_json.getString("requestType").equals("widgetphotos")) {
                String location = request_json.getString("location");
                String dateRange = request_json.getString("dateRange");
                String startIndex = request_json.getString("startIndex");
                String filter = request_json.getString("filter");
                JSONArray photosArray = detailBean.getWidgetPhotos(queryId, clientID, filter, location, dateRange, Integer.parseInt(startIndex));
                if (photosArray.length() == 0) {
                    photosArray = new JSONArray();
                }
                jsonResponse.put("photos", photosArray);
            } else if (request_json.getString("requestType").equals("widgetnumbers")) {
                String filter = request_json.getString("filter");
                String location = request_json.getString("location");
                String dateRange = request_json.getString("dateRange");
                JSONObject numbersRes = new JSONObject();
              //  JSONObject numbersRes = detailBean.getWidgetNumbers(queryId, clientID, filter, location, dateRange);
                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
                if (numbersArray.length() == 0) {
                    numbersArray = new JSONArray();
                }
                jsonResponse.put("numbers", numbersArray);
            } else if (request_json.getString("requestType").equals("submitnotes")) {
                String note = request_json.getString("note");
                String location = request_json.getString("location");
                String dateRange = request_json.getString("dateRange");
                
                JSONObject numbersRes = detailBean.submitNotes(queryId, clientID, note, location, dateRange);
                JSONArray numbersArray = numbersRes.getJSONArray("notestable");
                if (numbersArray.length() == 0) {
                    numbersArray = new JSONArray();
                }
                jsonResponse.put("notestable", numbersArray);
            } else if (request_json.getString("requestType").equals("widget")) {
                String filter = request_json.getString("filter");
                String location = request_json.getString("location");
                String dateRange = request_json.getString("dateRange");
                
                JSONObject numbersRes = detailBean.getWidgetData(queryId, clientID, filter, location, dateRange);
                JSONArray numbersArray = numbersRes.getJSONArray("numbers");
                                
                //Google charts requires table data to be transposed
                JSONArray chartsArray = transposeArray(numbersArray);
                
                jsonResponse.put("charts", chartsArray);
                
                String desc = numbersRes.getString("desc");
                jsonResponse.put("desc", desc);
                String ctype = numbersRes.getString("chart_type");
                jsonResponse.put("chart_type", ctype);
                String loc = numbersRes.getString("loc");
                jsonResponse.put("loc", loc);
            } 

            response.getWriter().write(jsonResponse.toString());
        } finally {
            out.close();
        }
    }

    public JSONArray transposeArray(JSONArray inArray) {
             
        if(inArray.length() ==0) {
            return new JSONArray();
        } else {
            return inArray;
        }        
    }
            
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
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(DetailsController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(DetailsController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
