package com.example.controller;

import com.example.entity.User;
import com.example.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController extends AppController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Add user
    @PostMapping("/add")
    public Object addUser(@RequestBody User user) {

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return errorResponse("User already exists");
        }

        userRepository.save(user);
        return successResponse("User created successfully");
    }

    // Change password
    @PutMapping("/change-password")
    public Object changePassword(
            @RequestParam String username,
            @RequestParam String newPassword) {

        Optional<User> optionalUser = userRepository.findByUsername(username);

        if (optionalUser.isEmpty()) {
            return errorResponse("User not found");
        }

        User user = optionalUser.get();
        user.setPassword(newPassword);
        userRepository.save(user);
        return successResponse("Password updated successfully");
    }

    // Get user
    @GetMapping("/{username}")
    public Object getUser(@PathVariable String username) {

        Optional<User> optionalUser = userRepository.findByUsername(username);

        if (optionalUser.isEmpty()) {
            return errorResponse("User not found");
        }

        User user = optionalUser.get();

        Map<String, Object> data = Map.of(
                "id", user.getId(),
                "username", user.getUsername()
        );

        return successResponse("User fetched successfully", data);
    }
}
