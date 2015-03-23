/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.common.interfaces;

import com.productrx.scorecards.vo.ChartVo;
import java.text.ParseException;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Kiran
 */
public interface IDetailsInterface {

    //public JSONArray getDetailViewFilters(String requestedData, String clientCode, String location, String dateRange)  throws ParseException; 

//    public JSONArray getFullReport(String requestedData,String clientCode, String location, String dateRange); //For Full View Report Option
//
//    public JSONArray downloadFullReport(String clientCode); // For Download Option

 //   public JSONObject getNumbersData(String requestedData, String clientCode,String filter, String locations, String dateRange);

 //   public JSONArray getChartData(String requestedData,JSONArray clientSpecficData,String locations,String dateRange);

    public JSONObject getWidgetData(String requestedData,String clientCode,String filter, String locations, String dateRange);

    public JSONArray getWidgetPhotos(String requestedData, String clientCode,String filter,String stores,String dateRange,int startIndex) throws ParseException ; 

   // public JSONObject getWidgetNumbers(String requestedData, String clientCode,String filter, String locations, String dateRange);

    public JSONObject submitNotes(String requestedData, String clientCode,String notes, String locations, String dateRange);
 //   public JSONArray getPhotos(String requestedData, String clientCode,String filter,String stores,String dateRange,int startIndex) throws ParseException ; 
    
 // Revamped Interface
     public List<String> getWidgetPhotoList(String requestedData, String clientCode,String filter,String stores,String dateRange,int startIndex) throws Exception ; 
     public ChartVo getWidgetChart(String requestedData,String clientCode,String filter, String locations, String dateRange) throws Exception;
      public ChartVo getWidgetNumbers(String requestedData, String clientCode,String filter, String locations, String dateRange) throws Exception;
}
