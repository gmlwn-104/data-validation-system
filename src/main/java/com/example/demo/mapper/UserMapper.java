package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import com.example.demo.dto.User;

@Mapper
public interface UserMapper {
    
    @Select("SELECT * FROM user")
    List<User> findAll();

    @Insert("INSERT INTO user(name, age) VALUES(#{name}, #{age})")
    void insertUser(User user);

    @Delete("DELETE FROM user WHERE id = #{id}")
    void deleteUser(Long id);
    
    @Update("UPDATE user SET name=#{name}, age=#{age} WHERE id=#{id}")
    void updateUser(User user);
    
}
