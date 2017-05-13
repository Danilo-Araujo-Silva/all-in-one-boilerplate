package com.company.spring_boot_01.model.dao;

import com.company.spring_boot_01.model.entity.EntityInterface;

import java.lang.reflect.ParameterizedType;

/**
 * Class that all entity DAO classes should inherit.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to DAO classes that are about entities.
 */
abstract public class AbstractEntityDAO<Entity extends EntityInterface> extends AbstractDAO implements EntityDAOInterface {

	/**
	 *
	 */
	private Class<Entity> entityClass;

	/**
	 *
	 */
	public AbstractEntityDAO() {
		setEntityClass(
			(Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0]
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
}
