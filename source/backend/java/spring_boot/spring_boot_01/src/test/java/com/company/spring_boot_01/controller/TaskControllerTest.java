package com.company.spring_boot_01.controller;

import com.company.spring_boot_01.model.test.AbstractTest;
import org.junit.FixMethodOrder;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Tests for TaskService class.
 * FixMethodOrder is used to preserve order.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TaskControllerTest extends AbstractTest {
}
