package com.productrx.scorecards.vo;

import java.util.List;

/**
 * a chart object - this just as per the current implementation and will be changed 
 * @author akhalik
 */
public class ChartVo {
    
    private String charType;
    private String desc;
    private List<String> header;
    private List data;
   
    private List dataTable;
    private String location;    
    public String getCharType() {
        return charType;
    }

    public void setCharType(String charType) {
        this.charType = charType;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<String> getHeader() {
        return header;
    }

    public void setHeader(List<String> header) {
        this.header = header;
    }

    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }

  
   

   


    public List getDataTable() {
        return dataTable;
    }

    public void setDataTable(List dataTable) {
        this.dataTable = dataTable;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    
    
    
}
