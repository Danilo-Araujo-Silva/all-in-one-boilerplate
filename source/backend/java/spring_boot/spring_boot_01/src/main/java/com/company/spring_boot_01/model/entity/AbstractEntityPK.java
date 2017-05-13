package com.company.spring_boot_01.model.entity;

/**
 * Class that all entities composite primary keys classes should inherit.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to entities primary keys (if the entity need to have a composite primary key).
 * This class uses a generic to achive similar features like the AbstractEntity class.
 * @see AbstractEntity
 */
abstract public class AbstractEntityPK<EntityPK extends EntityPKInterface> implements EntityPKInterface {
}
