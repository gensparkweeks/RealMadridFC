package com.rmback.service;

import com.rmback.dao.CountryDao;
import com.rmback.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService{

    @Autowired
    CountryDao countryDao;

    @Override
    public List<Country> findAllCountry() {
        return countryDao.findAll();
    }

    @Override
    public Country findCountryById(int id) {

        Country country;

        Optional<Country> opt = countryDao.findById(id);
        if (opt.isPresent()){
            country = opt.get();
        }else{
            throw new RuntimeException("The id was not found");
        }

        return country;
    }

    @Override
    public Country createCountry(Country country) {
        return countryDao.save(country);
    }

    @Override
    public String deleteCountry(int id) {
        countryDao.deleteById(id);
        return "The Country with id: " + id + " was deleted";
    }
}
