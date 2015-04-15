
package com.productrx.scorecards.controller;

import com.productrx.scorecards.common.RESTException;
import com.productrx.scorecards.common.interfaces.IClientInterface;
import com.productrx.scorecards.vo.LoginVo;
import com.productrx.scorecards.vo.ClintConfigVo;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ClientController {

    @Autowired
    IClientInterface clientBean;
    @Autowired
    LoginVo loginVo;
    @Autowired
    ReloadableResourceBundleMessageSource messageSource;

    @RequestMapping(value = "/ClientController/GetConfig", method = RequestMethod.POST)
    public @ResponseBody
    ClintConfigVo getClientConfig(@RequestBody String data) {

        ClintConfigVo configData = new ClintConfigVo();
        
        try {
            JSONArray uiConfigArray = clientBean.getClientsInfo(loginVo.getClientId());
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("configData", uiConfigArray);
            configData.setConfigData(uiConfigArray.toString());
        } catch (Exception ex) {
         
            throw new RESTException("GET GetConfig", 1005, ex.getMessage(), ex);
        }
      
        return configData;
    }

    @ExceptionHandler(RESTException.class)
    public @ResponseBody
    Map<String, String> handleException(RESTException ex, Locale locale) {

        Map<String, String> mp = new HashMap<String, String>();
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        ex.printStackTrace(pw);
        mp.put("errorMessage", messageSource.getMessage("internal.error", null, locale) + "-" + ex.getErrorContext() + "-" + ex.getErrorCode() + ":" + ex.getErrorText());
        mp.put("errorDetail", sw.toString());
        return mp;

    }
}
