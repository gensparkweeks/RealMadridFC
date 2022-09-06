package com.rmback.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PositionTest {

    Position position;

    @BeforeEach
    void setUp() {
        position = new Position("Goalkeeper");
        System.out.println("I am in Before Each");
    }

    @Test
    void getPositionName() {
        assertEquals("Goalkeeper", position.getPositionName());

    }

}