package com.productrx.scorecards.controller;
import com.productrx.scorecards.common.interfaces.IDetailsInterface;
import com.productrx.scorecards.vo.ChartVo;
import com.productrx.scorecards.vo.DetailRequestVo;
import com.productrx.scorecards.vo.DetailsResponseVo;
import com.productrx.scorecards.vo.LoginVo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DetailsController {

    @Autowired
    LoginVo loginVo;
    @Autowired
    IDetailsInterface iDetailsInterface;

    @RequestMapping(value = "/DetailsController/WidgetPhotos", method = RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody
    DetailsResponseVo getWidgePhotos(@RequestBody DetailRequestVo requestVo) {

        DetailsResponseVo responseVo = new DetailsResponseVo();
        String clientId;
        String userId;
        String queryId;
        String requestType;
        try {
            // TODO: session and data validations
            clientId = loginVo.getClientId();
            userId = loginVo.getUserName();
            queryId = requestVo.getQueryId();
            requestType = requestVo.getRequestType();
            if (requestType.equalsIgnoreCase("widgetphotos")) {
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                String startIndex = requestVo.getStartIndex();
                String filter = requestVo.getFilter();

                List<String> photos = iDetailsInterface.getWidgetPhotoList(queryId, clientId, filter, location, dateRange, Integer.parseInt(startIndex));
                responseVo.setPhotos(photos);
            }

        } catch (Exception ex) {
            //TODO - exception handling
            ex.printStackTrace();
        }

        return responseVo;
    }

    @RequestMapping(value = "/DetailsController/WidgetChart", method = RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody
    DetailsResponseVo getWidgeChart(@RequestBody DetailRequestVo requestVo) {

        DetailsResponseVo responseVo = new DetailsResponseVo();
        String clientId;
        String userId;
        String queryId;
        String requestType;
        try {
            // TODO: session and data validations
            clientId = loginVo.getClientId();
            userId = loginVo.getUserName();
            queryId = requestVo.getQueryId();
            requestType = requestVo.getRequestType();
            if (requestType.equals("widget")) {
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                String filter = requestVo.getFilter();
                ChartVo chartVo = iDetailsInterface.getWidgetChart(queryId, clientId, filter, location, dateRange);
                responseVo.setChartVo(chartVo);
            }
        } catch (Exception ex) {
            //TODO - exception handling
            ex.printStackTrace();
        }
        return responseVo;
    }

    @RequestMapping(value = "/DetailsController/WidgetDataTable", method = RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody
    ChartVo getWidgeDataTable(@RequestBody DetailRequestVo requestVo) throws Exception {

        ChartVo responseVo = new ChartVo();
        String clientId;
        String userId;
        String queryId;
        String requestType;
        try {
            // TODO: session and data validations
            clientId = loginVo.getClientId();
            userId = loginVo.getUserName();
            queryId = requestVo.getQueryId();
            requestType = requestVo.getRequestType();
            if (requestType.equals("widgetnumbers")) {
                String filter = requestVo.getFilter();
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                responseVo = iDetailsInterface.getWidgetNumbers(queryId, clientId, filter, location, dateRange);
            }

        } catch (Exception ex) {
            ex.printStackTrace();

            throw ex;
        }

        return responseVo;
    }

    @RequestMapping(value = "/DetailsController/NotesData", method = RequestMethod.POST, headers = "accept=application/json")
    public @ResponseBody
    ChartVo notesData(@RequestBody DetailRequestVo requestVo) throws Exception {

        ChartVo responseVo = new ChartVo();
        String clientId;
        String userId;
        String queryId;
        String requestType;
        String notes;
        try {
            // TODO: session and data validations
            clientId = loginVo.getClientId();
            userId = loginVo.getUserName();
            queryId = requestVo.getQueryId();
            requestType = requestVo.getRequestType();
            notes = requestVo.getNote();
            if (requestType.equals("submitnotes")) {
                String filter = requestVo.getFilter();
                String location = requestVo.getLocation();
                String dateRange = requestVo.getDateRange();
                responseVo = iDetailsInterface.notesData(queryId, clientId, notes, location, dateRange);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
        return responseVo;
    }
 }
