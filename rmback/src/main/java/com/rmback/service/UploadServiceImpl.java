package com.rmback.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
@Service
public class UploadServiceImpl implements UploadService{
    @Override
    public void uploadFile(MultipartFile file) {

        String upLoadFolderPath = "/fotos/";

        try {
            byte[] data = file.getBytes();
            Path path = Paths.get(upLoadFolderPath + file.getOriginalFilename());
            Files.write(path, data);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

}
