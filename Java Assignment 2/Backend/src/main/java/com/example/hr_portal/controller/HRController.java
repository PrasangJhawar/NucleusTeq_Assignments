package com.example.hr_portal.controller;

import com.example.hr_portal.model.HR;
import com.example.hr_portal.service.HRService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://127.0.0.1:5500")

@RestController
@RequestMapping("/hr")
public class HRController {

    private final HRService hrService;

    public HRController(HRService hrService) {
        this.hrService = hrService;
    }

    @GetMapping("/{email}")
    public Optional<HR> getHRByEmail(@PathVariable String email) {
        return hrService.getHRByEmail(email);
    }

    @PostMapping
    public HR saveHR(@RequestBody HR hr) {
        return hrService.saveHR(hr);
    }
}
