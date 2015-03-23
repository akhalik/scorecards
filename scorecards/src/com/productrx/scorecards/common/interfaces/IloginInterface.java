/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.common.interfaces;

/**
 *
 * @author Kiran
 */
public interface IloginInterface {
    
    public boolean validateCredentials(String ClientID,String Username,String Password);
    
}
