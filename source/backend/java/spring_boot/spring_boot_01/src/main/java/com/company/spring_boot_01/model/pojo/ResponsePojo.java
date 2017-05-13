package com.company.spring_boot_01.model.pojo;

/**
 * Simple pojo used in RESTful responses.
 */
public class ResponsePojo {

	/**
	 *
	 */
	private String title;

	/**
	 *
	 */
	private String message;

	/**
	 *
	 */
	public ResponsePojo() {
	}

	/**
	 *
	 * @param title
	 * @param message
	 */
	public ResponsePojo(String title, String message) {
		this.title = title;
		this.message = message;
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
	 * @param title
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 *
	 * @return
	 */
	public String getMessage() {
		return message;
	}

	/**
	 *
	 * @param message
	 */
	public void setMessage(String message) {
		this.message = message;
	}
}
