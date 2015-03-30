/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.service;

import com.productrx.scorecards.common.interfaces.IDetailsInterface;
import com.productrx.scorecards.util.HibernateUtil;
import com.productrx.scorecards.util.Config;
import com.productrx.scorecards.vo.ChartVo;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Kiran
 */
public class DetailsAdapter implements IDetailsInterface {

    //Session session = HibernateUtil.getSessionFactory().openSession();
    Transaction transaction = null;

    static Hashtable PivotQueries = new Hashtable();
    static Hashtable Location = new Hashtable();
    
//    
//     /**
//     *
//     * @param queryId
//     * @param clientSpecficData
//     * @param locations
//     * @param dateRange
//     * @return
//     */
//    @Override /*Method used to Get Numbers Table of Itemtypes*/
//    @Deprecated
//    public JSONObject getWidgetData(String queryId, String clientCode,String filter, String loc, String dateRange) {
//        //fetch the query
//   
//        HibernateUtil hibernate = new HibernateUtil();
//        Session session = hibernate.getSessionFactory(clientCode).openSession();
//        
//        try {
//            JSONObject jsonObjRes = new JSONObject();
//            JSONArray returnArray = new JSONArray();
//            
//            transaction = session.beginTransaction();
//            
//            //Fetch the different lines in the scorecard from the config file
//            //Each item in the queries is a line in the scorecard.  It's a column in the scores table 
//            //and a category in the legends table
//            //Legends table is queried to get the score name corresponding to the score value
//            Config cfg = Config.getInstance(clientCode);
//            
//            String qs[] = cfg.getProperty(clientCode,queryId).split("\\|");
//            String hdr1 = qs[0];
//            String hdr2 = qs[1];
//            String queryString = qs[2];
//
//            //Initialize location to empty
//            jsonObjRes.put("loc", "");
//            
//            //Replace location filter in the query
//            if(loc.length()!=0) {
//                //find out the location type - state, district, city, area, etc
//                String locTable = cfg.getProperty(clientCode,"LocationTable");
//                String locFilter = "";
//                String locs[] = loc.split(",");
//                for(int i=0;i<locs.length;i++) {
//                    String locQuery = "select type from location where loc='"+locs[i]+"'";
//                    List<String> list = session.createSQLQuery(locQuery).list();
//                    if(list.size()!=0) {
//                        locFilter += locTable+"."+(String)list.get(0)+"='"+locs[i]+"' and ";
//                    }
//                }                            
//
//                if(!locFilter.isEmpty()) {
//                    locFilter = locFilter.substring(0, locFilter.lastIndexOf(" and"));
//                    //Insert location filter into the where clauses
//                    queryString = queryString.replace("TRUE", locFilter);      
//                    jsonObjRes.put("loc", loc);
//                } 
//            } 
//            
//            //Setup an array to store the results row-wise
//            ArrayList hdrValues = new ArrayList(); //header
//            
//            //Copy header using the columns list
//            hdrValues.add("\""+hdr1+"\"");
//            hdrValues.add("\""+hdr2+"\"");
//            returnArray.put(hdrValues); 
//            
//            
//            SQLQuery rs;
//            /* DSP query
//            String query = "select audit_scorename, count(*) from\n audit where " +
//                                        "    audit_indicator = '" + queryId + "' group by audit_score";
//                                        * */
//            // Liberty query
//            /*
//             * String query = "SELECT score_name, count(`"+queryId+"`) FROM scores, legend \n" +
//                            "where legend.category='"+queryId+"' and legend.score=`"+queryId+"`\n" +
//                            "group by score_name";
//                            * */
//            //fetch the data
//            rs = session.createSQLQuery(queryString);
//            List resultList = rs.list();
//            if(resultList.size()!=0) {            
//                for(Object rowObject:resultList) {
//                    //store each item into the json array, row by row
//                    ArrayList rowValues = new ArrayList(); //row
//                    
//                    Object[] rowArr = (Object[])rowObject;
//                    boolean string=true;
//                    for(Object item:rowArr) {
//                        if(string==true) {
//                            rowValues.add("\""+item.toString()+"\"");
//                            string = false;
//                        } else {
//                        //rowValues.add("\""+item.toString()+"\"");
//                        
//                            rowValues.add(item);
//                        }
//                    }
//                    returnArray.put(rowValues);
//                }                
//            }
//            jsonObjRes.put("numbers", returnArray);
//
//            //Insert query description into the return object
//            String qdesc = cfg.getProperty(clientCode, queryId+"-t");
//            jsonObjRes.put("desc", qdesc);
//            
//            //Insert query description into the return object
//            String ctype = cfg.getProperty(clientCode, "chart_type");
//            jsonObjRes.put("chart_type", ctype);
//            return jsonObjRes;
//            
//        }
//        catch (HibernateException e) {
//            transaction.rollback();
//            System.out.println("error:" + e.getLocalizedMessage());
//        } 
//        finally {
//            session.close();
//        }
//        return null;
//    }
    
