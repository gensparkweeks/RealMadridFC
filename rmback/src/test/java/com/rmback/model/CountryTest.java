package com.rmback.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CountryTest {
    Country country;

    @BeforeEach
    void setUp(){
        country = new Country("Italy", "italy.jpg");
        System.out.println("I am in Before Each");
    }

    @Test
    void getCountryName() {
        assertEquals("Italy", country.getCountryName());
    }

    @Test
    void getFlag() {
        assertEquals("italy.jpg", country.getFlag());
    }

}