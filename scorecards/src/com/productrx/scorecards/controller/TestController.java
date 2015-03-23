package com.productrx.scorecards.controller;

import com.productrx.scorecards.vo.LoginVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author akhalik
 */
@Controller
public class TestController {
    
    @Autowired
    private LoginVo loginVo;
    
    @RequestMapping(value="/TestData",  headers = "accept=application/json")
    public @ResponseBody LoginVo getData(){
    
        return  new LoginVo();
    }
}
