package com.example.demo.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PageResponse;
import com.example.demo.dto.User;
import com.example.demo.service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;

    @GetMapping("/users")
    public PageResponse<User> getUsers(
        @RequestParam(defaultValue = "") String keyword,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
        return userService.getUsers(keyword, page, size);
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PutMapping("/users/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        userService.updateUser(user);
    }
    
    @GetMapping("/users/count")
    public int getCountUserDashboard() {
        int userDashboardCnt = userService.countUsersDashboard();
        return userDashboardCnt;
    }
    
    @GetMapping("/users/trend")
    public List<Map<String, Object>> getUserTrend() {
        return userService.getUserTrend();
    }
    
}
