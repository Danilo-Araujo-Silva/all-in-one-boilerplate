package com.company.spring_boot_01.model.enums;

/**
 * Task status enum.
 */
public enum TaskStatusEnum {

	PENDING("pending", "Pendente", "Tarefa pendente."),
	COMPLETED("completed", "Concluída", "Tarefa concluída."),
	DELETED("deleted", "Deletada", "Tarefa deletada."),
	;

	/**
	 *
	 */
	private String id;

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
	 * @param id
	 * @param title
	 * @param description
	 */
	private TaskStatusEnum(String id, String title, String description) {
		this.id = id;
		this.title = title;
		this.description = description;
	}

	/**
	 *
	 * @return
	 */
	public String getId() {
		return id;
	}

	/**
	 *
	 * @param id
	 */
	public void setId(String id) {
		this.id = id;
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
	public String getDescription() {
		return description;
	}

	/**
	 *
	 * @param description
	 */
	public void setDescription(String description) {
		this.description = description;
	}
}
