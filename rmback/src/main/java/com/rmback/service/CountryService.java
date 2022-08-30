package com.rmback.service;

import com.rmback.model.Country;

import java.util.List;

public interface CountryService {
    public List<Country> findAllCountry();
    public Country findCountryById(int id);
    public Country createCountry(Country country);
    public String deleteCountry(int id);
}
