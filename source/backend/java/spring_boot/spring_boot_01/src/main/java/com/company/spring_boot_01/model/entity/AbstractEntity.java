package com.company.spring_boot_01.model.entity;

/**
 * Class that all entities should inherit.
 * This class have the intention to provide common properties, methods or behaviors
 * 	to entities.
 * This class has Entity as generic. And this generic should be the same class that it is exteding.
 * This is needed if we would like to create several helper methods to create cloning,
 * 	comparision, etc methods inside the abstract class instead of the common class automatically
 * 	casting to the correct entity.
 */
abstract public class AbstractEntity<Entity extends EntityInterface> implements EntityInterface {
}
