package com.company.spring_boot_01.model.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Task entity.
 */
@Entity
@Table(name = "task")
public class TaskEntity extends AbstractEntity<TaskEntity> {

	/**
	 * Serial.
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Id.
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	/**
	 * Title.
	 */
	@Column(name = "title")
	private String title;

	/**
	 * Task status.
	 * @see com.company.spring_boot_01.model.enums.TaskStatusEnum
	 */
	@Column(name = "status")
	private String status;

	/**
	 * Description.
	 */
	@Column(name = "description")
	private String description;

	/**
	 * Date when the task was created.
	 */
	@Column(name = "created_at")
	private Date createdAt;

	/**
	 * Id of the user who created the task.
	 */
	@Column(name = "created_by")
	private Integer createdBy;

	/**
	 * Date when the task was last updated.
	 */
	@Column(name = "updated_at")
	private Date updatedAt;

	/**
	 * Id of the user who did the last updated on the task.
	 */
	@Column(name = "updated_by")
	private Integer updatedBy;

	/**
	 * Date when the task was 'deleted'.
	 * A 'deleted' task is a disabled task.
	 */
	@Column(name = "deleted_at")
	private Date deletedAt;

	/**
	 * Id of the user who 'deleted' the task.
	 * A 'deleted' task is a disabled task.
	 */
	@Column(name = "deleted_by")
	private Integer deletedBy;

	/**
	 * Date when the task was finished.
	 */
	@Column(name = "completed_at")
	private Date completedAt;

	/**
	 * Id of the user who finished the task.
	 */
	@Column(name = "completed_by")
	private Integer completedBy;

	/**
	 *
	 * @return
	 */
	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	/**
	 *
	 * @return
	 */
	public Integer getId() {
		return id;
	}

	/**
	 *
	 * @param id
	 */
	public void setId(Integer id) {
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
	public String getStatus() {
		return status;
	}

	/**
	 *
	 * @param status
	 */
	public void setStatus(String status) {
		this.status = status;
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

	/**
	 *
	 * @return
	 */
	public Date getCreatedAt() {
		return createdAt;
	}

	/**
	 *
	 * @param createdAt
	 */
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 *
	 * @return
	 */
	public Integer getCreatedBy() {
		return createdBy;
	}

	/**
	 *
	 * @param createdBy
	 */
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 *
	 * @return
	 */
	public Date getUpdatedAt() {
		return updatedAt;
	}

	/**
	 *
	 * @param updatedAt
	 */
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	/**
	 *
	 * @return
	 */
	public Integer getUpdatedBy() {
		return updatedBy;
	}

	/**
	 *
	 * @param updatedBy
	 */
	public void setUpdatedBy(Integer updatedBy) {
		this.updatedBy = updatedBy;
	}

	/**
	 *
	 * @return
	 */
	public Date getDeletedAt() {
		return deletedAt;
	}

	/**
	 *
	 * @param deletedAt
	 */
	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	/**
	 *
	 * @return
	 */
	public Integer getDeletedBy() {
		return deletedBy;
	}

	/**
	 *
	 * @param deletedBy
	 */
	public void setDeletedBy(Integer deletedBy) {
		this.deletedBy = deletedBy;
	}

	/**
	 *
	 * @return
	 */
	public Date getCompletedAt() {
		return completedAt;
	}

	/**
	 *
	 * @param completedAt
	 */
	public void setCompletedAt(Date completedAt) {
		this.completedAt = completedAt;
	}

	/**
	 *
	 * @return
	 */
	public Integer getCompletedBy() {
		return completedBy;
	}

	/**
	 *
	 * @param completedBy
	 */
	public void setCompletedBy(Integer completedBy) {
		this.completedBy = completedBy;
	}
}
