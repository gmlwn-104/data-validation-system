package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

import com.example.demo.mapper.UserMapper;
import com.example.demo.dto.PageResponse;
import com.example.demo.dto.User;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;

    public void addUser(User user) {
        userMapper.insertUser(user);
    }

    public void deleteUser(Long id) {
        userMapper.deleteUser(id);
    }

    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

    public List<User> searchUsers(String keyword) {
        return userMapper.searchUsers(keyword);
    }

    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }

    public PageResponse<User> getUsers(String keyword, int page, int size) {

        int offset = page * size;

        List<User> list = userMapper.searchUsersPaging(keyword, size, offset);
        int total = userMapper.countUsers(keyword);

        return new PageResponse<>(list, total);
    }

    public int countUsersDashboard() {
        return userMapper.countUsersDashboard();
    }

    public List<Map<String, Object>> getUserTrend() {
        return userMapper.selectUserTrend();
    }

}
