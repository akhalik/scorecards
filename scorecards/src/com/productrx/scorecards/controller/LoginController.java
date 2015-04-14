package com.productrx.scorecards.controller;

import com.productrx.scorecards.common.RESTException;
import com.productrx.scorecards.common.interfaces.IloginInterface;
import com.productrx.scorecards.vo.LoginVo;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
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
    @Autowired
    ReloadableResourceBundleMessageSource messageSource;

    @RequestMapping(value = "/LoginController/Login", method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestParam("clientId") String clientId, @RequestParam("userName") String userName,
            @RequestParam("password") String password, Locale locale) {

        logger.debug("INIT Login " + session.isNew() + "Client ID" + clientId + " User" + userName);
        String result = "success";
        try {

            boolean validate = loginbean.validateCredentials(clientId, userName, password);

            if (validate) {
                String user = userName + "@" + clientId;
                loginVo.setClientId(clientId);
                loginVo.setPassword(password);
                loginVo.setUserName(userName);
                session.setAttribute("username", user);
            } else {
                logger.error("Login Validation failed.");
                result = messageSource.getMessage("login.invalid.credentials", null, locale);
            }
        } catch (Exception ex) {
            //TODO - Logging // CONSTANT
            throw new RESTException("Login", 1006, ex.getMessage(), ex);
        }
        return result;
    }

    @RequestMapping(value = "/LoginController/Logout")
    public ModelAndView logout(Locale locale) {
        
        ModelAndView modelView = new  ModelAndView("home");;
        logger.info("Logout. Invalidating the session." + loginVo.getUserName());
        session.invalidate();
        modelView.addObject("logout",messageSource.getMessage("logout.message", null, locale) );
        return modelView;
    }

    @ExceptionHandler(RESTException.class)
    public @ResponseBody
    Map<String, String> handleRESTException(RESTException ex, Locale locale) {

        Map<String, String> mp = new HashMap<String, String>();
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        ex.printStackTrace(pw);
        mp.put("errorMessage", messageSource.getMessage("internal.error", null, locale) + "-" + ex.getErrorContext() + "-" + ex.getErrorCode() + ":" + ex.getErrorText());
        mp.put("errorDetail", sw.toString());
        return mp;

    }
    
     @ExceptionHandler(Exception.class)
    public @ResponseBody
    Map<String, String> handleException(Exception ex, Locale locale) {
        RESTException e = new RESTException("UNKNOWN", 2001, ex.getMessage(),ex);
        return handleRESTException(e, locale);

    }
}
