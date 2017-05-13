package com.company.spring_boot_01.model.enums;

/**
 * Enum with the allowed operations for tasks.
 * This enum is used at sanitize and validate methods.
 */
public enum TaskOperationEnum {

	INSERT,
	UPDATE,
	INSERT_OR_UPDATE,
	COMPLETE,
	REOPEN,
	DELETE;
}