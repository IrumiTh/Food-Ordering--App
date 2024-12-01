package com.theesh.service;

import com.theesh.model.User;
import jdk.jshell.spi.ExecutionControl;
import org.aspectj.apache.bcel.ExceptionConstants;

import java.security.PublicKey;

public interface UserService {

    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;


}
