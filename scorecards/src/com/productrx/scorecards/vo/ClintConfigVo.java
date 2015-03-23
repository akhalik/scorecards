/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.vo;



/**
 *
 * @author akhalik
 */
public class ClintConfigVo {
    
    private String id;
    
    private String name;
    private String configData;

    public String getConfigData() {
        return configData;
    }

    public void setConfigData(String configData) {
        this.configData = configData;
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    
}
