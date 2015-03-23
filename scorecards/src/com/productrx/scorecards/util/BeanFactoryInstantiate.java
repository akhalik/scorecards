/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author Kiran
 */
public class BeanFactoryInstantiate {

    public static final BeanFactory factory = null;

    /**
     * Loading spring configuration and return BeanFactory object.
     *
     * @return BeanFactory.
     */
    public static BeanFactory createBeanFactory() {
        if (factory == null) {
            ApplicationContext context = new ClassPathXmlApplicationContext("Spring-Branch-Config.xml");
            System.out.println("Context: "+context);
            BeanFactory factory = context;
            return factory;
        } else {
            return factory;
        }
    }
}
