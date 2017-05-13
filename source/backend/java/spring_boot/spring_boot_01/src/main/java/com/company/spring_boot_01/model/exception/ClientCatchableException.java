package com.company.spring_boot_01.model.exception;

/**
 * This class is an special kind of exception that can be
 * 	'catched' by the final user. The message that this exception
 * 	contain could be (and maybe should be) shown to the final user.
 */
public class ClientCatchableException extends Exception {

	/**
	 *
	 */
	public ClientCatchableException() {
	}

	/**
	 *
	 * @param message
	 */
	public ClientCatchableException(String message) {
		super(message);
	}

	/**
	 *
	 * @param message
	 * @param cause
	 */
	public ClientCatchableException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 *
	 * @param cause
	 */
	public ClientCatchableException(Throwable cause) {
		super(cause);
	}

	/**
	 *
	 * @param message
	 * @param cause
	 * @param enableSuppression
	 * @param writableStackTrace
	 */
	public ClientCatchableException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}
}
