/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import java.util.Hashtable;

import org.hibernate.SessionFactory;

import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author Kiran
 */
public class HibernateUtil {

   private static Hashtable SessionFactories = new Hashtable();
   
   public static SessionFactory getSessionFactory(String clientCode) {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml)
            // config file.
            
            SessionFactory sessionFactory;
            ServiceRegistry serviceRegistry;
            sessionFactory = (SessionFactory)SessionFactories.get(clientCode);
            if(sessionFactory == null) {
                
                String configPath = clientCode.concat(".hibernate.cfg.xml");
                Configuration configuration = new Configuration();
                configuration.configure(configPath);
                //serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
               StandardServiceRegistryBuilder builder =new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());
               // serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
                sessionFactory = configuration.buildSessionFactory(builder.build());
            
                SessionFactories.put(clientCode, sessionFactory);
            }
            return sessionFactory;
        } catch (Throwable ex) {
            ex.printStackTrace();
            throw ex;
        }
    }
    
}
