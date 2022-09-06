package com.rmback.controller;

import com.rmback.model.Country;
import com.rmback.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("api/countries")
public class CountryController {


    @Autowired
    CountryService countryService;

    @GetMapping("/home")
    public String home(){
        return "<html><h1>Welcome to my API Rest from CountryController</h1></html>";
    }

    @GetMapping
    public List<Country> findAllCountry(){
        return countryService.findAllCountry();
    }

    @GetMapping("/{id}")
    public Country findCountryById(@PathVariable int id){
        return countryService.findCountryById(id);
    }

    @PostMapping
    public Country createCountry(@RequestBody Country country){

//        System.out.println(image.getName());
//        System.out.println(image.getOriginalFilename());
//        System.out.println(image.getContentType());

//        if (!image.isEmpty()){
//            Path imagesDirectory = Paths.get("src/main/resources/static/images");
//            String absolutePath = imagesDirectory.toFile().getAbsolutePath();
//
//            try {
//                byte[] imageBytes = image.getBytes();
//                Path fullPath = Paths.get(absolutePath+"/"+image.getOriginalFilename());
//                Files.write(fullPath, imageBytes);
//
//                country.setFlag(image.getOriginalFilename());
//
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }
//        }else{
//            country.setFlag("empty.png");
//        }

        return countryService.createCountry(country);
    }

    @PutMapping
    public Country updateCountry(@RequestBody Country country){
        return countryService.createCountry(country);
    }

    @DeleteMapping("/{id}")
    public String deleteCountryById(@PathVariable int id){
        return countryService.deleteCountry(id);
    }
}
