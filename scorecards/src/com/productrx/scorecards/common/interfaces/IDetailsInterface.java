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
 * @author akhalik
 */
public interface IDetailsInterface {
 
     
     public List<String> getWidgetPhotoList(String requestedData, String clientCode,String filter,String stores,String dateRange,int startIndex) throws Exception ; 
     public ChartVo getWidgetChart(String requestedData,String clientCode,String filter, String locations, String dateRange) throws Exception;
     public ChartVo getWidgetNumbers(String requestedData, String clientCode,String filter, String locations, String dateRange) throws Exception;
     public ChartVo notesData(String requestedData, String clientCode,String notes, String locations, String dateRange) throws Exception;
}
