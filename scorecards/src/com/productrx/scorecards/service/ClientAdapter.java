/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.service;

import com.productrx.scorecards.common.interfaces.IClientInterface;
import com.productrx.scorecards.util.HibernateUtil;
import java.io.IOException;
import java.math.BigInteger;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

/**
 *
 * @author Kiran
 */
public class ClientAdapter implements IClientInterface {
    /**
     * METHOD USED TO GET FROM PARSED XML FILE
     * @return
     */
    @Override
    public JSONArray getClientUIData() {
        try {
            JSONArray resArray = parseScorecardTemplate();
            return resArray;
        } catch (IOException ex) {
            Logger.getLogger(ClientAdapter.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(ClientAdapter.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SAXException ex) {
            Logger.getLogger(ClientAdapter.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    /**
     * METHOD USED TO GET CONFIGURATION DATA FROM CONFIG.PROPERTIES
     * @param clientCode
     * @return
     */
    @Override 
    public JSONArray getClientsInfo(String clientCode) {
        JSONArray resArray = parseConfig(clientCode);
        return resArray;
    }

    /**
     *METHOD USED TO PARSE THE CONFIG.PROPERTIES FILE.
     * @return
     */
    public JSONArray parseConfig(String clientCode) {
        Properties properties = new Properties();
        try {
            String configPath = clientCode.concat(".config.properties");
            properties.load (ClientAdapter.class.getClassLoader().getResourceAsStream(configPath));
            
            JSONArray resArray = new JSONArray();
            JSONObject resObj = new JSONObject();
            resObj.accumulate("logo", properties.getProperty("brandstrip_logo"));
            resObj.accumulate("title", properties.getProperty("brandstrip_title"));
            resObj.accumulate("DashboardImages", properties.getProperty("DashboardImages"));
            resObj.accumulate("ReportDesc", properties.getProperty("ReportDesc"));
            resObj.accumulate("Queries", properties.getProperty("Queries"));
            resObj.accumulate("QueryIds", properties.getProperty("QueryIds"));
            resObj.accumulate("ImageFolder", properties.getProperty("ImageFolder"));

            return resArray.put(resObj);
        } catch (Exception e) {
            System.out.println("" + e.getCause());
            e.printStackTrace();
            return null;
        }
    }

    /**
     *
     * @return
     * @throws IOException
     * @throws ParserConfigurationException
     * @throws SAXException
     */
    public JSONArray parseScorecardTemplate() throws IOException, ParserConfigurationException, SAXException {
        DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();  //"SCORECARD_TEMPLATE.xml"

        Document doc = docBuilder.parse(ClientAdapter.class
                .getClassLoader().getResourceAsStream("com//productrx//scorecards//spice//service//SCORECARD_TEMPLATE.xml"));
        doc.getDocumentElement().normalize();
        NodeList root = doc.getChildNodes();
        Node SCORECARD = getNode("SCORECARD", root);
        Node header = getNode("SCORECARD_HEADER", SCORECARD.getChildNodes());
        NodeList hnodes = header.getChildNodes();
        String headerItems = getNodeValue("Queries", hnodes);
        String headerItemParameters = getNodeValue("QueryIds", hnodes);

        JSONArray resArray = new JSONArray();
        JSONObject resObj = new JSONObject();
        resObj.accumulate("Queries", headerItems);
        resObj.accumulate("QueryIds", headerItemParameters);

        return resArray.put(resObj);
    }

    
    
    /**
     *
     * @param tagName
     * @param nodes
     * @return
     */ /*Following Methods used for XML Parsing*/
    protected Node getNode(String tagName, NodeList nodes) {
        for (int x = 0; x < nodes.getLength(); x++) {
            Node node = nodes.item(x);
            if (node.getNodeName().equalsIgnoreCase(tagName)) {
                return node;
            }
        }
        return null;
    }

    /**
     *
     * @param node
     * @return
     */
    protected String getNodeValue(Node node) {
        NodeList childNodes = node.getChildNodes();
        for (int x = 0; x < childNodes.getLength(); x++) {
            Node data = childNodes.item(x);
            if (data.getNodeType() == Node.TEXT_NODE) {
                return data.getNodeValue();
            }
        }
        return "";
    }

    /**
     *
     * @param tagName
     * @param nodes
     * @return
     */
    protected String getNodeValue(String tagName, NodeList nodes) {
        for (int x = 0; x < nodes.getLength(); x++) {
            Node node = nodes.item(x);
            if (node.getNodeName().equalsIgnoreCase(tagName)) {
                NodeList childNodes = node.getChildNodes();
                for (int y = 0; y < childNodes.getLength(); y++) {
                    Node data = childNodes.item(y);
                    if (data.getNodeType() == Node.TEXT_NODE) {
                        return data.getNodeValue();
                    }
                }
            }
        }
        return "";
    }

    /**
     *
     * @param attrName
     * @param node
     * @return
     */
    protected String getNodeAttr(String attrName, Node node) {
        NamedNodeMap attrs = node.getAttributes();
        for (int y = 0; y < attrs.getLength(); y++) {
            Node attr = attrs.item(y);
            if (attr.getNodeName().equalsIgnoreCase(attrName)) {
                return attr.getNodeValue();
            }
        }
        return "";
    }

    /**
     *
     * @param tagName
     * @param attrName
     * @param nodes
     * @return
     */
    protected String getNodeAttr(String tagName, String attrName, NodeList nodes) {
        for (int x = 0; x < nodes.getLength(); x++) {
            Node node = nodes.item(x);
            if (node.getNodeName().equalsIgnoreCase(tagName)) {
                NodeList childNodes = node.getChildNodes();
                for (int y = 0; y < childNodes.getLength(); y++) {
                    Node data = childNodes.item(y);
                    if (data.getNodeType() == Node.ATTRIBUTE_NODE) {
                        if (data.getNodeName().equalsIgnoreCase(attrName)) {
                            return data.getNodeValue();
                        }
                    }
                }
            }
        }
        return "";
    }
}
