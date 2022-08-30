package com.rmback.controller;

import com.rmback.model.Country;
import com.rmback.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
