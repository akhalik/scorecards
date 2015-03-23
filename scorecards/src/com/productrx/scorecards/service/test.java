/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.service;

import com.productrx.scorecards.util.HibernateUtil;
import java.math.BigInteger;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Kiran
 */
public class test {

    public static void main(String[] args) throws ParseException {

        test obj = new test();
        obj.parseDate();
    }

    public void parseDate() throws ParseException {
        String dateRange = "01/04/2013 - 30/06/2013";
        String[] dates = dateRange.split(" - ");
        String date1 = dates[0];
        String date2 = dates[1];
    }

    

    public List<String> getStorecodes() {

        Transaction transaction = null;
        HibernateUtil hibernate = new HibernateUtil();
        Session session = hibernate.getSessionFactory("productrx").openSession();
        transaction = session.beginTransaction();
        String queryString_storecodes = "SELECT concat(\"'\",store_code,\"'\") FROM store_details s where store_country = 1";
        String queryString_CountStorecodes = "SELECT count(store_code) FROM store_details s where store_country = 1";
        SQLQuery resultSet_storecodes = session.createSQLQuery(queryString_storecodes);
        SQLQuery resultSet_Countstorecodes = session.createSQLQuery(queryString_CountStorecodes);
        List<String> stList = resultSet_storecodes.list();
        List<String> countstList = resultSet_Countstorecodes.list();
        String storecodeList = stList.toString();
        storecodeList = storecodeList.substring(1, storecodeList.length() - 1);
        String totalcount = countstList.toString();
        totalcount = totalcount.substring(1, totalcount.length() - 1);


        return null;
    }
}
