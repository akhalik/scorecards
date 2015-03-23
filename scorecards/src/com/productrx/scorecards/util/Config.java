/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.util;

import java.util.Hashtable;
import java.util.Properties;
import java.io.*;

/**
 *
 * @author Rabi
 */
public class Config {
    private static Config config = new Config( );
    static Hashtable ClientConfig = new Hashtable();
   /* A private Constructor prevents any other 
    * class from instantiating.
    */
   private Config(){ 
        ClientConfig = new Hashtable();
   }
   
   /* Static 'instance' method */
   public static Config getInstance(String clientCode) {
       if(ClientConfig.get(clientCode)==null) {
            Properties properties = new Properties();
            try {
                String configPath = clientCode.concat(".config.properties");
                properties.load(Config.class.getClassLoader().getResourceAsStream(configPath));

                ClientConfig.put(clientCode, properties);
            } catch (Exception e) {
                System.out.println("" + e.getCause());
                e.printStackTrace();
                return null;
            }
       }
      return config;
   }
   /* Other methods protected by singleton-ness */
   public String getProperty(String clientCode, String name) {
      Properties properties = (Properties)ClientConfig.get(clientCode);
      return properties.getProperty(name);
   }
}
