/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import com.productrx.scorecards.common.interfaces.IloginInterface;
import org.springframework.beans.factory.BeanFactory;

/**
 *
 * @author Kiran
 */
public class LoginBean {

    static LoginBean loginBDobj;
    static IloginInterface iloginInterface;

    public void setIloginInterface(IloginInterface iloginInterface) {
        LoginBean.iloginInterface = iloginInterface;
    }

    public static IloginInterface getInstance() {
        BeanFactory factory = BeanFactoryInstantiate.createBeanFactory();
        //BeanFactory factory = new ClassPathXmlApplicationContext("Spring-Branch-Configg.xml");
        loginBDobj = (LoginBean) factory.getBean("LoginModule");
        return iloginInterface;
    }
}
