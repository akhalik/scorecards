
package com.productrx.scorecards.vo;

/**
 *serves to hold the details request for widgets, tabular data and notes
 * @author akhalik
 */
public class DetailRequestVo {
    
    private String queryId;
    private String requestType;
    private String location;
    private String dateRange;
    private String startIndex;
    private String index;
    private String note;
    private String filter;

    public String getFilter() {
        return filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }
    

    public String getQueryId() {
        return queryId;
    }

    public void setQueryId(String queryId) {
        this.queryId = queryId;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDateRange() {
        return dateRange;
    }

    public void setDateRange(String dateRange) {
        this.dateRange = dateRange;
    }

    public String getStartIndex() {
        return startIndex;
    }

    public void setStartIndex(String startIndex) {
        this.startIndex = startIndex;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    
}
