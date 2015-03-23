
package com.productrx.scorecards.vo;

import java.util.List;

/**
 * holds the response of details requests
 * @author akhalik
 */
public class DetailsResponseVo {
    
    private List<String> photos;
    private String notestable;
    private String numbers;
    private String charts;
    private String desc;
    private String chart_type;
    private String loc;
    private ChartVo chartVo;

   

    public void setNotestable(String notestable) {
        this.notestable = notestable;
    }

    public void setNumbers(String numbers) {
        this.numbers = numbers;
    }

    public void setCharts(String charts) {
        this.charts = charts;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setChart_type(String chart_type) {
        this.chart_type = chart_type;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    public String getNotestable() {
        return notestable;
    }

    public String getNumbers() {
        return numbers;
    }

    public String getCharts() {
        return charts;
    }

    public String getDesc() {
        return desc;
    }

    public String getChart_type() {
        return chart_type;
    }

    public String getLoc() {
        return loc;
    }

    public List<String> getPhotos() {
        return photos;
    }

    public void setPhotos(List<String> photos) {
        this.photos = photos;
    }

    public ChartVo getChartVo() {
        return chartVo;
    }

    public void setChartVo(ChartVo chartVo) {
        this.chartVo = chartVo;
    }
    

   
       
}
