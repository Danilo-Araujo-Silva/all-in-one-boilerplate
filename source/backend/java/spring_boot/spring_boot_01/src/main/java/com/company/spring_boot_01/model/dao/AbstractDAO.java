package com.company.spring_boot_01.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Class that all DAO classes should inherit.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to DAO classes.
 */
abstract public class AbstractDAO implements DAOInterface {

	/**
	 *
	 */
	@PersistenceContext
	private EntityManager entityManager;

	/**
	 *
	 * @return
	 */
	public EntityManager getEntityManager() {
		return entityManager;
	}

	/**
	 *
	 * @param entityManager
	 */
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
}
