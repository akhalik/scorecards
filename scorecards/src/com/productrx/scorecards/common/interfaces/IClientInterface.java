/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.common.interfaces;

import org.json.JSONArray;

/**
 *
 * @author Kiran
 */
public interface IClientInterface {

    /**
     *
     * @return
     */
    public JSONArray getClientUIData() throws Exception;
    
    /**
     *
     * @param clientCode
     * @return
     */
    public JSONArray getClientsInfo(String clientCode) throws Exception;  
    // For Brandstrip
  //  public JSONArray getClientLocationData(String clientCode,String locationFilter, String colorSchema, String dateRange);   
    // for Map loading
}