    /**
     *
     * @param queryId
     * @param clientSpecficData
     * @param locations
     * @param dateRange
     * @return
     */
    /*Method used to Get Numbers Table of Itemtypes*/
    @Override
    public ChartVo getWidgetNumbers(String queryId, String clientCode, String filter, String loc, String dateRange) {
       
        HibernateUtil hibernate = new HibernateUtil();
        Session session = hibernate.getSessionFactory(clientCode).openSession();
        ChartVo chartVo = null;
        List dataTable;
        try {
//            JSONObject jsonObjRes = new JSONObject();
//            JSONArray returnArray = new JSONArray();
            chartVo = new ChartVo();
            dataTable = new ArrayList();                     
            transaction = session.beginTransaction();
            SQLQuery rs;

            //insert header first
            String header = "";                       
            String queryString="";
            
            Config cfg = Config.getInstance(clientCode);
            //Add a '-n' to the queryId to indicate query for numbers is being made
            String qs[] = cfg.getProperty(clientCode,queryId+"-n").split("\\|");
            header = qs[0];
            queryString = qs[1];
                
            if (queryId.equals("scorecard")) {                
                //return getScorecard(queryId, clientCode, filter, location, dateRange);
                queryString = queryString.replace("TRUE", filter.replaceAll("-", "'"));
            } 
            //Replace location filter in the query
            if(loc.length()!=0) {//find out the location type - state, district, city, area, etc
                String locTable = cfg.getProperty(clientCode,"LocationTable");
                String locFilter = "";
                String locs[] = loc.split(",");
                for(int i=0;i<locs.length;i++) {
                    String locQuery = "select type from location where loc='"+locs[i]+"'";
                    List<String> list = session.createSQLQuery(locQuery).list();
                    if(list.size()!=0) {
                        locFilter += locTable+"."+(String)list.get(0)+"='"+locs[i]+"' and ";
                    }
                }                                          

                if(!locFilter.isEmpty()) {
                    locFilter = locFilter.substring(0, locFilter.lastIndexOf(" and"));
                    //Insert location filter into the where clauses
                    queryString = queryString.replace("TRUE", locFilter);      
                  //  jsonObjRes.put("loc", loc);
                    chartVo.setLocation(loc);
                    
                }
            } 
            
            //Fetch data
            String hdrArr[] = header.split(",");
             ArrayList headerValues = new ArrayList();
            if(hdrArr.length>1) {
              
                for(String item:hdrArr) {  
                    headerValues.add("\""+item+"\"");
                }            
                //returnArray.put(headerValues);
            }
            chartVo.setHeader(headerValues);
            rs = session.createSQLQuery(queryString);
            List resultList = rs.list();
            chartVo.setData(resultList);
            dataTable.add(0, hdrArr);
            dataTable.addAll(1, resultList);
            chartVo.setDataTable(dataTable);
            
        } catch (Exception e) {
            // TODO : proper excption handling
            transaction.rollback();
            System.out.println("error:" + e.getLocalizedMessage());
            throw e;
        } finally {
            session.close();
        }
        return chartVo;
    }

    @Override
    public ChartVo notesData(String queryId, String clientCode, String note, String loc, String dateRange) throws Exception{
        
        HibernateUtil hibernate = new HibernateUtil();
        Session session = hibernate.getSessionFactory(clientCode).openSession();
        ChartVo chartVo = null;
        List dataTable;
        try{
            chartVo = new ChartVo();
            dataTable = new ArrayList();      
               transaction = session.beginTransaction();
            SQLQuery rs;
            
            Config cfg = Config.getInstance(clientCode);
            
            if(note.length()!=0) {
                //Insert note into the notes table
                //Add a '-s' to the queryId to indicate query for submit notes
                String qinsert = cfg.getProperty(clientCode,"notes-s");

                //Add parameters to be inserted
                qinsert += " ('"+loc+"','"+queryId+"','"+note+"')";

                //insert note
                /// FIX : Notes issue 21 Feb 2015
                SQLQuery insertHQL = session.createSQLQuery(qinsert);
                 // DML returns the hibernate query object that needs to be executed
                int affectedRecords = insertHQL.executeUpdate(); // returns number of affected records
                System.out.println("Note Inserted :"+affectedRecords); // Logging needs to be done properly
            }
            //Fetch data
            //Fill header first
            String header = "";                       
            String queryString="";
            String qs[] = cfg.getProperty(clientCode,"notes-n").split("\\|");
            header = qs[0];
            queryString = qs[1];            
            
            String filter = "query='"+queryId+"'";
            //Replace location filter in the query
            if(loc.length()!=0) {//find out the location type - state, district, city, area, etc
                filter += " and loc='"+loc+"'";
            }
            //Insert filter into the where clauses
            queryString = queryString.replace("TRUE", filter);
            
            String hdrArr[] = header.split(",");
            if(hdrArr.length>1) {
                ArrayList headerValues = new ArrayList();
                for(String item:hdrArr) {  
                    headerValues.add("\""+item+"\"");
                }            
                //returnArray.put(headerValues); 
                chartVo.setHeader(headerValues);
            }
            
           // rs = session.createSQLQuery(qinsert);
              rs = session.createSQLQuery(queryString); // insted of insert select needs to be fired         
            List resultList = rs.list();
             chartVo.setData(resultList);
            dataTable.add(0, hdrArr);
            dataTable.addAll(1, resultList);
            chartVo.setDataTable(dataTable);
            transaction.commit();
        } catch (Exception e) {
            // TODO : proper excption handling
            transaction.rollback();
            System.out.println("error:" + e.getLocalizedMessage());
            throw e;
        } finally {
            session.close();
        }
        return chartVo;
    
    }
   
    
    
