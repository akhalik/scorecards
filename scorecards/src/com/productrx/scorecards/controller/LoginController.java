package com.productrx.scorecards.controller;
import com.productrx.scorecards.common.interfaces.IloginInterface;
import com.productrx.scorecards.vo.LoginVo;
import javax.servlet.http.HttpSession;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
    
    private static final Log logger = LogFactory.getLog(LoginController.class);
    
    @Autowired
    HttpSession session;
    @Autowired
    IloginInterface loginbean;
    @Autowired
    LoginVo loginVo;
     
    @RequestMapping (value = "/LoginController/Login",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestParam("clientId") String clientId, @RequestParam("userName") String userName,
            @RequestParam("password") String password) {
        
        logger.debug("INIT Login " + session.isNew() + "Client ID"+clientId+ " User" + userName);
        boolean validate = loginbean.validateCredentials(clientId, userName, password);
        String result = "success";
                
         if(validate){
            String user = userName + "@" + clientId;
            loginVo.setClientId(clientId);
            loginVo.setPassword(password);
            loginVo.setUserName(userName);
            session.setAttribute("username", user);
         }else{
              logger.error("Login Validation failed.");
             result = "error";
         } 
        return result;
    }
    
   @RequestMapping (value="/LoginController/Logout")
   public ModelAndView logout(){
       
        logger.info("Logout. Invalidating the session."+loginVo.getUserName());
        session.invalidate();
        return  new ModelAndView("home");
    }

}
