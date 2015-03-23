/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import com.productrx.scorecards.common.interfaces.IDetailsInterface;
import org.springframework.beans.factory.BeanFactory;

/**
 *
 * @author Kiran
 */
public class DetailsBean {
    
    static DetailsBean detailBobj;
    static IDetailsInterface iDetailsInterface;

    public void setiDetailsInterface(IDetailsInterface iDetailsInterface) {
        DetailsBean.iDetailsInterface = iDetailsInterface;
    }

    
    public static IDetailsInterface getInstance() {
        BeanFactory factory = BeanFactoryInstantiate.createBeanFactory();
        //BeanFactory factory = new ClassPathXmlApplicationContext("Spring-Branch-Configg.xml");
        detailBobj = (DetailsBean) factory.getBean("DetailsModule");
        return iDetailsInterface;
    }
    
}
