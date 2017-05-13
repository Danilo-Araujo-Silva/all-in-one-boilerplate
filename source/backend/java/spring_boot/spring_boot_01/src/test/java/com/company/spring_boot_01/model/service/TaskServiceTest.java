package com.company.spring_boot_01.model.service;

import com.company.spring_boot_01.model.dao.TaskDAO;
import com.company.spring_boot_01.model.entity.TaskEntity;
import com.company.spring_boot_01.model.enums.ConstantsEnum;
import com.company.spring_boot_01.model.enums.TaskStatusEnum;
import com.company.spring_boot_01.model.test.AbstractTest;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.assertTrue;

/**
 * Tests for TaskService class.
 * FixMethodOrder is used to preserve order.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TaskServiceTest extends AbstractTest {

	/**
	 *
	 */
	@Autowired
	private TaskService taskService;

	/**
	 *
	 */
	@Test
	public void test_1_insert() throws Exception {
		TaskEntity entity = new TaskEntity();
		entity.setTitle("Title");
		entity.setDescription("Description");

		taskService.insert(entity);
	}

	/**
	 *
	 */
	@Test
	public void test_2_get() throws Exception {
		TaskEntity entity = taskService.get(1);

		assertTrue(entity.getTitle() != null);
	}

	/**
	 *
	 */
	@Test
	public void test_3_update() throws Exception {
		TaskEntity entity = taskService.get(1);

		entity.setTitle(entity.getTitle() + " - Updated");
		taskService.update(entity);
	}

//	/**
//	 *
//	 */
//	@Test
//	public void test_4_complete() throws Exception {
//		TaskEntity entity = taskService.get(1);
//
//		taskService.complete(entity);
//	}
//
//	/**
//	 *
//	 */
//	@Test
//	public void test_5_reopen() throws Exception {
//		TaskEntity entity = taskService.get(1);
//
//		taskService.reopen(entity);
//	}
//
//	/**
//	 *
//	 */
//	@Test
//	public void test_6_delete() throws Exception {
//		TaskEntity entity = taskService.get(1);
//
//		taskService.delete(entity);
//	}
}
