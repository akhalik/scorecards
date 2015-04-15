
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
