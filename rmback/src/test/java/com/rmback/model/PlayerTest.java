package com.rmback.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class PlayerTest {

    Player player;
    Country country;
    Position position;

    @BeforeEach
    void setUp(){
        player = new Player("John", "Tom", new Date(), "picture.png", "Bio",country, position);
        System.out.println("I am in Before Each");
    }
    @Test
    void getFirstName() {
        assertEquals("John", player.getFirstName());
    }

    @Test
    void getLastName() {
        assertEquals("Tom", player.getLastName());
    }

    @Test
    void getDob() {
        assertEquals(new Date(), player.getDob());
    }

    @Test
    void getPicture() {
        assertEquals("picture.png", player.getPicture());
    }

    @Test
    void getBio() {
        assertEquals("Bio", player.getBio());
    }
}