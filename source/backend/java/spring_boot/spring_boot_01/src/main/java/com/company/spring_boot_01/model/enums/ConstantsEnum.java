package com.company.spring_boot_01.model.enums;

/**
 * Enum to maintain application constants.
 * This enum is util to put 'hardcode' in the application too, so it will be easy to be tracked
 * 	after.
 */
public enum ConstantsEnum {

	GUEST_USER_ID("Guest user id", "An id for a guest user", 1);

	/**
	 *
	 */
	private String title;

	/**
	 *
	 */
	private String description;

	/**
	 *
	 */
	private Object value;

	/**
	 *
	 * @param title
	 * @param description
	 * @param value
	 */
	private ConstantsEnum(String title, String description, Object value) {
		this.title = title;
		this.description = description;
		this.value = value;
	}

	/**
	 *
	 * @return
	 */
	public String getTitle() {
		return title;
	}

	/**
	 *
	 * @return
	 */
	public String getDescription() {
		return description;
	}

	/**
	 *
	 * @return
	 */
	public Object getValue() {
		return value;
	}

	/**
	 *
	 * @param returningClass
	 * @param <R>
	 * @return
	 */
	public <R> R getValue(Class<R> returningClass) {
		return returningClass.cast(getValue());
	}
}