       @Override
       public List<String> getWidgetPhotoList(String queryId, String clientCode, String filter, String location, String dateRange, int startIndex) throws Exception {  
         //ToDo: move the DB interaction code to the DAO layer
        HibernateUtil hibernate = new HibernateUtil();
        Session session = hibernate.getSessionFactory(clientCode).openSession();
        
       List<String> photoList = new ArrayList<String>();
        try {
                
           
            transaction = session.beginTransaction();
            SQLQuery rs;
            
            //set limit for images
            String queryStringPhotos = "";
            
            if(queryId.equals("scorecard")) {
                queryStringPhotos = "SELECT concat(date_format(date,\"%b-%Y\"),'/',filename) FROM images where "+filter.replaceAll("-", "'");
            } else {                
                queryStringPhotos = "SELECT concat(date_format(date,\"%b-%Y\"),'/',filename) FROM images where "+filter.replaceAll("-", "'");
            }
                
                                    
            SQLQuery rsphotos = session.createSQLQuery(queryStringPhotos);
            photoList = rsphotos.list();
           transaction.commit();
           

        } catch (Exception ex) {
            //TODO: proper exception handling
            transaction.rollback();
            System.out.println("error:" + ex.getLocalizedMessage());
            throw ex;
        }  finally {
            session.close();
        }
        return photoList;
    }
    
     @Override
    public ChartVo getWidgetChart(String queryId, String clientCode,String filter, String loc, String dateRange) throws Exception {
        //fetch the query
        ChartVo chartVo = null;
        List<String> header;
        List data;
        List dataTable;
        HibernateUtil hibernate = new HibernateUtil();
        Session session = hibernate.getSessionFactory(clientCode).openSession();
        
        try {
            chartVo = new ChartVo();
            header = new ArrayList<String>();
            data = new ArrayList();
            dataTable = new ArrayList();
            //TO Do to saperate DAA layer
            transaction = session.beginTransaction();
            
            //Fetch the different lines in the scorecard from the config file
            //Each item in the queries is a line in the scorecard.  It's a column in the scores table 
            //and a category in the legends table
            //Legends table is queried to get the score name corresponding to the score value
            Config cfg = Config.getInstance(clientCode);
            
            String qs[] = cfg.getProperty(clientCode,queryId).split("\\|");
            header.add(qs[0]);
            header.add(qs[1]);
            String queryString = qs[2];

            //Initialize location to empty
             chartVo.setLocation("");
            //Replace location filter in the query
            if(loc.length()!=0) {
                //find out the location type - state, district, city, area, etc
                String locTable = cfg.getProperty(clientCode,"LocationTable");
                String locFilter = "";
                String locs[] = loc.split(",");
                for(int i=0;i<locs.length;i++) {
                    String locQuery = "select type from location where loc='"+locs[i]+"'";
                    List<String> list = session.createSQLQuery(locQuery).list();
                    if(list.size()!=0) {
                        locFilter += locTable+"."+(String)list.get(0)+"='"+locs[i]+"' and ";
                    }
                }                            

                if(!locFilter.isEmpty()) {
                    locFilter = locFilter.substring(0, locFilter.lastIndexOf(" and"));
                    //Insert location filter into the where clauses
                    queryString = queryString.replace("TRUE", locFilter);      
                   // jsonObjRes.put("loc", loc);
                     chartVo.setLocation(loc);
                } 
            } 
            
            SQLQuery rs;
            rs = session.createSQLQuery(queryString);
            List resultList = rs.list();

//            //Insert query description into the return object
                String qdesc = cfg.getProperty(clientCode, queryId+"-t");
            //Insert query description into the return object
              String ctype = cfg.getProperty(clientCode, "chart_type");
           
            chartVo.setHeader(header);
            chartVo.setData(resultList);
            chartVo.setDesc(qdesc);
            chartVo.setCharType(ctype);
            dataTable.add(0, header.toArray());
            dataTable.addAll(1, resultList);
            chartVo.setDataTable(dataTable);
            
        }
        catch (Exception e) {
            //TO:DO - proper exception hadling
            transaction.rollback();
            System.out.println("error:" + e.getLocalizedMessage());
            throw e;
        } 
        finally {
            session.close();
        }
        return chartVo;
    }  
       
}
