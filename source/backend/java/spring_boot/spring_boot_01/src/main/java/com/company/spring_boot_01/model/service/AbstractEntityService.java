package com.company.spring_boot_01.model.service;

import com.company.spring_boot_01.model.dao.EntityDAOInterface;
import com.company.spring_boot_01.model.entity.EntityInterface;

import java.lang.reflect.ParameterizedType;

/**
 * Class that all entity Service classes should inherit.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to entity Service classes.
 */
abstract public class AbstractEntityService<DAO extends EntityDAOInterface, Entity extends EntityInterface> extends AbstractService implements EntityServiceInterface {

	/**
	 *
	 */
	private Class<Entity> entityClass;

	/**
	 *
	 */
	private Class<DAO> daoClass;

	/**
	 *
	 */
	public AbstractEntityService() {
		setEntityClass(
			(Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0]
		);

		setDaoClass(
			(Class<DAO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1]
		);
	}

	/**
	 *
	 * @return
	 */
	public Class<Entity> getEntityClass() {
		return entityClass;
	}

	/**
	 *
	 * @param entityClass
	 */
	public void setEntityClass(Class<Entity> entityClass) {
		this.entityClass = entityClass;
	}

	/**
	 *
	 * @return
	 */
	public Class<DAO> getDaoClass() {
		return daoClass;
	}

	/**
	 *
	 * @param daoClass
	 */
	public void setDaoClass(Class<DAO> daoClass) {
		this.daoClass = daoClass;
	}
}
