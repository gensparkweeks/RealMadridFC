package com.rmback.service;

import org.springframework.web.multipart.MultipartFile;

public interface UploadService {

    public void uploadFile(MultipartFile file);

    public void findById(int id);
}
