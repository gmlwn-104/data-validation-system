package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

import com.example.demo.dto.User;

@Mapper
public interface UserMapper {

    void insertUser(User user);

    void deleteUser(Long id);
    
    void updateUser(User user);
    
    List<User> getAllUsers();

    List<User> searchUsers(String keyword);

    List<User> searchUsersPaging(String keyword, int size, int offset);

    int countUsers(String keyword);

    int countUsersDashboard();

    List<Map<String, Object>> selectUserTrend();
}
