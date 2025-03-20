package com.example.hr_portal.service;

import com.example.hr_portal.model.HR;
import com.example.hr_portal.repository.HRRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HRService {
    private final HRRepository hrRepository;

    public HRService(HRRepository hrRepository) {
        this.hrRepository = hrRepository;
    }

    public Optional<HR> getHRByEmail(String email) {
        return hrRepository.findByEmail(email);
    }

    public HR saveHR(HR hr) {
        return hrRepository.save(hr);
    }
}
