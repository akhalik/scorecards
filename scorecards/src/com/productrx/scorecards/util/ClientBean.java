/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import com.productrx.scorecards.common.interfaces.IClientInterface;
import org.springframework.beans.factory.BeanFactory;

/**
 *
 * @author Kiran
 */
public class ClientBean {
    
    static ClientBean clientBobj;
    static IClientInterface iClientInterface;

    public void setiClientInterface(IClientInterface iClientInterface) {
        ClientBean.iClientInterface = iClientInterface;
    }
    
     public static IClientInterface getInstance() {
        BeanFactory factory = BeanFactoryInstantiate.createBeanFactory();
        //BeanFactory factory = new ClassPathXmlApplicationContext("Spring-Branch-Configg.xml");
        clientBobj = (ClientBean) factory.getBean("ClientModule");
        return iClientInterface;
    }
    
}
