/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.productrx.scorecards.common;

/**
 *
 * @author akhalik
 */
public class RESTException extends ScorecardException{

    public RESTException(String errorContext, int errorCode, String errorMessage) {
        super(errorContext, errorCode, errorMessage);
    }

    public RESTException(String errorContext, int errorCode, String errorMessage, Throwable cause) {
        super(errorContext, errorCode, errorMessage, cause);
    }
   
    
}
