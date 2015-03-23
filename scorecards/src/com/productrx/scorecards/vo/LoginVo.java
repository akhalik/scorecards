
package com.productrx.scorecards.vo;

import java.io.Serializable;



/**
 *
 * @author akhalik
 */
public class LoginVo implements Serializable{
    
    private String userName;
    private String clientId;
    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
    
}
