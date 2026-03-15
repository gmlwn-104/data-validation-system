package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

import com.example.demo.mapper.UserMapper;
import com.example.demo.dto.User;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;

    public List<User> getUsers() {
        return userMapper.findAll();
    }

    public void addUser(User user) {
        userMapper.insertUser(user);
    }

    public void deleteUser(Long id) {
        userMapper.deleteUser(id);
    }

    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

}
