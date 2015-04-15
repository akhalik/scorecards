/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.service;

import com.productrx.scorecards.util.HibernateUtil;
import com.productrx.scorecards.common.interfaces.IloginInterface;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Kiran
 */
public class LoginAdapter implements IloginInterface {

    @Override
    public boolean validateCredentials(String clientId, String userName, String password) {    
        //HibernateUtil hibernate = new HibernateUtil();
        Session session = null;
        Transaction transaction = null;       
        try {
            session = HibernateUtil.getSessionFactory(clientId).openSession();
            transaction = session.beginTransaction();
            String queryString = "SELECT * FROM users u where user_clientid='" + clientId + "' and user_username = '" + userName + "' and user_password='" + password + "';";
            SQLQuery maxdatequery = session.createSQLQuery(queryString);
            List lst = maxdatequery.list();
            // System.out.println("user list size"+lst.size());
            if (!lst.isEmpty()) {
                transaction.commit();
               return true;
            } else {
                transaction.commit();
               return false;
            }   
        } catch (HibernateException e) {
            transaction.rollback();
            System.out.println("error:" + e.getLocalizedMessage());
        } finally {
            session.close();
        }
        return false;
    }
}
