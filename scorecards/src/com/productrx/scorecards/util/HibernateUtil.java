/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import java.util.Hashtable;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author Kiran
 */
public class HibernateUtil {

    //private static final SessionFactory sessionFactory;
    //private static final ServiceRegistry serviceRegistry;
    
    static Hashtable SessionFactories = new Hashtable();

/*    static {
        try {
// Create the SessionFactory from standard (hibernate.cfg.xml)
// config file.
            Configuration configuration = new Configuration();
            configuration.configure();
            serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);
        } catch (Throwable ex) {
// Log the exception.
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    * */

    public SessionFactory getSessionFactory(String clientCode) {
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
                serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
            
                SessionFactories.put(clientCode, sessionFactory);
            }
            return sessionFactory;
        } catch (Throwable ex) {
// Log the exception.
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
}
