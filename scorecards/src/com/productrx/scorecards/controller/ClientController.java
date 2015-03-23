/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.controller;

import com.productrx.scorecards.common.interfaces.IClientInterface;
import com.productrx.scorecards.vo.LoginVo;
import com.productrx.scorecards.vo.ClintConfigVo;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ClientController  {

    @Autowired
    IClientInterface clientBean;
    @Autowired
    LoginVo loginVo;
    
    @RequestMapping(value = "/ClientController/GetConfig", method = RequestMethod.POST)  
         public @ResponseBody ClintConfigVo getClientConfig(@RequestBody String data){
         
             ClintConfigVo configData = new ClintConfigVo();
             // TODO: 
             //if user is null need to go back with error
             // client bean to load xml stream in a bean as singletone and then that to be returned from here
             // send the proper response back with exception if no configuration done
             System.out.println("Data:"+data+" client"+loginVo.getClientId() +"user "+loginVo.getUserName());
             JSONArray uiConfigArray = clientBean.getClientsInfo(loginVo.getClientId());
             JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("configData", uiConfigArray);
            configData.setConfigData(uiConfigArray.toString());
            System.out.println(" conf "+uiConfigArray.toString());
             return configData;
         }
  
}
