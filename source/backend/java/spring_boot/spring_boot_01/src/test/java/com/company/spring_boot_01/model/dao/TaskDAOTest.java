package com.company.spring_boot_01.model.dao;

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
 * Tests for TaskDAO class.
 * FixMethodOrder is used to preserve order.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TaskDAOTest extends AbstractTest {

	/**
	 *
	 */
	@Autowired
	private TaskDAO taskDAO;

	/**
	 *
	 */
	@Test
	public void test_1_insert() {
		TaskEntity entity = new TaskEntity();
		entity.setTitle("Title");
		entity.setDescription("Description");
		entity.setStatus(TaskStatusEnum.PENDING.getId());
		entity.setCreatedAt(new Date());
		entity.setCreatedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));
		entity.setUpdatedAt(new Date());
		entity.setUpdatedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));

		taskDAO.persist(entity);
	}

	/**
	 *
	 */
	@Test
	public void test_2_get() {
		TaskEntity entity = taskDAO.get(1);

		assertTrue(entity.getTitle() != null);
	}

	/**
	 *
	 */
	@Test
	public void test_3_update() {
		TaskEntity entity = taskDAO.get(1);

		entity.setTitle(entity.getTitle() + " - Updated");
		taskDAO.merge(entity);
		taskDAO.flush();
	}
}
