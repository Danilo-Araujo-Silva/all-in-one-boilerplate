package com.company.spring_boot_01.controller;

import com.company.spring_boot_01.model.dao.EntityDAOInterface;
import com.company.spring_boot_01.model.entity.EntityInterface;
import com.company.spring_boot_01.model.service.EntityServiceInterface;

import java.lang.reflect.ParameterizedType;

/**
 * Abstract class that all entity controllers should inherit.
 * Entity controllers are controllers common to provide entity information.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to controllers about entities.
 */
abstract public class AbstractEntityController<Service extends EntityServiceInterface, Dao extends EntityDAOInterface, Entity extends EntityInterface> extends AbstractController implements EntityControllerInterface {

	/**
	 *
	 */
	private Class<Entity> entityClass;

	/**
	 *
	 */
	private Class<Dao> daoClass;

	/**
	 *
	 */
	private Class<Service> serviceClass;

	/**
	 *
	 */
	public AbstractEntityController() {
		setEntityClass(
			(Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0]
		);

		setDaoClass(
			(Class<Dao>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1]
		);

		setServiceClass(
			(Class<Service>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[2]
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
	public Class<Dao> getDaoClass() {
		return daoClass;
	}

	/**
	 *
	 * @param daoClass
	 */
	public void setDaoClass(Class<Dao> daoClass) {
		this.daoClass = daoClass;
	}

	/**
	 *
	 * @return
	 */
	public Class<Service> getServiceClass() {
		return serviceClass;
	}

	/**
	 *
	 * @param serviceClass
	 */
	public void setServiceClass(Class<Service> serviceClass) {
		this.serviceClass = serviceClass;
	}
}
