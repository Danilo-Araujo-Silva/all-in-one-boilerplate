package com.company.spring_boot_01.model.dao;

import com.company.spring_boot_01.model.entity.TaskEntity;
import com.company.spring_boot_01.model.enums.TaskStatusEnum;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;

/**
 * DAO for tasks.
 */
@Transactional
@Repository
public class TaskDAO extends AbstractEntityDAO<TaskEntity> {

	/**
	 * Get an entity by it's id.
	 * @param id
	 * @return
	 */
	public TaskEntity get(Integer id) {
		return getEntityManager().find(TaskEntity.class, id);
	}

	/**
	 * Get an entity by itself.
	 * This is useful when a new, untouched entity coming from the database is needed,
	 * 	for example to comparision.
	 *
	 * @param entity
	 * @return
	 */
	public TaskEntity get(TaskEntity entity) {
		return get(entity.getId());
	}

	/**
	 * Get all entities.
	 *
	 * @return
	 */
	public ArrayList<TaskEntity> getAll() {
		StringBuilder hql = new StringBuilder();

		hql.append("from ");
		hql.append("	TaskEntity ");
		hql.append("order by ");
		hql.append("	id ");

		return (ArrayList<TaskEntity>) getEntityManager()
			.createQuery(hql.toString())
			.getResultList();
	}

	/**
	 * Get all visible (not deleted entities).
	 *
	 * @return
	 */
	public ArrayList<TaskEntity> getAllVisible() {
		StringBuilder hql = new StringBuilder();

		hql.append("from ");
		hql.append("	TaskEntity ");
		hql.append("where ");
		hql.append(" deletedAt is null ");
		hql.append("order by ");
		hql.append("	id ");

		return (ArrayList<TaskEntity>) getEntityManager()
			.createQuery(hql.toString())
			.getResultList();
	}

	/**
	 * Persist the entity.
	 *
	 * @param entity
	 * @return
	 */
	public Boolean persist(TaskEntity entity) {
		getEntityManager().persist(entity);

		return true;
	}

	/**
	 * Merge the entity.
	 *
	 * @param entity
	 * @return
	 */
	public Boolean merge(TaskEntity entity) {
		getEntityManager().merge(entity);

		return true;
	}

	/**
	 *
	 * @param entity
	 * @return
	 */
	public Boolean delete(TaskEntity entity) {
		getEntityManager().remove(entity);

		return true;
	}

	/**
	 * Flush.
	 */
	public Boolean flush() {
		getEntityManager().flush();

		return true;
	}
}
